import type { ReactNode } from "react";

import { CopyButton } from "@/components/blog/copy-button";
import type { CodeSnippet } from "@/types";

// Lightweight, language-agnostic highlighter — good enough for tsx/yaml/vim.
const CODE_RE =
  /(\/\/[^\n]*|#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|(\b(?:import|from|export|default|function|const|let|var|return|if|else|for|while|new|await|async|class|extends|implements|interface|type|true|false|null|undefined|void|of|in|try|catch|throw|yield)\b)|(<\/?[A-Za-z][\w.]*)|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$-]*)(?=\s*[:=])/g;

// Capture group (1–7) → CSS variable.
const GROUP_VARS = [
  "--code-comment",
  "--code-string",
  "--code-number",
  "--code-keyword",
  "--code-tag",
  "--code-fn",
  "--code-prop",
] as const;

function highlightLine(line: string, lang: string): ReactNode[] {
  if (lang === "vim" && /^\s*"/.test(line)) {
    return [
      <span key="c" style={{ color: "var(--code-comment)", fontStyle: "italic" }}>
        {line}
      </span>,
    ];
  }

  const re = new RegExp(CODE_RE.source, "g");
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(line)) !== null) {
    if (match[0].length === 0) {
      re.lastIndex++;
      continue;
    }
    if (match.index > last) {
      parts.push(<span key={key++}>{line.slice(last, match.index)}</span>);
    }
    let cssVar = "--code-text";
    let italic = false;
    for (let group = 1; group <= GROUP_VARS.length; group++) {
      if (match[group] != null) {
        cssVar = GROUP_VARS[group - 1];
        italic = group === 1;
        break;
      }
    }
    parts.push(
      <span key={key++} style={{ color: `var(${cssVar})`, fontStyle: italic ? "italic" : "normal" }}>
        {match[0]}
      </span>,
    );
    last = match.index + match[0].length;
  }
  if (last < line.length) parts.push(<span key={key++}>{line.slice(last)}</span>);
  return parts.length ? parts : [<span key="x">{line || " "}</span>];
}

const TRAFFIC = ["#f57363", "#f5bd4f", "#62c554"];

export function CodeBlock({ code }: { code: CodeSnippet }) {
  const lines = code.text.split("\n");
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border" style={{ background: "var(--code-bg)" }}>
      <div className="flex items-center justify-between border-b border-border bg-bg-soft px-3.5 py-[9px]">
        <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[1px] text-dim">
          <span className="inline-flex gap-[5px]">
            {TRAFFIC.map((color) => (
              <span key={color} className="size-[9px] rounded-full" style={{ background: color }} />
            ))}
          </span>
          {code.lang}
        </span>
        <CopyButton text={code.text} />
      </div>
      <pre
        className="m-0 overflow-x-auto px-[18px] py-4 font-mono text-[12.5px] leading-[1.75]"
        style={{ color: "var(--code-text)" }}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} className="min-h-[1.3em] whitespace-pre">
              {highlightLine(line, code.lang)}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
