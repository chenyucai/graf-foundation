function uuid(len, radix) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uid = [];
  let i;
  if (len) {
    radix = radix || chars.length;
    for (i = 0; i < len; i++) {
      uid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    let r;
    uid[8] = uid[13] = uid[18] = uid[23] = '-';
    uid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uid[i]) {
        r = 0 | Math.random() * 16;
        uid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
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
  const download = {};
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
    let iframe = document.createElement('iframe');
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

export default {
  uuid,
  getKeyOfPair,
  getValueOfPair,
  downloadFile,
  getClientWidth,
  getClientHeight,
  setPageTitle,
  createObjectURL
}
