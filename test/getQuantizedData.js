var test = require('tape');
var getQuantizedData = require('../lib/lib/getQuantizedData').default;

test('getQuantizedData is a function', function (t) {
  t.plan(1);
  t.equal('function', typeof getQuantizedData, 'getQuantizedData is a function');
  t.end();
});
