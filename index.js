'use strict';

module.exports = function sandbox(assertions, done) {
  return function testAssertions() {
    try {
      assertions.apply(this, arguments);
      done();
    } catch (err) {
      done(err);
    }
  };
};
