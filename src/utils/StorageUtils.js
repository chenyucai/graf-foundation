import store from 'store'

function get(key) {
  return store.get(key);
}

function set(key, value) {
  return store.set(key, value);
}

function remove(key) {
  return store.remove(key);
}

function clearAll() {
  return store.clearAll();
}

export default {
  get,
  set,
  remove,
  clearAll
}
