import fs from 'fs';
import rgb2AdobeSwatch from '../src/index';
import rgbData from './data';

function writeFile() {
  return function (rgbObj) {
    fs.writeFile('example.ase', rgbObj.buffer);
  };
}

rgb2AdobeSwatch(rgbData, writeFile);
