/**
* graf-foundation v0.0.2
* author: Nic Chan
* https://github.com/chenyucai/graf-foundation.git
*/

import store from 'store';

function isBlank(string) {
  return string === '' || string === null || string === undefined;
}

function toArray(string) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

  return string.split(char);
}

var StringUtils = {
  isBlank: isBlank,
  toArray: toArray
};

function isArray(array) {
  return array && {}.toString.call(array) === '[object Array]';
}

function isNullOrEmpty(array) {
  return array === null || array.length === 0;
}

function toString(array) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

  return array.join(char);
}

function add(array, item) {
  return array.push(item);
}

function remove(array, item) {
  var index = array.findIndex(function (n) {
    return n === item;
  });
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function removeAt(array, index) {
  return array.splice(index, 1);
}

function contains(array, item) {
  var index = array.findIndex(function (n) {
    return n === item;
  });
  return index > -1;
}

var ArrayUtils = {
  isArray: isArray,
  isNullOrEmpty: isNullOrEmpty,
  toString: toString,
  add: add,
  remove: remove,
  removeAt: removeAt,
  contains: contains
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * 日期对象转换为指定格式的字符串
 * @param formatStr 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
 * @param date Date日期对象, 如果缺省，则为当前时间
 * YYYY/yyyy/YY/yy 表示年份
 * MM/M 月份
 * W/w 星期
 * dd/DD/d/D 日期
 * hh/HH/h/H 时间
 * mm/m 分钟
 * ss/SS/s/S 秒
 * @return string 指定格式的时间字符串
 */
function format(formatStr, date) {
  formatStr = arguments[0] || "yyyy-MM-dd HH:mm:ss";
  date = arguments[1] || new Date();
  var str = formatStr;
  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  str = str.replace(/yyyy|YYYY/, date.getFullYear());
  str = str.replace(/yy|YY/, date.getYear() % 100 > 9 ? (date.getYear() % 100).toString() : '0' + date.getYear() % 100);
  str = str.replace(/MM/, date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
  str = str.replace(/M/g, date.getMonth() + 1);
  str = str.replace(/w|W/g, Week[date.getDay()]);

  str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
  str = str.replace(/d|D/g, date.getDate());

  str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
  str = str.replace(/h|H/g, date.getHours());
  str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
  str = str.replace(/m/g, date.getMinutes());

  str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
  str = str.replace(/s|S/g, date.getSeconds());

  return str;
}

/**
 * 通过偏移量查日期
 * @param offset 0 代表当天
 * @param date - yyyy-MM-dd 表示以哪个日期开始计算
 * @return string - yyyy-MM-dd
 */
function getDateByOffset(offset, date) {
  var _date = void 0;
  var _offset = offset || 0;
  if (date) {
    _date = new Date(date);
  } else {
    _date = new Date();
  }

  _date.setDate(_date.getDate() + _offset);
  var yy = _date.getFullYear();
  var mm = _date.getMonth() + 1;
  var dd = _date.getDate();

  function preZero(num) {
    num = parseInt(num);
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  return yy + '-' + preZero(mm) + '-' + preZero(dd);
}

/**
 * number类型日期转字符串
 * @param dateNum
 * @param formatStr
 * @returns {*}
 */
function numberToString(dateNum, formatStr) {
  if (!dateNum) {
    return null;
  }
  formatStr = formatStr || '-';
  var dateStr = dateNum.toString();
  return dateStr.substr(0, 4) + formatStr + dateStr.substr(4, 2) + formatStr + dateStr.substr(6, 2);
}

/**
 * 字符串类型转number
 * @param dateStr - 格式 yyyy-MM-dd
 * @return number
 */
function stringToNumber(dateStr) {
  return parseInt(dateStr.replace(/-/g, ''));
}

/**
 * 字符串转换为日期对象
 * @param dateStr - 格式为yyyy-MM-dd HH:mm:ss，必须按年月日时分秒的顺序，中间分隔符不限制
 */
function stringToDate(dateStr) {
  var data = dateStr;
  var reCat = /(\d{1,4})/gm;
  var t = data.match(reCat);
  t[1] = t[1] - 1;
  var _t = t.map(function (n) {
    return parseInt(n);
  });
  return new (Function.prototype.bind.apply(Date, [null].concat(toConsumableArray(_t))))();
}

/**
 * 日期对象转换为毫秒数
 * @param date - 日期对象
 */
function dateToLong(date) {
  return date.getTime();
}

/**
 * 毫秒转换为日期对象
 * @param long - 日期的毫秒数
 */
function longToDate(long) {
  return new Date(long);
}

/**
 * 取得当前日期所在月的最大天数
 */
function maxDayOfDate(date) {
  date = arguments[0] || new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  var time = date.getTime() - 24 * 60 * 60 * 1000;
  var newDate = new Date(time);
  return newDate.getDate();
}

var DateUtils = {
  format: format,
  getDateByOffset: getDateByOffset,
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToDate: stringToDate,
  dateToLong: dateToLong,
  longToDate: longToDate,
  maxDayOfDate: maxDayOfDate
};

function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uid = [];
  var i = void 0;
  if (len) {
    radix = radix || chars.length;
    for (i = 0; i < len; i++) {
      uid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r = void 0;
    uid[8] = uid[13] = uid[18] = uid[23] = '-';
    uid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uid[i]) {
        r = 0 | Math.random() * 16;
        uid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  return uid.join('');
}

function getKeyOfPair(pair) {
  if (!pair) {
    return null;
  }
  return pair.key;
}

function getValueOfPair(pair) {
  if (!pair) {
    return null;
  }
  return pair.value;
}

function downloadFile(url) {
  var download = {};
  if (!download.iframe) {
    download.iframe = document.createElement('iframe');
    document.body.appendChild(download.iframe);
  }
  download.iframe.src = url;
  download.iframe.style.display = 'none';
}

function getClientWidth() {
  return document.documentElement.clientWidth || document.body.clientWidth;
}

function getClientHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

function setPageTitle(title) {
  // 解决ios上不能设置title的问题
  setTimeout(function () {
    // 利用iframe的onload事件刷新页面
    document.title = title;
    var iframe = document.createElement('iframe');
    iframe.src = '/favicon.ico'; // 必须
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe);
      }, 0);
    };
    document.body.appendChild(iframe);
  }, 0);
}

function createObjectURL(blob) {
  return (window.URL || window.webkitURL).createObjectURL(blob);
}

var GeneralUtils = {
  uuid: uuid,
  getKeyOfPair: getKeyOfPair,
  getValueOfPair: getValueOfPair,
  downloadFile: downloadFile,
  getClientWidth: getClientWidth,
  getClientHeight: getClientHeight,
  setPageTitle: setPageTitle,
  createObjectURL: createObjectURL
};

function toJSONString(json) {
  return JSON.stringify(json);
}

function parseObject(JSONString) {
  return JSON.parse(JSONString);
}

var JsonUtils = {
  toJSONString: toJSONString,
  parseObject: parseObject
};

function isObject(object) {
  return object && {}.toString.call(object) === '[object Object]';
}

function isNullOrEmpty$1(object) {
  if (object === null || object === undefined) {
    return true;
  }
  for (var key in object) {
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
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
    return object;
  }
  var newObj = {}.toString.call(object) === '[object Array]' ? [] : {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = _typeof(object[key]) === 'object' ? this.deepCopy(object[key]) : object[key];
    }
  }
  return newObj;
}

