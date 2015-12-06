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

## ES2015 to ES5 conversion

`npm run es5`.

Files will be placed in the `build` folder.

## Run the example

`npm run example`.

The `.ase` file will appear in the example folder.