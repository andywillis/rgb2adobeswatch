'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rgb2AdobeSwatch;

var _promise = require('./lib/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getQuantizedData = require('./lib/getQuantizedData');

var _getQuantizedData2 = _interopRequireDefault(_getQuantizedData);

var _createAse = require('./lib/createAse');

var _createAse2 = _interopRequireDefault(_createAse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Uses a bespoke promise to chain together the conversion methods
 * @param  {obj}      obj       The data object which contains a title property
 *                              and a data property comprised of an array of rgb
 *                              arrays. See example/data.js for details
 * @param  {function} callback  Callback function. See example/example.js for
 *                              details.
 */
function rgb2AdobeSwatch(obj, callback) {
  (0, _promise2.default)(obj).then((0, _getQuantizedData2.default)()).then((0, _createAse2.default)()).done(callback());
}