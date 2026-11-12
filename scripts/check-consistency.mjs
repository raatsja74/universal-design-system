import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { exportCss } from './export-css.mjs';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const themes = (await readdir(new URL('../themes/', import.meta.url))).filter(p => p.endsWith('.json'));
const paths = ['dist/uds.core.css', ...themes.map(p => `dist/themes/${p.replace(/json$/, 'css')}`)];
const committed = await Promise.all(paths.map(read));
await exportCss();
for (const [i, path] of paths.entries()) {
  assert.equal(await read(path), committed[i], `${path} was stale; commit regenerated CSS`);
}
const index = await read('index.html');
assert.match(index, /<html[^>]+data-uds-theme="jadenraats-modern"/);
assert.match(index, /value="jadenraats">Jaden Raats legacy/);
assert.doesNotMatch(index, /unreleased modern theme/i);
const legacy = await read('style-guide.html');
assert.match(legacy, /data-uds-theme="jadenraats"/);
assert.match(legacy, /legacy/i);
for (const path of ['README.md', 'AGENTS.md', 'docs/adoption.md']) {
  const text = await read(path);
  assert.match(text, /jadenraats-modern/);
  assert.match(text, /legacy/i);
}
const urls = [...(await read('README.md')).matchAll(/https:\/\/raw\.githubusercontent\.com\/raatsja74\/universal-design-system\/main\/([^`\s)]+)/g)];
for (const [, path] of urls) await read(path);
assert.ok(urls.length >= 6, 'Keep modern, legacy and core artifact discovery links');
console.log(`CSS matches JSON for core and ${themes.length} themes; modern default, legacy reference and raw paths agree.`);
