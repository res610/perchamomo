#!/usr/bin/env node
/**
 * Ameba Blog RSS fetcher for static site generation.
 * Fetches latest blog posts from Ameba Blog RSS feed.
 *
 * Usage: node scripts/fetch-ameba-blog.mjs
 * Set AMEBA_RSS_URL env var or update the default URL below.
 */

import fs from 'node:fs';
import path from 'node:path';

// --- Configuration ---
const JSON_PATH = 'src/data/blog.json';
const MAX_POSTS = 10;
// TODO: 実際のAmeba Blog RSS URLに更新
const DEFAULT_RSS_URL = 'https://rssblog.ameba.jp/TODO/rss.html';

// --- Main ---
async function main() {
    const rssUrl = process.env.AMEBA_RSS_URL || DEFAULT_RSS_URL;

    if (rssUrl.includes('TODO')) {
        console.warn('Ameba RSS URL is not configured. Skipping fetch.');
        process.exit(0);
    }

    console.log(`Fetching blog posts from: ${rssUrl}`);

    const response = await fetch(rssUrl);
    if (!response.ok) {
        console.error(`Failed to fetch RSS: HTTP ${response.status}`);
        process.exit(1);
    }

    const xml = await response.text();
    const posts = parseRss(xml).slice(0, MAX_POSTS);

    if (posts.length === 0) {
        console.warn('No posts found in RSS feed. Keeping existing data.');
        process.exit(0);
    }

    // Ensure output directory exists
    fs.mkdirSync(path.dirname(JSON_PATH), { recursive: true });

    fs.writeFileSync(JSON_PATH, JSON.stringify(posts, null, 4) + '\n', 'utf-8');
    console.log(`Wrote ${posts.length} blog posts to ${JSON_PATH}`);
    console.log('Done.');
}

// --- Simple RSS XML Parser ---
function parseRss(xml) {
    const posts = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
        const itemXml = match[1];
        posts.push({
            title: extractTag(itemXml, 'title'),
            link: extractTag(itemXml, 'link'),
            pubDate: extractTag(itemXml, 'pubDate'),
            description: stripHtml(extractTag(itemXml, 'description')).substring(0, 200),
        });
    }

    return posts;
}

function extractTag(xml, tag) {
    const cdataMatch = xml.match(new RegExp(`<${tag}>[\\s]*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>[\\s]*<\\/${tag}>`));
    if (cdataMatch) return cdataMatch[1].trim();

    const simpleMatch = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
    return simpleMatch ? simpleMatch[1].trim() : '';
}

function stripHtml(html) {
    return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
}

main().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
});
