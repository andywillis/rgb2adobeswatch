'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getQuantizedData;

var _quantize = require('quantize');

var _quantize2 = _interopRequireDefault(_quantize);

var _lodash = require('lodash.uniq');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a quantized data set
 * @return {array} The quantized data set
 */
function getQuantizedData() {
  return function (rgbObj) {
    var swatchData = {};
    var rgbData = rgbObj.data;
    var cmap = (0, _quantize2.default)(rgbData, rgbObj.size || 12);
    swatchData.title = rgbObj.title;
    swatchData.data = (0, _lodash2.default)(rgbData.map(function (p) {
      return cmap.map(p);
    }));
    return swatchData;
  };
}