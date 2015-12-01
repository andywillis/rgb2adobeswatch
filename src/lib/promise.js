/**
 * Promise returns an object with then() and done() methods
 * to allow chaining.
 * @param  {array or object} data The data to be processed.
 * @return {array or object}      The processed data.
 */
export default function promise(data) {
  let output = data;
  return {
    done: function done(fn) {
      fn(output);
    },
    then: function next(fn) {
      output = fn(output);
      return this;
    },
  };
}
