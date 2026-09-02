import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = new URL("..", import.meta.url).pathname;
const core = JSON.parse(await readFile(path.join(root, "tokens/core.json"), "utf8"));
const themesDir = path.join(root, "themes");
const requiredRoles = Object.keys(core.semantic);

for (const [name, token] of Object.entries(core.spacing)) {
  const px = Number.parseInt(token.value, 10);
  if (!Number.isInteger(px) || px % 4 !== 0) throw new Error(`spacing.${name} must be a 4px increment`);
}

for (const file of await readdir(themesDir)) {
  if (!file.endsWith(".json")) continue;
  const theme = JSON.parse(await readFile(path.join(themesDir, file), "utf8"));
  for (const role of requiredRoles) {
    if (!theme.semantic?.[role]) throw new Error(`${file} is missing ${role}`);
  }
}

console.log(`Validated ${requiredRoles.length} semantic roles across ${(await readdir(themesDir)).filter(f => f.endsWith(".json")).length} themes.`);
