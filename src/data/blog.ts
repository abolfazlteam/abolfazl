import type { BlogPost } from "@/types";

export const BLOGS: BlogPost[] = [
  {
    id: "react-18-loading-ux",
    title:
      "Revolutionize loading UX with React 18: Suspense, streaming & selective hydration",
    date: "Jul 04, 2025",
    read: "11 min",
    tag: "React",
    views: 1240,
    likes: 68,
    hero: "blog-react18-hero",
    excerpt:
      "Spinners are a confession that you have nothing better to show. React 18's streaming and selective hydration give you a way out — here's how I actually use them.",
    sections: [
      {
        id: "the-problem",
        h: "The loading problem with traditional React",
        body: [
          "Not long ago, most React apps relied entirely on client-side rendering. You'd ship an empty div, show a spinner, wait for JavaScript to download, wait for data to fetch, and only then paint something useful. The user stares at a spinner the whole time.",
          "Server-side rendering helped, but the old renderToString was all-or-nothing: the server had to wait for every data dependency before it could send a single byte. One slow query held the entire page hostage.",
        ],
      },
      {
        id: "streaming",
        h: "Streaming HTML with renderToPipeableStream",
        body: [
          "React 18 replaced the blocking renderer with a streaming one. The server sends the shell immediately and flushes the slow parts in as they resolve, wrapped in Suspense boundaries.",
        ],
        code: {
          lang: "tsx",
          text: "import { renderToPipeableStream } from 'react-dom/server';\n\nfunction handler(req, res) {\n  const { pipe } = renderToPipeableStream(<App />, {\n    bootstrapScripts: ['/main.js'],\n    onShellReady() {\n      // Shell is ready — start streaming now.\n      res.setHeader('content-type', 'text/html');\n      pipe(res);\n    },\n  });\n}",
        },
      },
      {
        id: "suspense",
        h: "Suspense boundaries as loading contracts",
        body: [
          "A Suspense boundary is a promise to the user: 'this region will arrive, here's what to show meanwhile.' Wrap the slow thing, give it a fallback that matches the final layout, and the rest of the page ships instantly.",
        ],
        code: {
          lang: "tsx",
          text: "<Suspense fallback={<FeedSkeleton />}>\n  {/* This streams in separately from the shell */}\n  <Feed userId={userId} />\n</Suspense>",
        },
      },
      {
        id: "selective-hydration",
        h: "Selective hydration: prioritising what users touch",
        body: [
          "Hydration used to be all-or-nothing too. React 18 hydrates Suspense boundaries independently — and if a user clicks a not-yet-hydrated region, React hydrates that part first. Interaction beats document order.",
          "The practical upshot: you stop thinking about 'the page is interactive' as a single moment and start thinking per-region. Skeletons that match the final layout matter more than ever.",
        ],
      },
      {
        id: "takeaways",
        h: "What I'd actually reach for",
        body: [
          "Stream the shell, Suspense-wrap anything data-bound, and make your fallbacks layout-accurate so nothing jumps. Don't over-fragment — a boundary per meaningful region is plenty. And measure: streaming wins are real but easy to undo with a render-blocking script.",
        ],
      },
    ],
  },
  {
    id: "ci-without-cargo",
    title: "Cutting our CI by 41% without changing a single test",
    date: "Apr 28, 2026",
    read: "6 min",
    tag: "DevOps",
    views: 870,
    likes: 51,
    hero: "blog-ci-hero",
    excerpt:
      "A walk through dependency caching, parallel matrix jobs, and the very specific Docker layer we'd been rebuilding 800 times a day.",
    sections: [
      {
        id: "where-time-goes",
        h: "First, find where the time actually goes",
        body: [
          "Before optimising anything, I added timing to each pipeline stage. The villain wasn't the tests — it was install and a Docker layer that rebuilt on every run because we busted its cache with a timestamp.",
        ],
      },
      {
        id: "caching",
        h: "Cache dependencies properly",
        body: [
          "GitLab caches by key. The trick is keying on the lockfile hash so the cache only invalidates when dependencies actually change.",
        ],
        code: {
          lang: "yaml",
          text: "install:\n  stage: prepare\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n  script:\n    - pnpm install --frozen-lockfile",
        },
      },
      {
        id: "parallel",
        h: "Parallelise with a matrix",
        body: [
          "Tests that don't share state should run side by side. A parallel matrix split our suite across four runners and turned an 8-minute stage into just over 2.",
        ],
        code: {
          lang: "yaml",
          text: "test:\n  parallel: 4\n  script:\n    - pnpm test --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL",
        },
      },
      {
        id: "result",
        h: "The result",
        body: [
          "No test changed. The pipeline went from 12m40s to 7m28s — about 41% — almost entirely from cache keys and a fixed Docker layer. The cheapest performance work is usually the work you stop repeating.",
        ],
      },
    ],
  },
  {
    id: "vim-six-months",
    title: "Six months on Vim, from a person who isn't a wizard",
    date: "Mar 02, 2026",
    read: "5 min",
    tag: "Workflow",
    views: 540,
    likes: 37,
    hero: "blog-vim-hero",
    excerpt:
      "Honest notes on what stuck, what didn't, and why I still keep VS Code open on the other monitor.",
    sections: [
      {
        id: "why",
        h: "Why I tried at all",
        body: [
          "I didn't switch to Vim to be cool. I switched because I kept reaching for the mouse and breaking my own flow. The promise was simple: keep your hands on the keys, think in motions, edit at the speed of thought.",
        ],
      },
      {
        id: "stuck",
        h: "What stuck",
        body: [
          "Motions. Genuinely. ciw, dt., and visual-block editing changed how I think about text. A handful of remaps did most of the heavy lifting.",
        ],
        code: {
          lang: "vim",
          text: '" jk to escape, space as leader\ninoremap jk <Esc>\nlet mapleader = " "\n\n" quick save & find files\nnnoremap <leader>w :w<CR>\nnnoremap <leader>f :Files<CR>',
        },
      },
      {
        id: "didnt",
        h: "What didn't",
        body: [
          "Configuring a full IDE in Lua was a rabbit hole that ate weekends. So I stopped. I keep VS Code open with a Vim mode for big refactors and use real Neovim for quick edits and remote boxes. Tools are tools.",
        ],
      },
    ],
  },
];

/** Lookup a post by its id (used by `/blogs/[slug]`). */
export const getBlogById = (id: string): BlogPost | undefined =>
  BLOGS.find((post) => post.id === id);
