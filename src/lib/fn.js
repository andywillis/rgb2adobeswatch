export function evens() {
  return function (el) {
    return el % 2 === 0;
  };
}

export function map(fn) {
  return function (arr) {
    return arr.map(fn);
  };
}

export function adder(by) {
  return function () {
    return function (el) {
      return el + by;
    };
  };
}

export function filter(fn) {
  return function (arr) {
    return arr.filter(fn);
  };
}
