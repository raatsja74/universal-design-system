import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cssVar, exportCss } from "./export-css.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const core = JSON.parse(await readFile(path.join(root, "tokens/core.json"), "utf8"));
const themesDir = path.join(root, "themes");
const requiredRoles = Object.keys(core.semantic);
const requiredTypeSlots = Object.keys(core.typography);

if (core.layout.touchTargetMin.value !== "44px") {
  throw new Error("layout.touchTargetMin must remain 44px");
}

for (const [name, token] of Object.entries(core.spacing)) {
  const px = Number.parseInt(token.value, 10);
  if (!Number.isInteger(px) || px % 4 !== 0) throw new Error(`spacing.${name} must be a 4px increment`);
}

const gridGap = Number.parseInt(core.layout.gridGap?.value, 10);
if (!Number.isInteger(gridGap) || gridGap % 4 !== 0) {
  throw new Error("layout.gridGap must be a 4px increment");
}

if (core.border?.["width.standard"]?.value !== "1px" || core.border?.["width.strong"]?.value !== "3px") {
  throw new Error("border widths must expose the approved 1px and 3px structural values");
}

if (core.radius?.none?.value !== "0px") {
  throw new Error("radius.none must remain 0px");
}

const themeFiles = (await readdir(themesDir)).filter((file) => file.endsWith(".json"));
for (const file of themeFiles) {
  const theme = JSON.parse(await readFile(path.join(themesDir, file), "utf8"));
  for (const slot of requiredTypeSlots) {
    if (!theme.typography?.[slot]) throw new Error(`${file} is missing typography.${slot}`);
  }
  for (const role of requiredRoles) {
    if (!theme.semantic?.[role]) throw new Error(`${file} is missing ${role}`);
  }
  const extra = Object.keys(theme.semantic).filter((role) => !requiredRoles.includes(role));
  if (extra.length) {
    throw new Error(`${file} maps unapproved semantic roles: ${extra.join(", ")}`);
  }
}

const { themes } = await exportCss();
const coreCss = await readFile(path.join(root, "dist/uds.core.css"), "utf8");
for (const role of requiredRoles) {
  if (!coreCss.includes(cssVar(role))) {
    throw new Error(`core CSS is missing ${cssVar(role)}`);
  }
}

console.log(`Validated ${requiredRoles.length} semantic roles across ${themeFiles.length} themes.`);
console.log(`Exported core CSS and ${themes} theme stylesheets to dist/.`);
