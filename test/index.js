var test = require('tape');
var rgb2AdobeSwatch = require('../dist/index').default;

test('rgb2AdobeSwatch is a function', function (t) {
  t.plan(1);
  t.equal('function', typeof rgb2AdobeSwatch, 'rgb2AdobeSwatch is a function');
  t.end();
});
