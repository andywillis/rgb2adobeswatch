export default function promise(data) {
  let output = data;
  return {
    done: function done(fn) {
      if (fn) {
        fn(output);
      } else {
        console.log(output);
      }
    },
    then: function next(fn) {
      output = fn(output);
      return this;
    },
  };
}
