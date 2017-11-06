/**
 * lineagem-preorder
 * @version 1.0.0
 * @update 2017-11-06
 **/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Main = __webpack_require__(1);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Layer = __webpack_require__(19);
	
	var _Layer2 = _interopRequireDefault(_Layer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * App
	 */
	(function ($, window) {
	  'use strict';
	
	  var namespace = 'helloworld';
	
	  if (!window[namespace]) window[namespace] = {};
	
	  if (!window[namespace].Main) window[namespace].Main = _Main2.default;
	
	  if (!window[namespace].Layer) window[namespace].Layer = _Layer2.default;
	})(window.jQuery, window);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */
	
	//import MovieDecorator from './MovieDecorator';
	//import PreorderShare from './PreorderShare';
	
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Fullpage = __webpack_require__(10);
	
	var _Fullpage2 = _interopRequireDefault(_Fullpage);
	
	var _Toggle = __webpack_require__(11);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Menu = __webpack_require__(12);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MinigameButton = __webpack_require__(13);
	
	var _MinigameButton2 = _interopRequireDefault(_MinigameButton);
	
	var _SwiperMovieGallery = __webpack_require__(14);
	
	var _SwiperMovieGallery2 = _interopRequireDefault(_SwiperMovieGallery);
	
	var _IndexLayer = __webpack_require__(15);
	
	var _IndexLayer2 = _interopRequireDefault(_IndexLayer);
	
	var _Loading = __webpack_require__(16);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _QuickBanner = __webpack_require__(17);
	
	var _QuickBanner2 = _interopRequireDefault(_QuickBanner);
	
	var _MenuConfig = __webpack_require__(18);
	
	var _MenuConfig2 = _interopRequireDefault(_MenuConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Main = function () {
		function Main() {
			var bgmovieConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Config2.default.bgmovieConfig;
			var menuConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MenuConfig2.default;
			var shareConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Config2.default.shareConfig;
	
			_classCallCheck(this, Main);
	
			this.bgmovieConfig = bgmovieConfig;
			this.menuConfig = menuConfig;
			this.shareConfig = shareConfig;
	
			this.init();
		}
	
		_createClass(Main, [{
			key: 'init',
			value: function init() {
				var selector = _Config2.default.selector;
	
				this.loading = new _Loading2.default($(selector.loading));
	
				//this.bgMovieDecorator = new MovieDecorator($(selector.bgMovie), this.bgmovieConfig);
	
				this.fullpage = new _Fullpage2.default($(selector.fullpageWrap), this.menuConfig);
				this.menu = new _Menu2.default($(selector.menuWrap));
				this.minigameButton = new _MinigameButton2.default($(selector.minigameButton));
	
				this.indexLayer = new _IndexLayer2.default($(selector.navIndex));
	
				this.mediaMovieGallery = new _SwiperMovieGallery2.default($(selector.swiperMedia), {
					slidesPerView: 4
				});
	
				this.introduceMovieGallery = new _SwiperMovieGallery2.default($(selector.swiperIntroduce), {
					slidesPerView: 3
				});
	
				this.guildMovieGallery = new _SwiperMovieGallery2.default($(selector.swiperGuild), {
					slidesPerView: 3
				});
	
				//this.modal = new nc.ui.Modal(Config.youtubeConfig.options);
	
				//this.preorderShare = new PreorderShare($(selector.preorderShare));
	
				this.quickBanner = new _QuickBanner2.default($(selector.quickBanner));
	
				this.appendShare();
				this.addEvent();
			}
		}, {
			key: 'addEvent',
			value: function addEvent() {
				var _this = this;
	
				$('[data-module-id="toggle"]').each(function (index, element) {
					var $toggleElement = $(element),
					    $target = void 0;
	
					if ($toggleElement.data('toggle-target')) {
						$target = $($toggleElement.data('toggle-target'));
					}
	
					new _Toggle2.default({
						target: $target,
						toggleElement: $toggleElement
					});
				});
	
				$('[data-module-id="youtube"]').on('click', function (e) {
					e.preventDefault();
					if ($(e.currentTarget).data('youtube-id') == '') return;
	
					_this.modal.setYoutubeUrl(_Config2.default.youtubeConfig.baseUrl + $(e.currentTarget).attr('data-youtube-id'));
					_this.modal.show();
				});
	
				//when resizing the site, we adjust the heights of the sections, slimScroll...
				$(window).resize(function () {
					// rebuild immediately on touch devices
					if (_Util2.default.isMobile()) {
						$.fn.fullpage.reBuild();
					} else {
						$.fn.fullpage.setScrollingSpeed(0);
						$('.fp-easings').addClass('.fp-no-transitions');
						$.fn.fullpage.reBuild();
						$.fn.fullpage.setScrollingSpeed(700); //default one
						$('.fp-easings').removeClass('.fp-no-transitions');
					}
				});
			}
		}, {
			key: 'appendShare',
			value: function appendShare() {
				var _this2 = this;
	
				var $share = $('#share');
	
				if (!$share.length) return;
	
				$(document).on('click', '#share a', function (e) {
					return _this2.callShareClickTrace(e);
				});
			}
		}, {
			key: 'callShareClickTrace',
			value: function callShareClickTrace(e) {
				var currentSnsType = $(e.currentTarget).attr('class').replace('share-', ''),
				    proxy = _Util2.default.get('/event/snsShareLog.json', 'POST', { eventCode: '170516_character', snsName: currentSnsType });
	
				proxy.then(function () {
					//console.log('callShareClickTrace done');
				}, function () {
					//console.log('callShareClickTrace fail');
				});
			}
		}]);
	
		return Main;
	}();
	
	;
	
	module.exports = Main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promisePolyfill = __webpack_require__(3);
	
	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
	
	var _convertCamelcase = __webpack_require__(7);
	
	var _convertCamelcase2 = _interopRequireDefault(_convertCamelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Connect
	 */
	
	jQuery.support.cors = true;
	
	var camelCase = new _convertCamelcase2.default();
	
	var Util = {
	
	  net: function net() {
	    var dot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	    if (/^dev\./.test(location.hostname)) {
	      return 'dev' + dot;
	    } else if (/^(rc\.|rc-)/.test(location.hostname)) {
	      return 'rc' + dot;
	    } else if (/^opdev/.test(location.hostname)) {
	      return 'opdev' + dot;
	    } else {
	      return '';
	    }
	  },
	
	  diffDate: function diffDate(date1, date2) {
	    if (!date1 || !date2) return 0;
	    var diff = date2.getTime() - date1.getTime();
	    return diff;
	  },
	
	  isDate: function isDate(val) {
	    var d = new Date(val);
	    return !isNaN(d.valueOf());
	  },
	
	  get: function get(url) {
	    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	    var data = arguments[2];
	
	    if (!url) return '';
	    return new _promisePolyfill2.default(function (resolve, reject) {
	      jQuery.ajax({
	        url: url,
	        method: method,
	        data: data,
	        cache: false,
	        //xhrFields: {withCredentials: true},
	        success: function success(data) {
	          resolve(data);
	        },
	        error: function error(_data) {
	          reject(_data);
	        }
	      });
	    });
	  },
	
	  getJsonp: function getJsonp(url) {
	    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	    var data = arguments[2];
	
	    if (!url) return '';
	    return new _promisePolyfill2.default(function (resolve, reject) {
	      jQuery.ajax({
	        url: url,
	        method: method,
	        data: data,
	        dataType: 'jsonp',
	        cache: false,
	        //xhrFields: {withCredentials: true},
	        success: function success(data) {
	          resolve(data);
	        },
	        error: function error(_data) {
	          reject(_data);
	        }
	      });
	    });
	  },
	
	  getParams: function getParams() {
	    var _vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	      _vars[key] = value;
	    });
	    return _vars;
	  },
	  confirm: function (_confirm) {
	    function confirm(_x4, _x5, _x6) {
	      return _confirm.apply(this, arguments);
	    }
	
	    confirm.toString = function () {
	      return _confirm.toString();
	    };
	
	    return confirm;
	  }(function (msg, resolve, reject) {
	    var r = confirm(msg);
	    if (r) {
	      resolve();
	    } else {
	      reject();
	    }
	  }),
	  hashs: function hashs(url) {
	    var vars = {};
	    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	      vars[key] = value;
	    });
	    return vars;
	  },
	  getHash: function getHash() {
	    var _hash = '';
	    if (document.location.hash) {
	      _hash = document.location.hash;
	      _hash = _hash.replace('#', '');
	    }
	    return _hash;
	  },
	  escape: function escape(str) {
	    str = str.replace(/<script>/g, '&lt;script&gt;');
	    str = str.replace(/<\/script>/g, '&lt;/script&gt;');
	    str = str.replace(/<body>/g, '&lt;body&gt;');
	    str = str.replace(/<\/body>/g, '&lt;/body&gt;');
	
	    // str = str.replace( /</g, `&lt;` );
	    // str = str.replace( />/g, `&gt;` );
	
	    return str;
	  },
	
	  escapeTag: function escapeTag(str) {
	    str = str.replace(/</g, '&lt;');
	    str = str.replace(/>/g, '&gt;');
	    return str;
	  },
	
	  decode: function decode(str) {
	    str = str.replace(/&lt;/g, '<');
	    str = str.replace(/&gt;/g, '>');
	
	    return str;
	  },
	
	  convertCamelCase: function convertCamelCase(obj) {
	    return camelCase.convert(obj);
	  },
	
	  getCookie: function getCookie(name) {
	    var nameOfCookie = name + '=';
	    var endOfCookie = '';
	    var x = 0;
	
	    while (x <= document.cookie.length) {
	      var y = x + nameOfCookie.length;
	      if (document.cookie.substring(x, y) == nameOfCookie) {
	        if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) endOfCookie = document.cookie.length;
	        return unescape(document.cookie.substring(y, endOfCookie));
	      }
	      x = document.cookie.indexOf(' ', x) + 1;
	      if (x == 0) break;
	    }
	    return '';
	  },
	
	  setCookie: function setCookie(name, value) {
	    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 99999;
	
	    var todayDate = new Date();
	    todayDate.setDate(todayDate.getDate() + expiredays);
	    document.cookie = name + '=' + escape(value) + '; expires=' + todayDate.toGMTString() + ';';
	  },
	
	  isMobile: function isMobile() {
	    return 'ontouchstart' in window || navigator.maxTouchPoints ? true : false;
	  }
	};
	
	module.exports = Util;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {}
	
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function () {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new this.constructor(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);
	
	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
	    setImmediate(fn);
	  } || function (fn) {
	    setTimeoutFunc(fn, 0);
	  };
	
	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };
	
	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };
	
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(5);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	
	(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(8);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	/*
	 * js-observer - lib/Camelize.js
	 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
	 */
	
	exports = module.exports = function () {
	    function Camelize() {
	        _classCallCheck(this, Camelize);
	    }
	
	    _createClass(Camelize, [{
	        key: 'isNumerical',
	        value: function isNumerical(obj) {
	            obj = obj - 0;
	            return obj === obj;
	        }
	    }, {
	        key: 'isArray',
	        value: function isArray(obj) {
	            return obj instanceof Array;
	        }
	    }, {
	        key: 'toCamel',
	        value: function toCamel(string) {
	            if (this.isNumerical(string)) {
	                return string;
	            }
	
	            string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	                return chr ? chr.toUpperCase() : '';
	            });
	
	            return string.substr(0, 1).toLowerCase() + string.substr(1);
	        }
	    }, {
	        key: 'convert',
	        value: function convert(obj) {
	            var _tmp = void 0,
	                _item = void 0,
	                _key = void 0,
	                _value = void 0,
	                _len = void 0;
	
	            //isArray?
	            if (this.isArray(obj)) {
	                _tmp = [];
	
	                for (_item = 0, _len = obj.length; _item < _len; _item++) {
	
	                    _value = obj[_item];
	
	                    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);
	
	                    _tmp.push(_value);
	                }
	
	                //isObject?
	            } else {
	                _tmp = {};
	                for (_item in obj) {
	                    if (obj.hasOwnProperty(_item)) {
	                        _key = this.toCamel(_item);
	                        _value = obj[_item];
	                        if (_value !== null && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);
	
	                        _tmp[_key] = _value;
	                    }
	                }
	            }
	
	            return _tmp;
	        }
	    }]);
	
	    return Camelize;
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	var Config = {
	  common: {
	    path: window._path ? window._path : '',
	    device: window._device ? window._device : '',
	    serverEnv: window._serviceEnv ? window._serviceEnv : '',
	    home: window._home ? window._home : '',
	    bLogin: window.isLoginFlag ? window.isLoginFlag === 'true' : false
	  },
	
	  selector: {
	    fullpageWrap: '#preorder-main',
	    minigameButton: '#btn-minigame',
	    quickNavi: '.quick-nav',
	    bgMovie: '#bg-movie',
	    menuWrap: '#menu-wrap',
	    swiperMedia: '#swiper-media',
	    swiperIntroduce: '#swiper-introduce',
	    swiperGuild: '#swiper-guild',
	    preorderShare: '#preorderShare',
	    loading: '.loading-page',
	    quickBanner: '#quick-banner',
	    navIndex: '.nav-index'
	  },
	
	  bgmovieConfig: {
	    pc: {
	      autoplay: false,
	      poster: '',
	      movieUrl: '',
	      movieWidth: 1920,
	      movieHeight: 1080
	    },
	    mobile: {
	      autoplay: false,
	      poster: '',
	      movieUrl: '',
	      movieWidth: 1920,
	      movieHeight: 1080
	    }
	  },
	
	  youtubeConfig: {
	    baseUrl: 'https://www.youtube.com/embed/',
	    options: {
	      type: 'youtube',
	      isEsc: true,
	      movieParams: '?vq=hd720&autoplay=1&version=3&enablejsapi=1&rel=0',
	      isAutoButton: true
	    }
	  },
	
	  shareConfig: {
	    $parent: $('#share'),
	    appver: '1.0',
	    appname: '',
	    order: ['facebook', 'twitter', 'kakaostory', 'kakaotalk'],
	    msg: $('title').text(),
	    description: $('meta[name="description"]').attr('content'),
	    img: '',
	    imgWidth: 300,
	    imgHeight: 157,
	    buttonMsg: '',
	    url: ''
	  },
	
	  swiperMovieGalleryConfig: {
	    slidesPerView: 4,
	    spaceBetween: 5,
	    pagination: '',
	    paginationClickable: true,
	    breakpoints: {
	      480: {
	        slidesPerView: 1
	      },
	      640: {
	        slidesPerView: 2
	      },
	      960: {
	        slidesPerView: 3
	      }
	    }
	  }
	};
	
	module.exports = Config;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fullpage
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Fullpage = function () {
	  function Fullpage($node, originMenuConfig) {
	    _classCallCheck(this, Fullpage);
	
	    this.$node = $node;
	    this.originMenuConfig = originMenuConfig;
	    this.init();
	  }
	
	  _createClass(Fullpage, [{
	    key: 'init',
	    value: function init() {
	      this.$node.fullpage({
	        anchors: this.getMenuIds(),
	        easing: 'easeInOut',
	        css3: true,
	        easingcss3: 'cubic-bezier(0.77,0,0.175,1)',
	        scrollingSpeed: 1000,
	        fixedElements: '.page-visual',
	        normalScrollElements: '.ly-container, .ly-contents',
	        scrollOverflow: true,
	        controlArrows: false,
	        navigation: true,
	        navigationPosition: 'left',
	        lazyLoading: true,
	        verticalCentered: false,
	        afterRender: this.onAfterRender,
	        afterSlideLoad: this.onAfterSlideLoad,
	        onSlideLeave: this.onSlideLeave
	      });
	
	      this.addEvent();
	    }
	  }, {
	    key: 'getMenuIds',
	    value: function getMenuIds() {
	      var activeMenuConfig = this.finedActiveMenuConfig(this.originMenuConfig),
	          sortedActiveMenus = this.sortActiveMenus(activeMenuConfig),
	          menuIds = this.findMenuIds(sortedActiveMenus);
	
	      return menuIds;
	    }
	  }, {
	    key: 'finedActiveMenuConfig',
	    value: function finedActiveMenuConfig(list) {
	      return _.where(list, {
	        'isActive': 'true'
	      });
	    }
	  }, {
	    key: 'sortActiveMenus',
	    value: function sortActiveMenus(list) {
	      return _.sortBy(list, 'order');
	    }
	  }, {
	    key: 'findMenuIds',
	    value: function findMenuIds(list) {
	      return _.pluck(list, 'sectionId');
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      $('.btn-preorder').on('click', function () {
	        $.fn.fullpage.moveTo('preorder', 1);
	      });
	
	      $('.section-preorder .page-back').on('click', function () {
	        $.fn.fullpage.moveTo('preorder', 0);
	      });
	
	      $('.section-minigame .page-back').on('click', function () {
	        $.fn.fullpage.moveTo('minigame', 0);
	      });
	
	      $('.section-guild .page-back').on('click', function () {
	        $.fn.fullpage.moveTo('guild', 0);
	      });
	    }
	  }, {
	    key: 'onSlideLeave',
	    value: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
	      if (direction == 'right') {
	        $('.page-visual.' + anchorLink).addClass('active');
	
	        $('body').addClass('narrow');
	
	        $.fn.fullpage.setAllowScrolling(false, 'down, up');
	        $.fn.fullpage.setKeyboardScrolling(false, 'down, up');
	      } else {
	        setTimeout(function () {
	          $('.page-visual.' + anchorLink).removeClass('active');
	        }, 1200);
	
	        $('body').removeClass('narrow');
	
	        $.fn.fullpage.setAllowScrolling(true, 'down, up');
	        $.fn.fullpage.setKeyboardScrolling(true, 'down, up');
	      }
	    }
	  }]);
	
	  return Fullpage;
	}();
	
	;
	
	module.exports = Fullpage;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Toggle
	 */
	
	var Toggle = function () {
	  _createClass(Toggle, [{
	    key: 'defaults',
	    value: function defaults() {
	      return {
	        toggleClass: 'is-active'
	      };
	    }
	  }]);
	
	  function Toggle(settings) {
	    _classCallCheck(this, Toggle);
	
	    this.$toggleElement = settings.toggleElement;
	    this.$target = settings.target;
	    this.options = $.extend({}, this.defaults(), settings.options);
	
	    this.init();
	  }
	
	  _createClass(Toggle, [{
	    key: 'init',
	    value: function init() {
	
	      this.bindEvents();
	    }
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      this.$toggleElement.on('click', $.proxy(this.onClickToggleElement, this));
	    }
	  }, {
	    key: 'onClickToggleElement',
	    value: function onClickToggleElement(e) {
	      e.preventDefault();
	
	      var options = this.options;
	      this.$toggleElement.toggleClass(options.toggleClass);
	
	      if (this.$target) {
	        this.$target.toggleClass(options.toggleClass);
	      }
	
	      $.fn.fullpage.reBuild();
	    }
	  }]);
	
	  return Toggle;
	}();
	
	;
	
	module.exports = Toggle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	  function Menu($node) {
	    _classCallCheck(this, Menu);
	
	    this.$node = $node;
	    this.$swiperMenu = this.$node.find('#swiper-menu');
	    this.$menu = this.$node.find('#menu');
	    this.$flipmenu = this.$node.find('#flip-menu');
	    this.init();
	  }
	
	  _createClass(Menu, [{
	    key: 'init',
	    value: function init() {
	      this.swiper = new Swiper(this.$swiperMenu, {
	        grabCursor: true,
	        slidesPerView: 3,
	        loop: true,
	        centeredSlides: true,
	        onTap: function onTap(swiper, e) {
	          if (swiper.clickedIndex == swiper.activeIndex) {
	            var sectionId = $(swiper.clickedSlide).data('section-id');
	
	            $.fn.fullpage.moveTo(sectionId);
	          }
	        }
	      });
	
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      this.$menu.on('mouseover', '.menu', function (e) {
	        $(e.delegateTarget).find('a').removeClass('is-active');
	        $(e.currentTarget).addClass('is-active');
	      });
	
	      this.$flipmenu.on('mouseover', '.flip-container', function (e) {
	        $(e.delegateTarget).find('.flip-container').removeClass('is-active');
	        $(e.currentTarget).addClass('is-active');
	      });
	    }
	  }]);
	
	  return Menu;
	}();
	
	;
	
	module.exports = Menu;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MinigameButton
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MinigameButton = function () {
	  function MinigameButton($node) {
	    _classCallCheck(this, MinigameButton);
	
	    this.$node = $node;
	
	    this.init();
	  }
	
	  _createClass(MinigameButton, [{
	    key: 'init',
	    value: function init() {
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      var _this = this;
	
	      this.$node.on('click', function (e) {
	        return _this.onClick(e);
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      e.preventDefault();
	
	      var url = this.getUrl();
	
	      this.$node.attr('href', url);
	
	      if (this.isLogin()) {
	        this.display();
	      } else {
	        window.location.href = this.getLoginUrl();
	      }
	    }
	  }, {
	    key: 'isLogin',
	    value: function isLogin() {
	      return _Config2.default.common.bLogin;
	    }
	  }, {
	    key: 'getLoginUrl',
	    value: function getLoginUrl() {
	      var domain = void 0;
	
	      switch (window.location.host) {
	        case 'opdev.lineagem.plaync.com':
	          domain = 'http://op.mlogin.plaync.com';
	          break;
	        case 'rc-lineagem.plaync.com':
	          domain = 'https://rc-mlogin.plaync.com';
	          break;
	        default:
	          domain = 'https://mlogin.plaync.com';
	          break;
	      }
	
	      return domain + '/login/signin?return_url=' + encodeURIComponent(window.location.href);
	    }
	  }, {
	    key: 'getUrl',
	    value: function getUrl() {
	      var domain = window.location.hostname === 'rc-lineagem.plaync.com' ? 'rc.lineagem.plaync.com' : window.location.hostname,
	          url = (window.location.hostname === 'rc-lineagem.plaync.com' ? 'http://' : 'https://') + domain.replace('lineagem.plaync.com', 'minigame.plaync.com') + '/lineagem/index';
	
	      return url;
	    }
	  }, {
	    key: 'display',
	    value: function display() {
	      var url = this.getUrl();
	
	      if (_Util2.default.isMobile()) {
	        window.location.href = url;
	        return false;
	      } else {
	        window.open(url, 'LineagemMinigamePop', 'toolbar=0,scrollbars=1,resizable=0,width=600,height=900');
	      }
	    }
	  }]);
	
	  return MinigameButton;
	}();
	
	;
	
	module.exports = MinigameButton;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Media
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SwiperMovieGallery = function () {
	  function SwiperMovieGallery($node, options) {
	    _classCallCheck(this, SwiperMovieGallery);
	
	    this.$node = $node;
	    this.settings = $.extend({}, _Config2.default.swiperMovieGalleryConfig, options);
	    this.$pagination = $node.siblings('.swiper-pagination');
	    this.init();
	  }
	
	  _createClass(SwiperMovieGallery, [{
	    key: 'init',
	    value: function init() {
	      this.setPaginationSettings();
	      this.swiper = new Swiper(this.$node, this.settings);
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {}
	  }, {
	    key: 'setPaginationSettings',
	    value: function setPaginationSettings() {
	      var _this = this;
	
	      this.settings = $.extend({}, this.settings, {
	        pagination: this.$pagination,
	        onPaginationRendered: function onPaginationRendered(swiper) {
	          return _this.onPaginationRendered(swiper);
	        }
	      });
	    }
	  }, {
	    key: 'onPaginationRendered',
	    value: function onPaginationRendered(swiper) {
	      this.swiper = swiper;
	      this.changePaginationDisplay();
	    }
	  }, {
	    key: 'isOnePage',
	    value: function isOnePage() {
	      return this.swiper.bullets.length <= 1;
	    }
	  }, {
	    key: 'changePaginationDisplay',
	    value: function changePaginationDisplay() {
	      if (this.isOnePage()) {
	        this.$pagination.hide();
	      } else {
	        this.$pagination.show();
	      }
	    }
	  }]);
	
	  return SwiperMovieGallery;
	}();
	
	;
	
	module.exports = SwiperMovieGallery;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IndexLayer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Fullpage = __webpack_require__(10);
	
	var _Fullpage2 = _interopRequireDefault(_Fullpage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IndexLayer = function () {
	  function IndexLayer($node) {
	    _classCallCheck(this, IndexLayer);
	
	    this.$node = $node;
	    this.$layer = this.$node.find('.layer-index');
	    this.$layerToggle = this.$node.find('.btn-layer-toggle');
	
	    this.init();
	  }
	
	  _createClass(IndexLayer, [{
	    key: 'init',
	    value: function init() {
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      var _this = this;
	
	      this.$layerToggle.on('click', function (e) {
	        return _this.onClickLayerToggleButton(e);
	      });
	      this.$layer.on('click', function () {
	        return _this.onClickLayer();
	      });
	    }
	  }, {
	    key: 'onClickLayerToggleButton',
	    value: function onClickLayerToggleButton(e) {
	      e.preventDefault();
	      var $layer = this.$layer,
	          $layerToggle = this.$layerToggle;
	
	      $layerToggle.toggleClass('is-active');
	
	      if ($layerToggle.hasClass('is-active')) {
	        $layer.addClass('is-active');
	
	        $.fn.fullpage.setAllowScrolling(false);
	        $.fn.fullpage.setKeyboardScrolling(false);
	      } else {
	        $layer.removeClass('is-active');
	
	        $.fn.fullpage.setAllowScrolling(true);
	        $.fn.fullpage.setKeyboardScrolling(true);
	      }
	    }
	  }, {
	    key: 'onClickLayer',
	    value: function onClickLayer() {
	      var $layer = this.$layer,
	          $layerToggle = this.$layerToggle;
	
	      $layerToggle.removeClass('is-active');
	      $layer.removeClass('is-active');
	
	      $.fn.fullpage.setAllowScrolling(true);
	      $.fn.fullpage.setKeyboardScrolling(true);
	    }
	  }]);
	
	  return IndexLayer;
	}();
	
	;
	
	module.exports = IndexLayer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Loading
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Loading = function () {
	  function Loading($node) {
	    _classCallCheck(this, Loading);
	
	    this.$node = $node;
	    this.init();
	  }
	
	  _createClass(Loading, [{
	    key: "init",
	    value: function init() {
	      var counter = 0;
	      var c = 0;
	
	      var i = setInterval(function () {
	
	        $(".loading-page .counter h1").html(c + "%");
	        $(".loading-page .counter hr").css("width", c + "%");
	
	        counter++;
	        c++;
	
	        if (counter == 101) {
	          clearInterval(i);
	
	          $(".loading-page").hide();
	        }
	      }, 16);
	
	      this.addEvent();
	    }
	  }, {
	    key: "addEvent",
	    value: function addEvent() {}
	  }]);
	
	  return Loading;
	}();
	
	;
	
	module.exports = Loading;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * QuickBanner
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var QuickBanner = function () {
	  function QuickBanner($node) {
	    _classCallCheck(this, QuickBanner);
	
	    this.$node = $node;
	    this.$close = this.$node.find('[data-close="dismiss"]');
	    this.init();
	  }
	
	  _createClass(QuickBanner, [{
	    key: 'init',
	    value: function init() {
	      this.setCookieName();
	      this.process();
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      var _this = this;
	
	      this.$close.on('click', function (e) {
	        return _this.onClick(e);
	      });
	    }
	  }, {
	    key: 'setCookieName',
	    value: function setCookieName() {
	      this.cookiePrefix = "prederorder_banner";
	      this.cookieValue = this.$node.data('cookie-value');
	      this.cookieName = this.cookiePrefix + '_' + this.cookieValue;
	    }
	  }, {
	    key: 'process',
	    value: function process() {
	      if (_Util2.default.getCookie(this.cookieName)) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      _Util2.default.setCookie(this.cookieName, this.cookieValue, 1);
	      this.hide();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.$node.addClass('is-active');
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.$node.removeClass('is-active');
	    }
	  }]);
	
	  return QuickBanner;
	}();
	
	;
	
	module.exports = QuickBanner;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	var MenuConfig = [{
	  'sectionId': 'preorder',
	  'isActive': 'true',
	  'order': '1'
	}, {
	  'sectionId': 'temp',
	  'isActive': '',
	  'order': '2'
	}, {
	  'sectionId': 'temp',
	  'isActive': '',
	  'order': '3'
	}, {
	  'sectionId': 'temp',
	  'isActive': '',
	  'order': '4'
	}, {
	  'sectionId': 'media',
	  'isActive': 'true',
	  'order': '5'
	}, {
	  'sectionId': 'introduce',
	  'isActive': 'true',
	  'order': '6'
	}, {
	  'sectionId': 'footer',
	  'isActive': 'true',
	  'order': '99'
	
	}];
	
	module.exports = MenuConfig;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Layer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Config = __webpack_require__(9);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layer = function () {
	  function Layer($node) {
	    _classCallCheck(this, Layer);
	
	    this.$node = $node;
	    this.$body = $('body');
	    this.$close = this.$node.find('[data-close="dismiss"]');
	    this.init();
	  }
	
	  _createClass(Layer, [{
	    key: 'init',
	    value: function init() {
	      this.addEvent();
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent() {
	      var _this = this;
	
	      this.$close.on('click', function (e) {
	        return _this.hide(e);
	      });
	    }
	  }, {
	    key: 'getWrapperElement',
	    value: function getWrapperElement() {
	      return this.$node;
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.$node.addClass('is-show');
	      this.$body.addClass('ly-active');
	    }
	  }, {
	    key: 'hide',
	    value: function hide(e, cb) {
	      this.$node.removeClass('is-show');
	      $('body').removeClass('ly-active');
	
	      if (typeof cb != 'undefined') {
	        cb();
	      }
	    }
	  }]);
	
	  return Layer;
	}();
	
	;
	
	module.exports = Layer;

/***/ })
/******/ ]);
//# sourceMappingURL=preorder.dev.js.map