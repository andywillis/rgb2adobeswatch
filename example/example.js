import fs from 'fs';
import rgb2AdobeSwatch from '../src/index';
import rgbData from './data';

function writeFile() {
  return function (buffer) {
    fs.writeFile('example.ase', buffer);
  };
}

rgb2AdobeSwatch(rgbData, writeFile);