var ObjectUtils = {
  isObject: isObject,
  isNullOrEmpty: isNullOrEmpty$1,
  deepCopy: deepCopy
};

function get$1(key) {
  return store.get(key);
}

function set$1(key, value) {
  return store.set(key, value);
}

function remove$1(key) {
  return store.remove(key);
}

function clearAll() {
  return store.clearAll();
}

var StorageUtils = {
  get: get$1,
  set: set$1,
  remove: remove$1,
  clearAll: clearAll
};

/* eslint-disable */
function extend() {
  var i = 0;
  var result = {};
  for (; i < arguments.length; i++) {
    var attributes = arguments[i];
    for (var key in attributes) {
      result[key] = attributes[key];
    }
  }
  return result;
}

function init(converter) {
  function api(key, value, attributes) {
    var result;
    if (typeof document === 'undefined') {
      return;
    }

    // Write

    if (arguments.length > 1) {
      attributes = extend({
        path: '/'
      }, api.defaults, attributes);

      if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
        attributes.expires = expires;
      }

      // We're using "expires" because "max-age" is not supported by IE
      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

      try {
        result = JSON.stringify(value);
        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) {}

      if (!converter.write) {
        value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      } else {
        value = converter.write(value, key);
      }

      key = encodeURIComponent(String(key));
      key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
      key = key.replace(/[\(\)]/g, escape);

      var stringifiedAttributes = '';

      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += '; ' + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }
        stringifiedAttributes += '=' + attributes[attributeName];
      }
      return document.cookie = key + '=' + value + stringifiedAttributes;
    }

    // Read

    if (!key) {
      result = {};
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling "get()"
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var rdecode = /(%[0-9A-Z]{2})+/g;
    var i = 0;

    for (; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var cookie = parts.slice(1).join('=');

      if (cookie.charAt(0) === '"') {
        cookie = cookie.slice(1, -1);
      }

      try {
        var name = parts[0].replace(rdecode, decodeURIComponent);
        cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

        if (this.json) {
          try {
            cookie = JSON.parse(cookie);
          } catch (e) {}
        }

        if (key === name) {
          result = cookie;
          break;
        }

        if (!key) {
          result[name] = cookie;
        }
      } catch (e) {}
    }

    return result;
  }

  api.set = api;
  api.get = function (key) {
    return api.call(api, key);
  };
  api.getJSON = function () {
    return api.apply({
      json: true
    }, [].slice.call(arguments));
  };
  api.defaults = {};

  api.remove = function (key, attributes) {
    api(key, '', extend(attributes, {
      expires: -1
    }));
  };

  api.withConverter = init;

  return api;
}

