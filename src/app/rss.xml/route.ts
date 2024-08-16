import { ALL_BLOGS } from "@/constants/content";
import RSS from "rss";

export async function GET() {
  // creating an RSS instance
  const feed = new RSS({
    title: "Abolfazl Jamshidi - Frontend Engineer | Blogs RSS Feed",
    description: `Hey there! This is where I share my journey through software engineering, personal anecdotes, and articles covering a wide range of topics.`,
    site_url: "https://iabolfazl.dev",
    feed_url: "https://iabolfazl.dev/rss.xml",
    image_url: `https://iabolfazl.dev/images/white-logo.jpg`,
    managingEditor: "abolfazljamshididev@gmail.com (Abolfazl Jamshidi)",
    webMaster: "abolfazljamshididev@gmail.com (Abolfazl Jamshidi)",
    generator: "RSS for Node and Next.js",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Abolfazl Jamshidi`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });
  if (ALL_BLOGS) {
    ALL_BLOGS.filter((blog) => !blog.isDraft).map((blog) => {
      feed.item({
        title: blog.title,
        description: blog.summary,
        url: `${blog.baseUrl}/blogs/${blog.slug}`,
        categories: blog.tags || [],
        author: blog.author,
        date: blog.publishedAt,
      });
    });
  }
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
