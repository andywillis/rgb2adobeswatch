/**
 * createHeader creates the buffer header
 * @param  {string} swatchTitle    Swatch title
 * @param  {number} numberOfBlocks Number of data blocks
 * @return {array}                 Header array
 */
function createHeader(swatchTitle, numberOfBlocks) {
  return [
    { val: 'ASEF', type: 'char', size: 4 },
    { val: 1, type: '16', size: 2 },
    { val: 0, type: '16', size: 2 },
    { val: numberOfBlocks, type: '32', size: 4 },
    { val: 'c0', type: 'hex', size: 1 },
    { val: '01', type: 'hex', size: 1 },
    { val: swatchTitle.length * 2 + 2, type: '32', size: 4 },
    { val: swatchTitle.length, type: '16', size: 2 },
    { val: swatchTitle, type: 'doub', size: swatchTitle.length * 2 }
  ];
}

/**
 * createBody creates the body of the buffer from the quantized
 * rgb data.
 * @param  {array} rgbData rgb array
 * @return {array}         array of buffer objects
 */
function createBody(rgbData) {

  const out = [];

  rgbData.forEach(color => {

    const sStrL = 8;
    const blLen = 36;

    const cStr = color.map(level => {
      const col = level.toString(16);
      return col.length === 1 ? '0' + col : col;
    }).join('');

    const sStr = '##{cStr}'.replace('#{cStr}', cStr).toUpperCase();

    out.push({ val: 1, type: '16', size: 2 });
    out.push({ val: blLen, type: '32', size: 4 });
    out.push({ val: sStrL, type: '16', size: 2 });
    out.push({ val: sStr, type: 'doub', size: sStrL * 2 });
    out.push({ val: 'RGB ', type: 'char', size: 4 });
    out.push({ val: color[0] / 255, type: 'p32', size: 4 });
    out.push({ val: color[1] / 255, type: 'p32', size: 4 });
    out.push({ val: color[2] / 255, type: 'p32', size: 4 });
    out.push({ val: 2, type: '16', size: 2 });

  });

  return out;
}

/**
 * createBuffer creates a binary buffer from the compiled
 * header and body buffer objects
 * @param  {array} rgbData  Combined header and body buffer objects
 * @return {buffer}         ase data buffer
 */
function createBuffer(rgbData) {

  const bLen = rgbData.reduce((p, c) => {
    return p + c.size;
  }, 0);

  const buffer = new Buffer(bLen);
  let offset = 0;

  rgbData.forEach(obj => {
    const value = obj.val;

    switch (obj.type) {
    case 'doub':
      for (let el = 0, l = value.length; el < l; el++) {
        buffer.write('', offset + el * 2);
        buffer.write(value[el], offset + el * 2 + 1);
      }
      break;
    case 'char': buffer.write(value, offset); break;
    case 'hex': buffer.write(value, offset, 'hex'); break;
    case '16': buffer.writeUInt16BE(value, offset); break;
    case '32': buffer.writeUInt32BE(value, offset); break;
    case 'p32': buffer.writeFloatBE(value, offset); break;
    }

    offset += obj.size;
  });

  return buffer;
}

/**
 * createAse returns the binary buffer
 * created from the header and body buffer objects
 * @return {buffer} Compiled ase buffer
 */
export default function createAse() {
  return function (rgbObj) {
    const rgbData = rgbObj.data;
    const swatchTitle = rgbObj.title;
    const numberOfBlocks = rgbData.length + 1;
    const header = createHeader(swatchTitle, numberOfBlocks);
    const body = createBody(rgbData);
    return createBuffer(header.concat(body));
  };
}
