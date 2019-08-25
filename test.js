const wordlist = require("./wordlist-lv");
const assert = require('assert');
describe('wordlist-lv.json integrity', () => {
  it('should be an array', () => {
    assert.equal(Array.isArray(wordlist), true);
  });
});