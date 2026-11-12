import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LEGAL_ROUTES } from "./site-chrome.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function inline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /\*to be confirmed(?:[^*]*)?\*/g,
      '<span class="tbc">to be confirmed</span>',
    )
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function isTableStart(lines, i) {
  return lines[i]?.includes("|") && lines[i + 1]?.includes("---");
}

function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;

  const flushParagraph = (buf) => {
    const t = buf.join(" ").trim();
    if (t) out.push(`<p>${inline(t)}</p>`);
  };

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      out.push(`<h1>${inline(line.slice(2).trim())}</h1>`);
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${inline(line.slice(3).trim())}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2).trim());
        i += 1;
      }
      out.push(`<blockquote><p>${inline(buf.join(" "))}</p></blockquote>`);
      continue;
    }
    if (isTableStart(lines, i)) {
      const rows = [];
      while (i < lines.length && lines[i].includes("|")) {
        const cells = lines[i]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i += 1;
      }
      if (rows.length) {
        const [head, ...body] = rows;
        out.push("<table>");
        out.push("<thead><tr>");
        head.forEach((c) => out.push(`<th>${inline(c)}</th>`));
        out.push("</tr></thead><tbody>");
        body.forEach((row) => {
          out.push("<tr>");
          row.forEach((c) => out.push(`<td>${inline(c)}</td>`));
          out.push("</tr>");
        });
        out.push("</tbody></table>");
      }
      continue;
    }
    if (/^- /.test(line)) {
      out.push('<ul class="legal-list">');
      while (i < lines.length && /^- /.test(lines[i])) {
        const item = lines[i].slice(2).trim();
        out.push(`<li>${inline(item)}</li>`);
        i += 1;
      }
      out.push("</ul>");
      continue;
    }
    if (/^\d+\.\d+\s+/.test(line)) {
      while (i < lines.length && /^\d+\.\d+\s+/.test(lines[i])) {
        const m = lines[i].match(/^(\d+\.\d+)\s+(.*)$/);
        const id = m[1];
        const body = m[2];
        out.push(
          `<p class="legal-clause"><span class="clause-num">${id}</span><span class="clause-body">${inline(body)}</span></p>`,
        );
        i += 1;
      }
      continue;
    }
    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("> ") &&
      !/^- /.test(lines[i]) &&
      !/^\d+\.\d+\s+/.test(lines[i]) &&
      !isTableStart(lines, i)
    ) {
      buf.push(lines[i].trim());
      i += 1;
    }
    flushParagraph(buf);
  }
  return out.join("\n");
}

function wrapPage({ title, description, canonical, bodyHtml }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${canonical}">
  <link rel="stylesheet" href="/assets/legal.css">
  <title>${title}</title>
</head>
<body>
  <main class="legal-main">
    <div class="wrap legal-doc">
${bodyHtml}
    </div>
  </main>
</body>
</html>
`;
}

for (const page of Object.values(LEGAL_ROUTES)) {
  const md = fs.readFileSync(path.join(root, page.markdown), "utf8");
  const body = markdownToHtml(md);
  const outDir = path.join(root, page.path);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "index.html");
  fs.writeFileSync(
    outFile,
    wrapPage({
      title: page.title,
      description: page.description,
      canonical: page.url,
      bodyHtml: body,
    }),
  );
  console.log(`Wrote ${page.path}/index.html → ${page.url}`);
}
