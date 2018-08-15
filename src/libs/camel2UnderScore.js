function camel2UnderScore(object) {
  if (object === null) {
    return object;
  }
  if (typeof object !== 'object') {
    return object;
  }
  let newObj = {}.toString.call(object) === '[object Array]' ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[toUnder(key)] = typeof object[key] === 'object'
        ? camel2UnderScore(object[key])
        : object[key];
    }
  }
  return newObj;
}

function toUnder(name) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}
