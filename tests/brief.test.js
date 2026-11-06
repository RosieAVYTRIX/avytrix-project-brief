import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,sample,phases,markdown} from '../dist/brief.js';
test('every supported timeline covers the working days without gaps',()=>{for(const n of ['2','4','6','8']){const p=phases(n);let previous=0;for(const phase of p){const [a,b]=phase.range.match(/\d+/g).map(Number);assert.equal(a,previous+1);assert.ok(b>=a);previous=b;}assert.equal(previous,Number(n)*5);}});
test('export includes project scope and acceptance criteria',()=>{const text=markdown(sample);assert.ok(text.startsWith('# '+sample.name));for(const f of sample.features)assert.ok(text.includes('- '+f));assert.ok(text.includes(sample.success));assert.ok(text.includes('chưa phải cam kết'));});
test('empty brief exports useful fallback content',()=>{const text=markdown({...defaults,features:[]});assert.ok(text.includes('Chưa chọn phạm vi.'));assert.ok(!text.includes('undefined'));});
