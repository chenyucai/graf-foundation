function isObject(object) {
  return object && {}.toString.call(object) === '[object Object]';
}

function isNullOrEmpty(object) {
  if (object === null || object === undefined) {
    return true;
  }
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function deepCopy(object) {
  if (object === null) {
    return object;
  }
  if (typeof object !== 'object') {
    return object;
  }
  const newObj = {}.toString.call(object) === '[object Array]' ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = typeof object[key] === 'object'
        ? this.deepCopy(object[key])
        : object[key];
    }
  }
  return newObj;
}

export default {
  isObject,
  isNullOrEmpty,
  deepCopy
}
