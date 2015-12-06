/**
 * Promise returns an object with then() and done() methods
 * to allow chaining.
 * @param  {object} data The data to be processed.
 * @return {object}      The processed data.
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
