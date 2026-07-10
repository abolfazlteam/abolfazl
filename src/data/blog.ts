import type { BlogPost } from "@/types";

export const BLOGS: BlogPost[] = [
  {
    id: "revolutionize-loading-ux-with-react18-suspense-streaming-and-selective-hydration",
    title:
      "Revolutionize Loading UX with React 18: Suspense, Streaming & Selective Hydration",
    date: "Jul 04, 2025",
    read: "12 min",
    tag: "React",
    views: 1240,
    likes: 68,
    hero: "/blogs/revolutionized-suspense/hero-img.jpg",
    excerpt:
      "A deep dive into how Suspense, streaming, and selective hydration change the way we build loading experiences in React.",
    sections: [
      {
        id: "traditional-react-loading",
        h: "The loading problem with traditional React",
        body: [
          "Not long ago, most React apps relied entirely on client-side rendering. You would show a spinner, wait for data, and finally render the UI. Later, SSR became mainstream through frameworks like Next.js, mostly for performance and SEO, but it still had a waterfall problem.",
          "The old model forced three steps to happen in order: fetch everything before showing anything, load all JavaScript before hydrating anything, and hydrate everything before the user could interact with anything. That is a lot of waiting just to click a button in a sidebar.",
          "React Suspense and streaming do not merely make that waterfall faster. They let us split the work by component so the page can show what is ready, stream what is slow, and hydrate what the user actually needs.",
        ],
        images: [
          {
            src: "/blogs/revolutionized-suspense/traditional-ssr.png",
            alt: "Traditional server-side rendering waterfall",
            caption: "Traditional SSR waterfall",
          },
        ],
      },
      {
        id: "how-suspense-transforms-loading",
        h: "How React Suspense transforms loading",
        body: [
          "React 18 unlocks two big changes through Suspense: streaming HTML on the server and selective hydration on the client. Instead of treating the whole page as one blocking unit, meaningful regions can become independent loading boundaries.",
          "Imagine a page with a header, sidebar, projects section, and blogs section. With the traditional approach, all HTML and JavaScript had to be ready before the user experienced the whole thing as interactive. With Suspense, slower sections can show a fallback while the rest of the shell streams immediately.",
        ],
        code: {
          lang: "tsx",
          text: "<main>\n  <Header />\n  <section>\n    <Sidebar />\n    <Projects />\n    <Suspense fallback={<div>Loading blogs...</div>}>\n      <Blogs />\n    </Suspense>\n  </section>\n</main>",
        },
        images: [
          {
            src: "/blogs/revolutionized-suspense/first-result.png",
            alt: "Initial traditional server-rendered result before hydration",
            caption: "Initial SSR result",
          },
          {
            src: "/blogs/revolutionized-suspense/second-result.png",
            alt: "Hydrated traditional server-rendered result",
            caption: "Hydrated SSR result",
          },
        ],
      },
      {
        id: "streaming-ssr",
        h: "Streaming SSR: breaking the bottleneck",
        body: [
          "Under the hood, React can use renderToPipeableStream to begin rendering HTML as a stream instead of waiting for the entire tree. The server can flush the shell early and postpone slower Suspense boundaries for later.",
          "When a Suspense boundary is not ready, React sends the fallback in its place. Later, when the real content is ready, React streams the replacement HTML and a small script that swaps the placeholder with the finished content.",
        ],
        code: {
          lang: "tsx",
          text: "import { renderToPipeableStream } from \"react-dom/server\";\n\nconst { pipe } = renderToPipeableStream(<App />, {\n  onShellReady() {\n    pipe(response);\n  },\n});",
        },
        images: [
          {
            src: "/blogs/revolutionized-suspense/third-result.png",
            alt: "Streaming SSR result with a Suspense fallback",
            caption: "Streaming with a fallback boundary",
          },
        ],
      },
      {
        id: "streamed-placeholders",
        h: "How streamed placeholders get replaced",
        body: [
          "During streaming, React inserts a fallback UI into the HTML where content is not ready yet. The fallback is paired with an internal placeholder ID. When the real content becomes available, React sends a segment and replaces that placeholder without a full page rerender.",
          "You do not call these internal functions yourself, but understanding the shape helps connect the dots: the fallback you see is later matched with the streamed content that belongs in the same position.",
        ],
        code: {
          lang: "html",
          text: "<div hidden id=\"S:0\">\n  <div>Comments loaded!</div>\n</div>\n<script>\n  $RC(\"B:0\", \"S:0\");\n</script>",
        },
      },
      {
        id: "selective-hydration",
        h: "Selective hydration: fast interaction where it counts",
        body: [
          "Even if the server streams HTML quickly, the page still needs JavaScript before components can become interactive. Code splitting helps by moving lower-priority widgets into smaller bundles that can load later.",
          "React 18 can begin hydrating the parts that are already ready instead of waiting for every component. The navigation or footer can become interactive while a slower blog section is still loading its code.",
        ],
        code: {
          lang: "tsx",
          text: "import { lazy, Suspense } from \"react\";\n\nconst Blogs = lazy(() => import(\"./blogs\"));\n\n<Suspense fallback={<div>Loading blogs...</div>}>\n  <Blogs />\n</Suspense>;",
        },
        images: [
          {
            src: "/blogs/revolutionized-suspense/fourth-result.png",
            alt: "First loading state for a lazy Suspense section",
            caption: "First loading the section",
          },
          {
            src: "/blogs/revolutionized-suspense/fifth-result.png",
            alt: "Lazy blog section loaded after Suspense",
            caption: "Then the blog section loads",
          },
          {
            src: "/blogs/revolutionized-suspense/sixth-result.png",
            alt: "Other page sections are hydrated before the blog section",
            caption: "Other sections hydrate first",
          },
        ],
      },
      {
        id: "interaction-priority",
        h: "Smarter hydration for smoother interaction",
        body: [
          "Suspense boundaries also change how hydration work is prioritized. Hydration inside a boundary can happen in smaller chunks, giving the browser chances to handle user input instead of locking the page while React works.",
          "If the user interacts with a not-yet-hydrated section, React can prioritize that section so the interaction works sooner. This is what makes selective hydration feel almost instant from the user's point of view.",
        ],
        images: [
          {
            src: "/blogs/revolutionized-suspense/seventh-result.png",
            alt: "Selective hydration completing interactive sections progressively",
            caption: "Selective hydration finishing progressively",
          },
        ],
      },
      {
        id: "react18-conclusion",
        h: "Conclusion",
        body: [
          "React 18 fundamentally changes how we think about loading, rendering, and hydration. Instead of waiting for the entire app to load and hydrate, we can stream what is ready and hydrate what matters exactly when the user needs it.",
          "If you have struggled with loading performance or interaction delays in React apps, Suspense boundaries, streaming, and selective hydration are worth understanding deeply.",
        ],
      },
    ],
  },
  {
    id: "useEffect-deep-dive-into-it",
    title: "useEffect - Deep Dive Into It",
    date: "Nov 10, 2024",
    read: "9 min",
    tag: "React",
    views: 920,
    likes: 44,
    hero: "/blogs/useEffect.webp",
    excerpt:
      "Understand useEffect completely and handle side effects without fighting React's rendering model.",
    sections: [
      {
        id: "what-is-side-effect",
        h: "What is a side effect?",
        body: [
          "A side effect is an operation with an observable impact outside the primary render result. In React, effects are useful when something cannot happen during rendering or when a side effect should happen because a piece of UI is now visible.",
          "Posting a comment, deleting a row from a table, connecting to a chatroom server, playing media, or fetching related data can all be side effects. The important part is that rendering itself should stay pure.",
        ],
      },
      {
        id: "synchronizing-with-effects",
        h: "Synchronizing with effects",
        body: [
          "Effects run after the commit phase, after React updates the screen. Every time state or props change, React renders, commits the result to the UI, and only then runs the code inside useEffect.",
          "This delay is exactly what we need when a side effect depends on DOM nodes. For example, a video element does not exist during the first render, so trying to call play or pause during render will crash.",
        ],
        code: {
          lang: "tsx",
          text: "import { useEffect, useRef } from \"react\";\n\nfunction VideoPlayer({ src, isPlaying }) {\n  const ref = useRef<HTMLVideoElement | null>(null);\n\n  useEffect(() => {\n    if (!ref.current) return;\n\n    if (isPlaying) {\n      ref.current.play();\n    } else {\n      ref.current.pause();\n    }\n  });\n\n  return <video ref={ref} src={src} loop playsInline />;\n}",
        },
      },
      {
        id: "control-effects",
        h: "How to control effects",
        body: [
          "By default, an effect runs after every render. If that effect updates state every time, you can create an infinite loop: render, run effect, update state, render again, and repeat.",
          "The dependency array is how you tell React when the effect should re-synchronize. No array means every render. An empty array means mount only. A list of values means run when one of those values changes.",
        ],
        code: {
          lang: "tsx",
          text: "useEffect(() => {\n  // Runs after every render.\n});\n\nuseEffect(() => {\n  // Runs once when the component appears.\n}, []);\n\nuseEffect(() => {\n  // Runs when count or shouldShow changes.\n}, [count, shouldShow]);",
        },
      },
      {
        id: "cleanup",
        h: "Clean it up",
        body: [
          "Every time we create an effect, we should ask what needs to stop when the input changes or the component disappears. Fetches may need cancellation, subscriptions may need disconnection, and timers may need clearing.",
          "Think of cleanup as stopping synchronization with the old value before React starts synchronizing with the new one.",
        ],
        code: {
          lang: "tsx",
          text: "export default function FaqsList({ category }) {\n  useEffect(() => {\n    const controller = new AbortController();\n\n    fetchFaqData(category, { signal: controller.signal });\n\n    return () => {\n      controller.abort();\n    };\n  }, [category]);\n\n  return <>{/* render faqs */}</>;\n}",
        },
      },
      {
        id: "effect-lifecycle",
        h: "The lifecycle of an effect",
        body: [
          "A component mounts, updates, and unmounts. An effect has a different lifecycle: it starts synchronizing with something, stops synchronizing, and then may start again with new values.",
          "If a user switches an FAQ category from general to sport, React first runs the cleanup for general, then runs the effect for sport. That keeps stale work from competing with the latest user intent.",
        ],
      },
      {
        id: "how-react-compares-dependencies",
        h: "How React synchronizes the effect",
        body: [
          "React knows when to re-synchronize because you provide the dependencies. If any dependency is different from the value in the previous render, React runs the cleanup and then runs the effect again.",
          "React compares dependencies with Object.is. That means objects and functions created during render can cause effects to run more often than expected because their references are recreated each render.",
        ],
      },
      {
        id: "effect-summary",
        h: "Summary",
        body: [
          "Effects should usually synchronize your component with an external system. If there is no external system, the effect might be unnecessary.",
          "Effects only run on the client. You cannot choose dependencies casually: every reactive value used in the effect belongs in the dependency list.",
          "Avoid relying on freshly created objects or functions as dependencies unless you understand the reference changes they create.",
        ],
      },
    ],
  },
  {
    id: "useRef-vs-useState-when-to-use-each",
    title: "useRef vs. useState - When to Use Each?",
    date: "Aug 21, 2024",
    read: "8 min",
    tag: "React",
    views: 980,
    likes: 52,
    hero: "/blogs/useRef-vs-useState-When-to-Use-Each.jpg",
    excerpt:
      "A practical look at when state should drive rendering and when refs should quietly remember values without re-rendering.",
    sections: [
      {
        id: "intro",
        h: "Why compare useState and useRef?",
        body: [
          "As React developers, we save data, update it, and change UI every day. That makes it important to understand the tools we reach for most often.",
          "useState and useRef can both help React remember data between renders, but they behave very differently. The key question is whether changing that data should update the UI.",
        ],
      },
      {
        id: "anatomy-of-usestate",
        h: "Anatomy of useState",
        body: [
          "When we use useState, we tell React that a value is special and should be remembered between renders. React returns the current value and a setter function that schedules the component to render again.",
          "The convention is to name the pair as value and setValue. The initial value is passed once when the state is created.",
        ],
        code: {
          lang: "tsx",
          text: "const [isModalOpen, setIsModalOpen] = useState<boolean>(false);\n\nconst openModalHandler = () => {\n  setIsModalOpen(true);\n};\n\nconst closeModalHandler = () => {\n  setIsModalOpen(false);\n};",
        },
        images: [
          {
            src: "/blogs/useRef-vs-useState-When-to-Use-Each/useState-code.gif",
            alt: "React modal example showing useState updates",
            caption: "Sample React app using useState",
          },
        ],
      },
      {
        id: "state-and-ui-position",
        h: "State and the component's position in the UI",
        body: [
          "State belongs to a component at a specific position in the UI tree. If a component is removed and added again, its state is reset. If its position changes, React may also treat it as a new component.",
          "That is why closing a modal and opening it again can clear the input inside it. React removed that part of the tree, so the state stored there was destroyed with it.",
        ],
      },
      {
        id: "state-isolation",
        h: "Isolation",
        body: [
          "State is local to each component instance. If you render two copies of the same Modal component, each one has its own state. Updating one does not update the other.",
          "That isolation is one reason state is the right tool for values your JSX depends on. Normal variables do not survive renders and can create confusing mutations.",
        ],
      },
      {
        id: "dont-overuse-state",
        h: "Do not overuse state",
        body: [
          "You can have multiple states in a component, but not every value deserves to be state. If a value changes often but does not affect rendering, putting it in state creates unnecessary rerenders.",
          "Before using state, ask whether the UI depends on this value, whether the value must survive renders, and whether changing it should trigger a rerender.",
        ],
        images: [
          {
            src: "/blogs/useRef-vs-useState-When-to-Use-Each/useRef-vs-useState-table.jpg",
            alt: "Decision table for choosing useState or useRef",
            caption: "State or ref decision table",
          },
        ],
      },
      {
        id: "the-useref-hook",
        h: "The useRef hook",
        body: [
          "useRef also lets React remember data, but changing a ref does not trigger a rerender. It returns an object with a current property that you can read and write.",
          "Unlike state, refs are intentionally mutable. That makes them useful for values that need to survive renders without directly affecting the UI.",
        ],
        code: {
          lang: "tsx",
          text: "const ref = useRef(0);\n\nref.current = ref.current + 1;\n\n// Shape of the ref object:\n// { current: 1 }",
        },
        images: [
          {
            src: "/blogs/useRef-vs-useState-When-to-Use-Each/useRef-code.gif",
            alt: "Counter example showing useRef changes without rerendering",
            caption: "Sample counter using useRef",
          },
        ],
      },
      {
        id: "when-to-use-refs",
        h: "When to use refs",
        body: [
          "Refs are best for data that does not affect the component's rendered output: timeout IDs, DOM elements, previous values, external objects, and other mutable values your JSX does not rely on.",
          "If you update a ref counter and nothing changes on screen, that is expected. React remembered the value, but you did not ask React to render from that value.",
        ],
      },
      {
        id: "state-vs-ref-summary",
        h: "Summary",
        body: [
          "Use useState when the UI depends on the value and React should rerender after it changes.",
          "Use useRef when you need to remember a value across renders but changing it should not update the UI.",
          "State is isolated to component instances and tied to their position in the UI tree. Refs are mutable containers that are useful for non-visual data.",
        ],
      },
    ],
  },
];

/** Lookup a post by its id (used by `/blogs/[slug]`). */
export const getBlogById = (id: string): BlogPost | undefined =>
  BLOGS.find((post) => post.id === id);
