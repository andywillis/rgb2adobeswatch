import fs from 'fs';
import rgb2AdobeSwatch from '../src/index';
import rgbObj from './data';

/**
 * writeFile returns a function for use in the
 * rgb2AdobeSwatch promise module
 * @return {function} The function called by the promise done() method.
 */
function writeFile() {
  return function (buffer) {
    fs.writeFile('example.ase', buffer);
  };
}

rgb2AdobeSwatch(rgbObj, writeFile);
