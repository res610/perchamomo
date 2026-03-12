#!/usr/bin/env node
/**
 * Ameba Blog RSS fetcher for static site generation.
 * Fetches recent blog posts from RSS feed and saves as JSON.
 *
 * Usage: node scripts/fetch-blog.mjs
 * No env vars required (public RSS feed).
 */

import fs from 'node:fs';
import path from 'node:path';

// --- Configuration ---
const RSS_URL = 'https://rssblog.ameba.jp/perchamomo/rss.html';
const JSON_PATH = 'src/data/blog.json';
const MAX_POSTS = 10;

// --- Main ---
async function main() {
    console.log(`Fetching blog posts from ${RSS_URL}...`);

    const response = await fetch(RSS_URL);
    if (!response.ok) {
        console.error(`RSS fetch error ${response.status}: ${response.statusText}`);
        process.exit(1);
    }

    const xml = await response.text();
    const posts = parseRdf(xml);

    if (posts.length === 0) {
        console.warn('No posts found in RSS feed. Keeping existing data.');
        process.exit(0);
    }

    const output = posts.slice(0, MAX_POSTS);

    fs.mkdirSync(path.dirname(JSON_PATH), { recursive: true });
    fs.writeFileSync(JSON_PATH, JSON.stringify(output, null, 4) + '\n', 'utf-8');
    console.log(`Wrote ${output.length} posts to ${JSON_PATH}`);
    console.log('Done.');
}

// --- Helpers ---

/**
 * Parse RDF 1.0 RSS XML (Ameba Blog format) without external dependencies.
 * Extracts title, link, description, pubDate from each <item>.
 */
function parseRdf(xml) {
    const posts = [];
    const itemRegex = /<item[\s\S]*?<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
        const item = match[0];
        const title = extractTag(item, 'title');
        const link = extractTag(item, 'link');
        const description = cleanDescription(extractTag(item, 'description'));
        const dcDate = extractTag(item, 'dc:date');

        if (title && link) {
            posts.push({
                title: decodeHtmlEntities(title),
                link,
                pubDate: dcDate || '',
                description: decodeHtmlEntities(description),
            });
        }
    }

    return posts;
}

function extractTag(xml, tagName) {
    const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].trim() : '';
}

function cleanDescription(desc) {
    // Truncate long descriptions
    const maxLen = 200;
    if (desc.length <= maxLen) return desc;
    return desc.substring(0, maxLen).trimEnd() + '...';
}

function decodeHtmlEntities(str) {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

main().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
});
