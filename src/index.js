import processData from './lib/promise';
import { map, filter, adder, evens } from './lib/fn';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addTwo = adder(2);

processData(arr)
  .then(map(addTwo()))
  .then(filter(evens()))
  .done();
