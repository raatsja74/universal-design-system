import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const theme = JSON.parse(await readFile(new URL('../themes/jadenraats-modern.json', import.meta.url)));
function luminance(hex) {
  assert.match(hex, /^#[0-9a-f]{6}$/i, 'Contrast checks require opaque sRGB hex colors');
  const rgb = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
const pairs = [
  ['color.text.primary', 'surface.canvas', 4.5],
  ['color.text.primary', 'surface.elevated', 4.5],
  ['color.text.secondary', 'surface.canvas', 4.5],
  ['color.text.secondary', 'surface.elevated', 4.5],
  ['color.text.inverse', 'surface.inverse', 4.5],
  ['color.action.text', 'surface.canvas', 4.5],
  ['color.action.text', 'surface.elevated', 4.5],
  ['color.action.primaryText', 'color.action.primary', 4.5],
  ['color.focus.ring', 'surface.canvas', 3],
  ['color.focus.ring', 'surface.elevated', 3],
];
for (const [mode, overrides] of [['light', {}], ['dark', theme.modes.dark.semantic]]) {
  const roles = { ...theme.semantic, ...overrides };
  for (const [foreground, background, minimum] of pairs) {
    const [low, high] = [luminance(roles[foreground]), luminance(roles[background])].sort((a, b) => a - b);
    const ratio = (high + 0.05) / (low + 0.05);
    assert.ok(ratio >= minimum, `${mode}: ${foreground} on ${background}: ${ratio.toFixed(2)} < ${minimum}`);
  }
}
console.log('Modern theme: 20 opaque-surface contrast checks passed. Glass and rendered states require browser review.');
