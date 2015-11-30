import processData from './lib/promise';
import getQuantizedData from './lib/getQuantizedData';
import createAse from './lib/createAse';

export default function rgb2AdobeSwatch(obj, callback) {
  processData(obj)
    .then(getQuantizedData())
    .then(createAse())
    .done(callback());
}
