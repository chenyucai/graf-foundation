function isArray(array) {
  return array && {}.toString.call(array) === '[object Array]';
}

function isNullOrEmpty(array) {
  return array === null || array.length === 0;
}

function toString(array, char = ',') {
  return array.join(char);
}

function add(array, item) {
  return array.push(item);
}

function remove(array, item) {
  let index = array.findIndex(n => n === item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function removeAt(array, index) {
  return array.splice(index, 1);
}

function contains(array, item) {
  let index = array.findIndex(n => n === item);
  return index > -1;
}

export default {
  isArray,
  isNullOrEmpty,
  toString,
  add,
  remove,
  removeAt,
  contains
}