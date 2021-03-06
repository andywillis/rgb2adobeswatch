import quantize from 'quantize';
import uniq from 'lodash.uniq';

/**
 * Returns a quantized data set
 * @return {array} The quantized data set
 */
export default function getQuantizedData() {
  return function (rgbObj) {
    const swatchData = {};
    const rgbData = rgbObj.data;
    const cmap = quantize(rgbData, rgbObj.size || 12);
    swatchData.title = rgbObj.title;
    swatchData.data = uniq(rgbData.map(function (p) { return cmap.map(p); }));
    return swatchData;
  };
}