var cookie = init(function () {});

/**
 *MD5加密
 */
/* eslint-disable */
var hexcase = 1;
/* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = "";
/* base-64 pad character. "=" for strict RFC compliance   */

var Md5 = {

  hex_md5: function hex_md5(s) {
    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
  },
  b64_md5: function b64_md5(s) {
    return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)));
  },
  any_md5: function any_md5(s, e) {
    return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e);
  },
  hex_hmac_md5: function hex_hmac_md5(k, d) {
    return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
  },
  b64_hmac_md5: function b64_hmac_md5(k, d) {
    return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
  },
  any_hmac_md5: function any_hmac_md5(k, d, e) {
    return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
  },
  /*
   * Calculate the MD5 of a raw string
   */

  rstr_md5: function rstr_md5(s) {
    return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
  },

  /*
   * Calculate the HMAC-MD5, of a key and some data (raw strings)
   */
  rstr_hmac_md5: function rstr_hmac_md5(key, data) {
    var bkey = this.rstr2binl(key);
    if (bkey.length > 16) bkey = this.binl_md5(bkey, key.length * 8);

    var ipad = Array(16),
        opad = Array(16);
    for (var i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
  },

  /*
   * Convert a raw string to a hex string
   */
  rstr2hex: function rstr2hex(input) {
    try {
      hexcase;
    } catch (e) {
      hexcase = 0;
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
  },

  /*
   * Convert a raw string to a base-64 string
   */
  rstr2b64: function rstr2b64(input) {
    try {
      b64pad;
    } catch (e) {
      b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for (var i = 0; i < len; i += 3) {
      var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
      for (var j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > input.length * 8) output += b64pad;else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
      }
    }
    return output;
  },

  /*
   * Convert a raw string to an arbitrary string encoding
   */
  rstr2any: function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var i, j, q, x, quotient;

    /* Convert to an array of 16-bit big-endian values, forming the dividend */
    var dividend = Array(Math.ceil(input.length / 2));
    for (i = 0; i < dividend.length; i++) {
      dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }

    /*
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. All remainders are stored for later
     * use.
     */
    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    var remainders = Array(full_length);
    for (j = 0; j < full_length; j++) {
      quotient = Array();
      x = 0;
      for (i = 0; i < dividend.length; i++) {
        x = (x << 16) + dividend[i];
        q = Math.floor(x / divisor);
        x -= q * divisor;
        if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
      }
      remainders[j] = x;
      dividend = quotient;
    }

    /* Convert the remainders to the output string */
    var output = "";
    for (i = remainders.length - 1; i >= 0; i--) {
      output += encoding.charAt(remainders[i]);
    }return output;
  },

  /*
   * Encode a string as utf-8.
   * For efficiency, this assumes the input is valid utf-16.
   */
  str2rstr_utf8: function str2rstr_utf8(input) {

    var output = "";
    var i = -1;
    var x, y;

    while (++i < input.length) {
      /* Decode utf-16 surrogate pairs */
      x = input.charCodeAt(i);
      y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
      if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
        i++;
      }

      /* Encode output as utf-8 */
      if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
    }
    return output;
  },

  /*
   * Encode a string as utf-16
   */
  str2rstr_utf16le: function str2rstr_utf16le(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    }return output;
  },

  str2rstr_utf16be: function str2rstr_utf16be(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    }return output;
  },

  /*
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */

  rstr2binl: function rstr2binl(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++) {
      output[i] = 0;
    }for (var i = 0; i < input.length * 8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
    }return output;
  },

  /*
   * Convert an array of little-endian words to a string
   */
  binl2rstr: function binl2rstr(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
    }return output;
  },

  /*
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   */
  binl_md5: function binl_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;

    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;

      a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = this.safe_add(a, olda);
      b = this.safe_add(b, oldb);
      c = this.safe_add(c, oldc);
      d = this.safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  },

  /*
   * These functions implement the four basic operations the algorithm uses.
   */
  md5_cmn: function md5_cmn(q, a, b, x, s, t) {
    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
  },
  md5_ff: function md5_ff(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5_gg: function md5_gg(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5_hh: function md5_hh(a, b, c, d, x, s, t) {
    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5_ii: function md5_ii(a, b, c, d, x, s, t) {
    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  },

  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */
  safe_add: function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  },

  /*
   * Bitwise rotate a 32-bit number to the left.
   */

  bit_rol: function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

};

/**
 * model基类
 * @function map - 数据映射方法
 * @function _checkEmpty - 检查空值
 * @function _getTypeOfValue - 获取属性类型
 */
var RCModel = function () {
  function RCModel() {
    classCallCheck(this, RCModel);
  }

  createClass(RCModel, [{
    key: 'map',
    value: function map(json) {
      var checkers = this.constructor.__checkers__;
      for (var i in this) {
        if (!this.hasOwnProperty(i)) return;

        if (checkers && checkers[i] && json[i]) {
          // 数据检查类型
          if (checkers[i].type !== this._getTypeOfValue(json[i])) {
            if (process.env.NODE_ENV === 'development') {
              console.warn(this.constructor.name + '\u7684\u5C5E\u6027' + i + '\u4F20\u5165\u53C2\u6570\u7C7B\u578B\u4E0D\u5BF9');
            }
          }
        }
        if (json.hasOwnProperty(i) && json[i] !== undefined) {
          this[i] = json[i];
        }
      }
      return this;
    }
  }, {
    key: '_getTypeOfValue',
    value: function _getTypeOfValue(val) {
      if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
        return Object.prototype.toString.call(val) === '[object Array]' ? 'array' : 'object';
      }
      return typeof val === 'undefined' ? 'undefined' : _typeof(val);
    }
  }, {
    key: '_checkEmpty',
    value: function _checkEmpty(model, key, val) {
      var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
      var warn = function warn() {
        if (process.env.NODE_ENV === 'development') {
          console.warn(model + '\u7684\u5C5E\u6027' + key + '\u503C\u4E0D\u80FD\u4E3A\u7A7A');
        }
      };
      var methods = {
        string: function string() {
          val.replace(/(^\s*)|(\s*$)/g, '') === '' ? warn() : null;
        },
        number: function number() {
          val === undefined || val === null || isNaN(val) ? warn() : null;
        },
        object: function object() {
          !val.length || val.length === 0 ? warn() : null;
        }
      };
      methods[type]();
    }
  }]);
  return RCModel;
}();

/**
 * 检验model的属性
 * @param type - 参数类型
 * @returns {Function}
 * @constructor
 */
function Check(type) {
  return function (target, name, descriptor) {
    // let v = descriptor.initializer && descriptor.initializer.call(this);

    /** 将属性名字以及需要的类型的对应关系记录到类的原型上 */
    if (!target.constructor.__checkers__) {
      // 将这个隐藏属性定义成 not enumerable，遍历的时候是取不到的。
      Object.defineProperty(target.constructor, '__checkers__', {
        value: {},
        enumerable: true,
        writeable: true,
        configurable: true
      });
    }
    target.constructor.__checkers__[name] = {
      type: type
    };

    return _extends({}, descriptor, {
      configurable: true
    });
  };
}

/**
 * 参数类型
 * @type {{String: string, Number: string, Object: string, Array: string}}
 */
var CheckType = {
  String: 'string',
  Number: 'number',
  Object: 'object',
  Array: 'array'
};

var Base64 = require('js-base64').Base64;

export { StringUtils, ArrayUtils, DateUtils, GeneralUtils, JsonUtils, ObjectUtils, StorageUtils, cookie as Cookie, Md5, Base64, RCModel, Check, CheckType };
