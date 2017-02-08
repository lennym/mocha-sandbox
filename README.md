# mocha-sandbox

Better test output for asynchronous tests

## The problem

When running asynchronous tests with mocha, the common approach looks something like this:

```js
it('does a thing asynchronously', (done) => {
  myThing((err, result) => {
    assert(result);
    done();
  });
});
```

Unfortunately this causes a test failure to result in a timeout rather than a nice error message describing the failed assertion.

## The solution

You can wrap your assertions manually in a try/catch, but that leads to slightly verbose and unclean code.

Instead, wrap your callbacks in `sandbox`:

```js
const sandbox = require('mocha-sandbox');

it('does a thing asynchronously', (done) => {
  myThing(sandbox((err, result) => {
    assert(result);
  }, done));
});
```

The full error messages from your assertions will then be reported for all test failures.
