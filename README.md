# rgb2adobeswatch

Converts an array of RGB values to Adobe swatch format.

## Install

`npm install rgb2adobeswatch`

## How to use

The module accepts an object with a title property and a data property...

```javascript
var rgbObj = {
  title: 'myObject',
  data: [[12, 45, 34], [134, 121, 34]...]
}
```

...and a callback.

```javascript
rgb2AdobeSwatch(rgbObj, writeFile);
```

## Conversions

To ES5: `npm run es5`.

To browserify: `npm run bundle`.

To run the example: `npm run example`. The `.ase` file will appear in the example folder.

To create the documentation: `npm run doc`.

To run the tests: `npm run test`.