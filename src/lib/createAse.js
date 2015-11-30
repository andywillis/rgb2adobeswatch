function createHeader(swatchTitle, numberOfBlocks) {
  const out = [];
  out.push({ val: 'ASEF', type: 'char', size: 4 });
  out.push({ val: 1, type: '16', size: 2 });
  out.push({ val: 0, type: '16', size: 2 });
  out.push({ val: numberOfBlocks, type: '32', size: 4 });
  out.push({ val: 'c0', type: 'hex', size: 1 });
  out.push({ val: '01', type: 'hex', size: 1 });
  out.push({ val: swatchTitle.length * 2 + 2, type: '32', size: 4 });
  out.push({ val: swatchTitle.length, type: '16', size: 2 });
  out.push({ val: swatchTitle, type: 'doub', size: swatchTitle.length * 2 });
  return out;
}

export default function createAse() {
  return function (rgbObj) {
    const rgbData = rgbObj.data;
    const swatchTitle = rgbObj.title;
    const numberOfBlocks = rgbData.length + 1;

    const out = createHeader(swatchTitle, numberOfBlocks);

    for (let sw in rgbData) {
      const s = rgbData[sw];
      const webColor = '##{cStr} ';
      const sStrL = 8;
      const blLen = 36;
      let cStr = '';

      for (let c in s) {
        const col = s[c].toString(16);
        cStr += (col.length === 1) ? '0' + col : col;
      }

      const sStr = webColor.replace('#{cStr}', cStr).toUpperCase();

      out.push({ val: 1, type: '16', size: 2 });
      out.push({ val: blLen, type: '32', size: 4 });
      out.push({ val: sStrL, type: '16', size: 2 });
      out.push({ val: sStr, type: 'doub', size: sStrL * 2 });
      out.push({ val: 'RGB ', type: 'char', size: 4 });
      out.push({ val: s[0] / 255, type: 'p32', size: 4 });
      out.push({ val: s[1] / 255, type: 'p32', size: 4 });
      out.push({ val: s[2] / 255, type: 'p32', size: 4 });
      out.push({ val: 2, type: '16', size: 2 });
    }

    let bLen = 0;
    for (let el in out) { bLen += out[el].size; };
    const b = new Buffer(bLen);
    let offset = 0;

    for (let obj = 0, len = out.length; obj < len; obj ++) {
      const v = out[obj].val;

      switch (out[obj].type) {
      case 'doub':
        for (let el = 0, l = v.length; el < l; el++) {
          b.write('', offset + el * 2);
          b.write(v[el], offset + el * 2 + 1);
        }
        break;
      case 'char': b.write(v, offset); break;
      case 'hex': b.write(v, offset, 'hex'); break;
      case '16': b.writeUInt16BE(v, offset); break;
      case '32': b.writeUInt32BE(v, offset); break;
      case 'p32': b.writeFloatBE(v, offset); break;
      }

      offset += out[obj].size;
    }
    rgbObj.buffer = b;
    return rgbObj;
  };
}
