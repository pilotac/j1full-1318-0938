const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/index.js');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('add handles negatives', () => {
  assert.strictEqual(add(-2, 1), -1);
});

test('subtract takes the second number from the first', () => {
  const { subtract } = require('../src/index.js');
  assert.strictEqual(subtract(5, 3), 2);
});
