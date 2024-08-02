import RSS from "rss";
// import { allArticles } from "contentlayer/generated";

export async function GET() {
  //   // creating an RSS instance
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
  // if (allArticles) {
  //   allArticles
  //     .filter((article) => !article.isDraft)
  //     .map((article) => {
  //       feed.item({
  //         title: article.title,
  //         description: article.summary,
  //         url: `${article.baseUrl}/articles/${article.slug}`,
  //         categories: article.tags || [],
  //         author: article.author,
  //         date: article.publishedAt,
  //       });
  //     });
  // }
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
