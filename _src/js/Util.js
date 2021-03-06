/**
 * Connect
 */

import Promise from 'promise-polyfill';
import CamelCase from 'convert-camelcase';

jQuery.support.cors = true;

let camelCase = new CamelCase;

let Util = {

  net: (dot = '') => {
    if (/^dev\./.test(location.hostname)) {
      return `dev${dot}`;
    } else if (/^(rc\.|rc-)/.test(location.hostname)) {
      return `rc${dot}`;
    } else if (/^opdev/.test(location.hostname)) {
      return `opdev${dot}`;
    } else {
      return '';
    }
  },

  diffDate: (date1, date2) => {
    if (!date1 || !date2) return 0;
    let diff = date2.getTime() - date1.getTime();
    return diff;
  },

  isDate: (val) => {
    var d = new Date(val);
    return !isNaN(d.valueOf());
  },

  get: (url, method = 'get', data) => {
    if (!url) return '';
    return new Promise((resolve, reject) => {
      jQuery.ajax({
        url: url,
        method: method,
        data: data,
        cache: false,
        //xhrFields: {withCredentials: true},
        success: (data) => {
          resolve(data)
        },
        error: (_data) => {
          reject(_data)
        }
      });
    });
  },

  getJsonp: (url, method = 'get', data) => {
    if (!url) return '';
    return new Promise((resolve, reject) => {
      jQuery.ajax({
        url: url,
        method: method,
        data: data,
        dataType: 'jsonp',
        cache: false,
        //xhrFields: {withCredentials: true},
        success: (data) => {
          resolve(data)
        },
        error: (_data) => {
          reject(_data)
        }
      });
    });
  },

  getParams: () => {
    let _vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      _vars[key] = value;
    });
    return _vars;
  },
  confirm: (msg, resolve, reject) => {
    let r = confirm(msg);
    if (r) {
      resolve();
    } else {
      reject();
    }
  },
  hashs: (url) => {
    let vars = {};
    let parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      vars[key] = value;
    });
    return vars;
  },
  getHash: () => {
    let _hash = '';
    if (document.location.hash) {
      _hash = document.location.hash;
      _hash = _hash.replace('#', '');
    }
    return _hash;
  },
  escape: (str) => {
    str = str.replace(/<script>/g, `&lt;script&gt;`);
    str = str.replace(/<\/script>/g, `&lt;/script&gt;`);
    str = str.replace(/<body>/g, `&lt;body&gt;`);
    str = str.replace(/<\/body>/g, `&lt;/body&gt;`);

    // str = str.replace( /</g, `&lt;` );
    // str = str.replace( />/g, `&gt;` );

    return str;
  },

  escapeTag: (str) => {
    str = str.replace(/</g, `&lt;`);
    str = str.replace(/>/g, `&gt;`);
    return str;
  },

  decode: (str) => {
    str = str.replace(/&lt;/g, `<`);
    str = str.replace(/&gt;/g, `>`);

    return str;
  },

  convertCamelCase: (obj) => {
    return camelCase.convert(obj);
  },

  getCookie: (name) => {
    let nameOfCookie = name + '=';
    let endOfCookie = '';
    let x = 0;

    while (x <= document.cookie.length) {
      let y = (x + nameOfCookie.length);
      if (document.cookie.substring(x, y) == nameOfCookie) {
        if ((endOfCookie = document.cookie.indexOf(';', y)) == -1)
          endOfCookie = document.cookie.length;
        return unescape(document.cookie.substring(y, endOfCookie));
      }
      x = document.cookie.indexOf(' ', x) + 1;
      if (x == 0)
        break;
    }
    return '';
  },

  setCookie: (name, value, expiredays = 99999) => {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + '; expires=' + todayDate.toGMTString() + ';'
  },

  isMobile: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints ? true : false;
  }
};

module.exports = Util;