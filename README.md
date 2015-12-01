# rgb2adobeswatch

Converts an array of RGB values to Adobe swatch format.

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

To convert the ES2015 code to ES5:

Install the following globally:

`npm install babel-cli babel-loader eslint eslint-loader eslint-config-airbnb babel-eslint esl int-plugin-react -g`

Then: `npm run babel`.

To browserify: `npm run bundle`.

To run the example:

* `cd example`
* `babel-node example.js --presets es2015`

The .ase file will appear in the example folder.