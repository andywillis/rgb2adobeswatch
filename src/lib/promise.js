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
