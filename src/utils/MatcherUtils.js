function isPhone(str) {
  const pattern = /^1[3-9]\d{9}$/;
  return pattern.test(str);
}

function isIdCard(str) {
  const pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)|(^\d{15}$)/;
  return pattern.test(str);
}

function isHan(str) {
  const pattern = /^[\u4e00-\u9fa5]{0,}$/;
  return pattern.test(str);
}

function isAge(str) {
  const pattern = /^[0-9]+$/;
  if (!pattern.test(str)) {
    return false;
  }
  let age = parseInt(str);
  if (age < 0 || age > 150) {
    return false;
  }
  return true;
};

function isEnOrNumber(str) {
  const pattern = /^[A-Za-z0-9]+$/;
  return pattern.test(str);
}

function isEmoji(substring) {
  /* eslint-disable yoda */
  for (let i = 0; i < substring.length; i++) {
    let hs = substring.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (substring.length > 1) {
        let ls = substring.charCodeAt(i + 1);
        let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      let ls = substring.charCodeAt(i + 1);
      if (ls === 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2B05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030 || hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b || hs === 0x2b50) {
        return true;
      }
    }
  }
}

export default {
  isPhone,
  isIdCard,
  isHan,
  isAge,
  isEnOrNumber,
  isEmoji
}
