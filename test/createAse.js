var test = require('tape');
var createAse = require('../build/createAse').default;

test('createAse is a function', function (t) {
  t.plan(1);
  t.equal('function', typeof createAse, 'createAse is a function');
  t.end();
});
