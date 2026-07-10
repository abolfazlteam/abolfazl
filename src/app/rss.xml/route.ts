import { BLOGS, PERSON } from "@/data";
import { SITE_URL } from "@/lib/seo";

const FEED_DESCRIPTION =
  "React, Next.js, TypeScript, performance, hooks, rendering, and frontend engineering articles by Abolfazl Jamshidi.";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pubDate(date: string): string {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? "" : `<pubDate>${new Date(parsed).toUTCString()}</pubDate>`;
}

export function GET(): Response {
  const items = BLOGS.map((post) =>
    [
      "<item>",
      `<title>${escapeXml(post.title)}</title>`,
      `<link>${SITE_URL}/blogs/${post.id}</link>`,
      `<guid isPermaLink="true">${SITE_URL}/blogs/${post.id}</guid>`,
      `<description>${escapeXml(post.excerpt)}</description>`,
      `<category>${escapeXml(post.tag)}</category>`,
      pubDate(post.date),
      "</item>",
    ].join(""),
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${escapeXml(`${PERSON.name} — Frontend Engineering Blog`)}</title>
<link>${SITE_URL}/blogs</link>
<description>${escapeXml(FEED_DESCRIPTION)}</description>
<language>en</language>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
