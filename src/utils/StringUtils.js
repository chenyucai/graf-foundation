function isBlank(string) {
  return string === '' || string === null || string === undefined;
}

function toArray(string, char = ',') {
  return string.split(char);
}

export default {
  isBlank,
  toArray
}
