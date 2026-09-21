// Regenerates src/data/trendsData.json via the Claude API.
// Run daily by .github/workflows/trends.yml. Requires ANTHROPIC_API_KEY.
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const OUT_PATH = fileURLToPath(new URL('../src/data/trendsData.json', import.meta.url))
const MODEL = 'claude-sonnet-5'

const PROMPT = `Give me today's most current, real trends in two categories: marketing, and graphic design/motion design.

5 items per category. Each item needs a short punchy title (under 8 words) and a 1-2 sentence summary written in plain, conversational language, no em dashes, no marketing fluff.

Reply with ONLY valid JSON, no markdown fences, no commentary, in exactly this shape:
{
  "marketing": [{ "title": "...", "summary": "..." }],
  "design": [{ "title": "...", "summary": "..." }]
}`

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set')
    process.exit(1)
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2048,
      messages: [{ role: 'user', content: PROMPT }],
    }),
  })

  if (!res.ok) {
    console.error(`Anthropic API error: ${res.status} ${await res.text()}`)
    process.exit(1)
  }

  const data = await res.json()
  const text = data.content?.[0]?.text?.trim()
  if (!text) {
    console.error('Empty response from Anthropic API')
    process.exit(1)
  }

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch (err) {
    console.error('Failed to parse model output as JSON:', text)
    process.exit(1)
  }

  if (!Array.isArray(parsed.marketing) || !Array.isArray(parsed.design)) {
    console.error('Model output missing marketing/design arrays:', parsed)
    process.exit(1)
  }

  const output = {
    updatedAt: new Date().toISOString().slice(0, 10),
    marketing: parsed.marketing,
    design: parsed.design,
  }

  await writeFile(OUT_PATH, JSON.stringify(output, null, 2) + '\n')
  console.log(`Wrote ${OUT_PATH}`)
}

main()
