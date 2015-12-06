import processData from './lib/promise';
import getQuantizedData from './lib/getQuantizedData';
import createAse from './lib/createAse';

/**
 * Uses a bespoke promise to chain together the conversion methods
 * @param  {obj}      obj       The data object which contains a title property
 *                              and a data property comprised of an array of rgb
 *                              arrays. See example/data.js for details
 * @param  {function} callback  Callback function. See example/example.js for
 *                              details.
 */
export default function rgb2AdobeSwatch(obj, callback) {
  processData(obj)
    .then(getQuantizedData())
    .then(createAse())
    .done(callback());
}
