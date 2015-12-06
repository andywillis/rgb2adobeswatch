"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promise;
/**
 * Returns an object with then() and done() methods
 * to allow chaining.
 * @param  {object} data The data to be processed.
 * @return {object}      The processed data.
 */
function promise(data) {
  var output = data;
  return {
    done: function done(fn) {
      fn(output);
    },
    then: function next(fn) {
      output = fn(output);
      return this;
    }
  };
}