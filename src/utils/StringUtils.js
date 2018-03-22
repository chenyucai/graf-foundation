function isBlank(string) {
  return string === '' || string === null || string === undefined;
}

function toArray(string, char = ',') {
  return string.split(char);
}

function plusXing(str, frontLen, endLen, xingLen = 5) {
  let xingStr = '';
  for (let i = 0; i < xingLen; i++) {
    xingStr += '*';
  }
  return str.substr(0, frontLen) + xingStr + str.substr(str.length - endLen);
}

export default {
  isBlank,
  toArray,
  plusXing
}
