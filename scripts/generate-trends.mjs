// Regenerates src/data/trendsData.json from real RSS feeds.
// Run daily by .github/workflows/trends.yml. No API key needed.
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const OUT_PATH = fileURLToPath(new URL('../src/data/trendsData.json', import.meta.url))
const ITEMS_PER_SECTION = 5

const FEEDS = {
  marketing: [
    { name: 'Marketing Dive', url: 'https://www.marketingdive.com/feeds/news/' },
    { name: 'Social Media Today', url: 'https://www.socialmediatoday.com/feeds/news' },
    { name: 'HubSpot Marketing Blog', url: 'https://blog.hubspot.com/marketing/rss.xml' },
  ],
  design: [
    { name: 'Creative Bloq', url: 'https://www.creativebloq.com/feed' },
    { name: 'Design Milk', url: 'https://design-milk.com/feed/' },
    { name: 'Motionographer', url: 'https://motionographer.com/feed/' },
  ],
}

function decodeEntities(str) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/<[^>]+>/g, '')
    .trim()
}

function parseFeedItems(xml) {
  const blocks = [...xml.matchAll(/<item\b[\s\S]*?<\/item>|<entry\b[\s\S]*?<\/entry>/g)].map(m => m[0])
  return blocks.map(block => {
    const title = block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]
    const linkTag = block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/)?.[1]
    const linkText = block.match(/<link[^>]*>([\s\S]*?)<\/link>/)?.[1]
    const description = block.match(/<description>([\s\S]*?)<\/description>/)?.[1]
      || block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/)?.[1]

    return {
      title: title ? decodeEntities(title) : null,
      link: (linkTag || linkText || '').trim(),
      summary: description ? decodeEntities(description).slice(0, 220) : '',
    }
  }).filter(item => item.title && item.link)
}

async function fetchFeed(feed) {
  try {
    const res = await fetch(feed.url, { headers: { 'user-agent': 'Mozilla/5.0 (drewpenkert.com trends bot)' } })
    if (!res.ok) {
      console.error(`Failed to fetch ${feed.name}: ${res.status}`)
      return []
    }
    const xml = await res.text()
    return parseFeedItems(xml).map(item => ({ ...item, source: feed.name }))
  } catch (err) {
    console.error(`Error fetching ${feed.name}:`, err.message)
    return []
  }
}

async function buildSection(feeds) {
  const results = await Promise.all(feeds.map(fetchFeed))
  return results.flat().slice(0, ITEMS_PER_SECTION)
}

async function main() {
  const [marketing, design] = await Promise.all([
    buildSection(FEEDS.marketing),
    buildSection(FEEDS.design),
  ])

  if (marketing.length === 0 && design.length === 0) {
    console.error('No items fetched from any feed, leaving existing trendsData.json in place')
    process.exit(1)
  }

  const output = {
    updatedAt: new Date().toISOString().slice(0, 10),
    marketing,
    design,
  }

  await writeFile(OUT_PATH, JSON.stringify(output, null, 2) + '\n')
  console.log(`Wrote ${OUT_PATH}`)
}

main()
