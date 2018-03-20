function toJSONString(json) {
  return JSON.stringify(json);
}

function parseObject(JSONString) {
  return JSON.parse(JSONString);
}

export default {
  toJSONString,
  parseObject
}
