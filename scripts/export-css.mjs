import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

export function cssVar(role) {
  return `--uds-${role.replaceAll(".", "-")}`;
}

function quoteFont(name) {
  const generics = new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-sans-serif",
    "ui-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
  ]);
  if (generics.has(name) || name.startsWith("ui-")) return name;
  if (/[\s,]/.test(name) && !name.startsWith('"')) return `"${name}"`;
  return name;
}

function genericFallback(slot) {
  if (slot === "mono") return "monospace";
  return "sans-serif";
}

export async function exportCss() {
  const core = JSON.parse(await readFile(path.join(root, "tokens/core.json"), "utf8"));
  const dist = path.join(root, "dist");
  const themesOut = path.join(dist, "themes");
  await mkdir(themesOut, { recursive: true });

  const requiredRoles = Object.keys(core.semantic);
  const coreLines = [
    "/**",
    " * Universal Design System — core semantic custom-property template.",
    " * Generated from tokens/core.json. Do not edit by hand.",
    " * Load one theme stylesheet after this file. Core does not ship a project palette.",
    " */",
    ":root {",
  ];

  for (const [name, token] of Object.entries(core.spacing)) {
    coreLines.push(`  --uds-space-${name}: ${token.value};`);
  }
  coreLines.push(`  --uds-layout-reading-measure: ${core.layout.readingMeasure.value};`);
  coreLines.push(`  --uds-layout-touch-target-min: ${core.layout.touchTargetMin.value};`);
  coreLines.push(`  --uds-layout-grid-gap: ${core.layout.gridGap.value};`);
  for (const [name, token] of Object.entries(core.border)) {
    coreLines.push(`  --uds-border-${name.replaceAll(".", "-")}: ${token.value};`);
  }
  for (const [name, token] of Object.entries(core.radius)) {
    coreLines.push(`  --uds-radius-${name}: ${token.value};`);
  }
  for (const name of Object.keys(core.typography)) {
    coreLines.push(`  --uds-font-${name}: var(--uds-theme-font-${name});`);
  }
  for (const [name, token] of Object.entries(core.motion)) {
    coreLines.push(`  --uds-motion-${name.replaceAll(".", "-")}: ${token.value};`);
  }
  coreLines.push("");
  coreLines.push("  /* Semantic color roles — values are assigned by a selected theme. */");
  for (const role of requiredRoles) {
    coreLines.push(`  ${cssVar(role)}: initial;`);
  }
  coreLines.push("}");
  coreLines.push("");
  coreLines.push("@media (prefers-reduced-motion: reduce) {");
  coreLines.push("  :root {");
  for (const name of Object.keys(core.motion)) {
    if (name.startsWith("duration")) {
      coreLines.push(`    --uds-motion-${name.replaceAll(".", "-")}: 0ms;`);
    }
  }
  coreLines.push("  }");
  coreLines.push("}");
  coreLines.push("");

  await writeFile(path.join(dist, "uds.core.css"), coreLines.join("\n"));

  const themeFiles = (await readdir(path.join(root, "themes")))
    .filter((file) => file.endsWith(".json"))
    .sort();

  for (const file of themeFiles) {
    const id = file.replace(/\.json$/, "");
    const theme = JSON.parse(await readFile(path.join(root, "themes", file), "utf8"));
    const lines = [
      "/**",
      ` * Universal Design System — ${theme.meta.name} theme (${id}).`,
      ` * Generated from themes/${file}. Maps only approved semantic roles.`,
      ` * Apply by setting data-uds-theme="${id}" on a parent (typically html).`,
      " */",
      `[data-uds-theme="${id}"] {`,
    ];
    for (const slot of Object.keys(core.typography)) {
      const family = theme.typography?.[slot];
      if (!family) throw new Error(`${file} is missing typography.${slot}`);
      lines.push(`  --uds-theme-font-${slot}: ${quoteFont(family)}, ${genericFallback(slot)};`);
    }
    for (const role of requiredRoles) {
      lines.push(`  ${cssVar(role)}: ${theme.semantic[role]};`);
    }
    lines.push("}");
    lines.push("");
    await writeFile(path.join(themesOut, `${id}.css`), lines.join("\n"));
  }

  return { roles: requiredRoles.length, themes: themeFiles.length };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const result = await exportCss();
  console.log(`Exported core CSS and ${result.themes} theme stylesheets.`);
}
