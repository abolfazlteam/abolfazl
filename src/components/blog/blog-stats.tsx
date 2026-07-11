"use client";

import { useEffect, useState } from "react";

import { AnimatedNumber } from "@/components/ui/animated-number";
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
  const [stats, setStats] = useState<BlogStatsState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadStats() {
      setIsLoading(true);
      let trackedView = false;

      try {
        const viewKey = `blog-viewed:${slug}`;
        const shouldTrackView =
          trackView && window.sessionStorage.getItem(viewKey) !== "true";

        if (shouldTrackView) {
          window.sessionStorage.setItem(viewKey, "true");
          trackedView = true;
        }

        const response = await fetch(statsUrl(slug, shouldTrackView ? "view" : undefined), {
          cache: "no-store",
          method: shouldTrackView ? "POST" : "GET",
        });

        if (!response.ok) throw new Error("Failed to load blog stats.");

        const data = (await response.json()) as BlogStatsState;

        if (!active) return;

        setStats({
          views: data.views ?? initialViews,
          likes: data.likes ?? initialLikes,
        });
      } catch {
        if (trackedView) {
          window.sessionStorage.removeItem(`blog-viewed:${slug}`);
        }

        if (active) {
          setStats({
            views: initialViews,
            likes: initialLikes,
          });
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadStats();

    return () => {
      active = false;
    };
  }, [initialLikes, initialViews, slug, trackView]);

  return { stats, setStats, isLoading };
}

function StatLoading({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Loading ${label}`}>
      <span className="h-3 w-9 animate-pulse rounded-full bg-line" />
      <span>{label}</span>
    </span>
  );
}

export function BlogDetailStats({
  slug,
  initialViews,
  initialLikes,
  read,
  trackView = false,
}: BlogDetailStatsProps) {
  const { stats, setStats, isLoading } = useBlogStats({
    slug,
    initialViews,
    initialLikes,
    trackView,
  });

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
      <div className="flex gap-[18px] font-mono text-xs text-faint">
        {isLoading || !stats ? (
          <StatLoading label="views" />
        ) : (
          <span>
            <AnimatedNumber value={stats.views} /> views
          </span>
        )}
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
          initial={stats?.likes ?? 0}
          loading={isLoading || !stats}
          contentId={slug}
          onCountChange={(likes) =>
            setStats((current) => ({
              views: current?.views ?? initialViews,
              likes,
            }))
          }
        />
      </div>
    </div>
  );
}

export function BlogStatsInline({ slug, initialViews, initialLikes, read }: BlogStatsBaseProps) {
  const { stats, isLoading } = useBlogStats({
    slug,
    initialViews,
    initialLikes,
  });

  return (
    <div className="mt-3 flex gap-3.5 font-mono text-[11px] text-faint">
      {isLoading || !stats ? (
        <>
          <StatLoading label="views" />
          <StatLoading label="likes" />
        </>
      ) : (
        <>
          <span>
            <AnimatedNumber value={stats.views} /> views
          </span>
          <span>
            ♥ <AnimatedNumber value={stats.likes} />
          </span>
        </>
      )}
      <span>{read}</span>
    </div>
  );
}
