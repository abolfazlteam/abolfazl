"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { LikeButton } from "@/components/ui/like-button";

interface BlogStatsState {
  views: number;
  likes: number;
}

interface BlogStatsBaseProps {
  slug: string;
  initialViews: number;
  initialLikes: number;
  read: string;
}

interface BlogDetailStatsProps extends BlogStatsBaseProps {
  trackView?: boolean;
}

function statsUrl(slug: string, action?: "like" | "view") {
  const base = `/api/blog-stats/${encodeURIComponent(slug)}`;
  return action ? `${base}/${action}` : base;
}

function useBlogStats({
  slug,
  initialViews,
  initialLikes,
  trackView = false,
}: Omit<BlogDetailStatsProps, "read">) {
  const [stats, setStats] = useState<BlogStatsState>({
    views: initialViews,
    likes: initialLikes,
  });

  useEffect(() => {
    let active = true;

    fetch(statsUrl(slug), { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: BlogStatsState | null) => {
        if (!active || !data) return;
        setStats({
          views: data.views ?? initialViews,
          likes: data.likes ?? initialLikes,
        });
      })
      .catch(() => {
        // Keep static fallback counts if Mongo stats are unavailable.
      });

    return () => {
      active = false;
    };
  }, [initialLikes, initialViews, slug]);

  useEffect(() => {
    if (!trackView) return;

    const key = `blog-viewed:${slug}`;
    if (window.sessionStorage.getItem(key) === "true") return;

    window.sessionStorage.setItem(key, "true");
    fetch(statsUrl(slug, "view"), { method: "POST" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: BlogStatsState | null) => {
        if (!data) return;
        setStats({
          views: data.views ?? initialViews,
          likes: data.likes ?? initialLikes,
        });
      })
      .catch(() => {
        window.sessionStorage.removeItem(key);
      });
  }, [initialLikes, initialViews, slug, trackView]);

  return { stats, setStats };
}

export function BlogDetailStats({
  slug,
  initialViews,
  initialLikes,
  read,
  trackView = false,
}: BlogDetailStatsProps) {
  const { stats, setStats } = useBlogStats({
    slug,
    initialViews,
    initialLikes,
    trackView,
  });

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
      <div className="flex gap-[18px] font-mono text-xs text-faint">
        <span>{stats.views.toLocaleString("en-US")} views</span>
        <span>{read}</span>
      </div>
      <div className="flex gap-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-[7px] rounded-full border-[1.5px] border-line px-3.5 py-1.5 font-mono text-xs text-text"
        >
          <Icon name="share" size={14} /> Share
        </button>
        <LikeButton
          key={`${slug}:${stats.likes}`}
          initial={stats.likes}
          contentId={slug}
          onCountChange={(likes) => setStats((current) => ({ ...current, likes }))}
        />
      </div>
    </div>
  );
}

export function BlogStatsInline({ slug, initialViews, initialLikes, read }: BlogStatsBaseProps) {
  const { stats } = useBlogStats({
    slug,
    initialViews,
    initialLikes,
  });

  return (
    <div className="mt-3 flex gap-3.5 font-mono text-[11px] text-faint">
      <span>{stats.views.toLocaleString("en-US")} views</span>
      <span>♥ {stats.likes}</span>
      <span>{read}</span>
    </div>
  );
}
