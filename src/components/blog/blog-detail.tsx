import Link from "next/link";
import Image from "next/image";

import { BlogToc } from "@/components/blog/blog-toc";
import { BlogDetailStats } from "@/components/blog/blog-stats";
import { CodeBlock } from "@/components/blog/code-block";
import { Newsletter } from "@/components/blog/newsletter";
import { Comments } from "@/components/comments/comments";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHead } from "@/components/ui/section-head";
import { BLOGS, PERSON } from "@/data";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import type { BlogImage, BlogPost } from "@/types";

function BlogImageFrame({ image }: { image: BlogImage }) {
  const fit = image.fit ?? (image.caption ? "contain" : "cover");

  return (
    <figure className="my-7">
      <div
        className="relative overflow-hidden rounded-[14px] border border-border bg-bg-soft"
        style={{ aspectRatio: image.aspect ?? "16 / 9" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 980px) 760px, calc(100vw - 40px)"
          unoptimized={image.src.endsWith(".gif")}
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2.5 text-center font-mono text-[11px] uppercase tracking-[1px] text-faint">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BlogDetail({ blog }: { blog: BlogPost }) {
  const others = BLOGS.filter((post) => post.id !== blog.id).slice(0, 2);
  const url = absoluteUrl(`/blogs/${blog.id}`);
  const articleBody = blog.sections
    .flatMap((section) => [section.h, ...section.body])
    .join("\n\n");

  return (
    <Container className="pt-[clamp(28px,4vw,48px)]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.title,
          description: blog.excerpt,
          image: absoluteUrl(blog.hero),
          datePublished: new Date(blog.date).toISOString(),
          dateModified: new Date(blog.date).toISOString(),
          author: {
            "@type": "Person",
            name: PERSON.name,
            url: SITE_URL,
            sameAs: [PERSON.github, PERSON.linkedin, PERSON.medium],
          },
          publisher: {
            "@type": "Person",
            name: PERSON.name,
            url: SITE_URL,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          articleSection: blog.tag,
          keywords: [blog.tag, "React", "Next.js", "frontend engineering", "frontend DevOps"],
          articleBody,
        }}
      />
      <Link
        href="/blogs"
        className="mb-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[1px] text-dim no-underline transition-opacity hover:opacity-60"
      >
        <Icon name="back" size={15} /> All writing
      </Link>

      <div className="grid grid-cols-1 items-start gap-[clamp(28px,4vw,56px)] min-[980px]:grid-cols-[200px_minmax(0,1fr)]">
        <BlogToc sections={blog.sections} />

        <article>
          <div className="font-mono text-xs text-dim">{blog.date}</div>
          <div className="mt-2 inline-flex">
            <span className="rounded-[3px] border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[1px] text-accent">
              {blog.tag}
            </span>
          </div>
          <h1 className="mt-4 max-w-[760px] font-display text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.04] tracking-[-0.03em] text-text">
            {blog.title}
          </h1>

          <BlogDetailStats
            slug={blog.id}
            initialViews={blog.views}
            initialLikes={blog.likes}
            read={blog.read}
            trackView
          />

          <BlogImageFrame image={{ src: blog.hero, alt: blog.title, aspect: "16 / 9" }} />

          {blog.sections.map((section) => (
            <section
              key={section.id}
              id={`sec-${section.id}`}
              data-sec={section.id}
              className="mt-[38px] scroll-mt-[90px]"
            >
              <h2 className="m-0 font-display text-[clamp(22px,2.8vw,30px)] font-bold tracking-[-0.6px] text-text">
                {section.h}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 max-w-[720px] font-sans text-[17px] leading-[1.72] text-text opacity-90"
                >
                  {paragraph}
                </p>
              ))}
              {section.code ? <CodeBlock code={section.code} /> : null}
              {section.images?.map((image) => (
                <BlogImageFrame key={image.src} image={image} />
              ))}
            </section>
          ))}

          <div className="mt-[clamp(48px,6vw,80px)]">
            <Newsletter />
          </div>

          <Comments contentId={blog.id} />

          <div className="mt-[clamp(48px,6vw,80px)]">
            <SectionHead n="→" title="Keep reading" />
            <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
              {others.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="rounded-xl border border-border bg-surface p-5 no-underline transition-[box-shadow,border-color] duration-200 hover:shadow-[0_22px_54px_rgba(0,0,0,0.22)]"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[1px] text-accent">
                    {post.tag} · {post.read}
                  </div>
                  <div className="mt-2.5 font-display text-[19px] font-semibold leading-tight tracking-[-0.5px] text-text">
                    {post.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
