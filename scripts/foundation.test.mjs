import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { themes, foundation, design, capabilities } from '../dist/index.js';
const require = createRequire(import.meta.url);
test('font roles are independent and originate with krigsvold.org', () => {
  assert.equal(foundation.origin, 'https://krigsvold.org/');
  for (const [role,family] of Object.entries({serif:'Roboto Slab',sans:'Roboto',display:'Roboto Slab',mono:'Roboto Mono'})) {
    assert.equal(foundation.typographyRoles[role].family,family);
    assert.ok(design.fonts[role].includes(family));
  }
});
test('the original light/dark color contract is unchanged', async () => {
  const baseline = JSON.parse(await readFile(new URL('../tests/colors-v1.json',import.meta.url),'utf8'));
  assert.deepEqual(themes, baseline);
});
test('color-only import does not load fonts or apply typography', async () => {
  const css = await readFile('dist/theme.css','utf8');
  assert.doesNotMatch(css, /@import|@font-face|font-family|:root/);
  assert.match(css, /\[data-krigsvold="light"\]/);
});
test('optional fonts resolve locally and retain upstream licenses', async () => {
  const css = await readFile('dist/fonts.css','utf8');
  assert.doesNotMatch(css,/https?:|Berkeley/);
  for (const [,path] of css.matchAll(/@import '([^']+)'/g)) assert.ok((await readFile(require.resolve(path))).length);
  for (const family of ['roboto','roboto-slab','roboto-mono']) {
    const pkg=require.resolve(`@fontsource/${family}/package.json`);
    const license=await readFile(new URL('./LICENSE',`file://${pkg}`),'utf8');
    assert.match(license, family === 'roboto-slab' ? /Apache License/ : /OPEN FONT LICENSE/i);
    assert.equal(await readFile(`dist/licenses/${family}.txt`,'utf8'), license);
  }
});
test('reduced motion and capability limits are explicit', async () => {
  assert.match(await readFile('dist/foundation.css','utf8'),/prefers-reduced-motion: reduce/);
  assert.ok(capabilities.firefox.unsupported.includes('fonts'));
  assert.ok(capabilities.vim.separateConfiguration.includes('monospace font'));
});
test('foundation identity colors match the recorded originating CSS', async () => {
  const source = await readFile('references/krigsvold-origin.css','utf8');
  const declarations = [...source.split('}',1)[0].matchAll(/--([\w-]+):\s*([^;]+);/g)];
  for (const [,key,value] of declarations) {
    if (!['serif','sans'].includes(key)) assert.equal(foundation.tokens[`color-${key}`],value);
  }
  assert.equal(foundation.typographyRoles.sans.usage.startsWith('Body prose'),true);
  assert.equal(foundation.typographyRoles.serif.family,foundation.typographyRoles.display.family);
});
