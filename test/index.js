var expect = require('expect.js'),
    tipMexico = require('..');

describe('tip-mexico', function() {
  it('should say hello', function(done) {
    expect(tipMexico()).to.equal('Hello, world');
    done();
  });
});
