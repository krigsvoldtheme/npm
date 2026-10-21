import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { layout, foundation, themes } from '../dist/index.js';
const require=createRequire(import.meta.url);
test('layout exports are consistent across ESM, CommonJS and JSON',async()=>{
  assert.deepEqual(layout,require('../dist/index.cjs').layout);
  assert.deepEqual(layout,JSON.parse(await readFile('dist/layout.json','utf8')));
  assert.deepEqual(layout.primitives,['container','stack','cluster','grid','sidebar','split']);
  for(const [key,value] of Object.entries(layout.tokens))assert.equal(foundation.tokens[key],value);
});
test('layout provenance records both live source sites',()=>{
  assert.equal(layout.sources.length,2);
  for(const s of layout.sources){assert.match(s.commit,/^[a-f0-9]{40}$/);assert.ok(s.files.length>1);}
  assert.equal(layout.sources[1].url,'https://krigsvoldtheme.dev/');
});
test('layout CSS is optional, palette-independent, and intrinsically responsive',async()=>{
  const css=await readFile('dist/layout.css','utf8');
  assert.doesNotMatch(css,/@import|@font-face|#[a-f0-9]{3,8}\b|overflow-x:\s*(hidden|clip)|(?:^|\n)\s*(?:html|body|:root)\s*[{,]/i);
  assert.match(css,/min\(100%/);assert.match(css,/flex-wrap:wrap/);assert.match(css,/min-inline-size:0/);
  assert.match(await readFile('dist/full.css','utf8'),/layout\.css/);
  assert.doesNotMatch(await readFile('dist/theme.css','utf8'),/layout|@import/);
});
