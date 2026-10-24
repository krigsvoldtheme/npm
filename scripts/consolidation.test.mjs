import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const json=async p=>JSON.parse(await readFile(p,'utf8'));
test('source profile and pattern exports are additive and build deterministically',async()=>{
 const pkg=await json('package.json'), language=await json('dist/language.json');
 assert.deepEqual(language,await json('language.json'));
 assert.equal(language.family,'krigsvold');assert.equal(language.maturity,'experimental');
 assert.equal(language.implementation.Astro.status,'unreleased-candidate');
 for(const name of ['patterns','source-profile']) {
  assert.equal(pkg.exports['./'+name+'.css'],'./dist/'+name+'.css');
  assert.equal(await readFile('dist/'+name+'.css','utf8'),await readFile('styles/'+name+'.css','utf8'));
 }
 const full=await readFile('dist/full.css','utf8'), colors=await readFile('dist/theme.css','utf8');
 assert.match(full,/patterns.css/);assert.doesNotMatch(full,/source-profile.css/);
 assert.doesNotMatch(colors,/contents|source-profile|site-footer/);
});
