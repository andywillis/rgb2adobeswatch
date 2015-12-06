var test = require('tape');
var promise = require('../lib/lib/promise').default;

test('promise is a function', function (t) {
  t.plan(1);
  t.equal('function', typeof promise, 'promise is a function');
  t.end();
});
