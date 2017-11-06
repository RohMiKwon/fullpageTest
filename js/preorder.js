/**
 * lineagem-preorder
 * @version 1.0.0
 * @update 2017-05-17
 **/
!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=t(14),r=i(o),a=t(21),u=i(a);!function(e,n){var t="lineagem";n[t]||(n[t]={}),n[t].preorder||(n[t].preorder={}),n[t].preorder.Main||(n[t].preorder.Main=r.default),n[t].preorder.Layer||(n[t].preorder.Layer=u.default)}(window.jQuery,window)},,function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=t(3),r=i(o),a=t(7),u=i(a);jQuery.support.cors=!0;var c=new u.default,l={net:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^dev\./.test(location.hostname)?"dev"+e:/^(rc\.|rc-)/.test(location.hostname)?"rc"+e:/^opdev/.test(location.hostname)?"opdev"+e:""},diffDate:function(e,n){if(!e||!n)return 0;var t=n.getTime()-e.getTime();return t},isDate:function(e){var n=new Date(e);return!isNaN(n.valueOf())},get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",t=arguments[2];return e?new r.default(function(i,o){jQuery.ajax({url:e,method:n,data:t,cache:!1,success:function(e){i(e)},error:function(e){o(e)}})}):""},getJsonp:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",t=arguments[2];return e?new r.default(function(i,o){jQuery.ajax({url:e,method:n,data:t,dataType:"jsonp",cache:!1,success:function(e){i(e)},error:function(e){o(e)}})}):""},getParams:function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,t,i){e[t]=i});return e},confirm:function(e){function n(n,t,i){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e,n,t){var i=confirm(e);i?n():t()}),hashs:function(e){var n={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,i){n[t]=i});return n},getHash:function(){var e="";return document.location.hash&&(e=document.location.hash,e=e.replace("#","")),e},escape:function(e){return e=e.replace(/<script>/g,"&lt;script&gt;"),e=e.replace(/<\/script>/g,"&lt;/script&gt;"),e=e.replace(/<body>/g,"&lt;body&gt;"),e=e.replace(/<\/body>/g,"&lt;/body&gt;")},escapeTag:function(e){return e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;")},decode:function(e){return e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">")},convertCamelCase:function(e){return c.convert(e)},getCookie:function(e){for(var n=e+"=",t="",i=0;i<=document.cookie.length;){var o=i+n.length;if(document.cookie.substring(i,o)==n)return(t=document.cookie.indexOf(";",o))==-1&&(t=document.cookie.length),unescape(document.cookie.substring(o,t));if(i=document.cookie.indexOf(" ",i)+1,0==i)break}return""},setCookie:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:99999,i=new Date;i.setDate(i.getDate()+t),document.cookie=e+"="+escape(n)+"; expires="+i.toGMTString()+";"},isMobile:function(){return!!("ontouchstart"in window||navigator.maxTouchPoints)}};e.exports=l},function(e,n,t){(function(n){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i){function o(){}function r(e,n){return function(){e.apply(n,arguments)}}function a(e){if("object"!==t(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void a._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?c:l)(n.promise,e._value);var i;try{i=t(e._value)}catch(e){return void l(n.promise,e)}c(n.promise,i)}))}function c(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"===("undefined"==typeof n?"undefined":t(n))||"function"==typeof n)){var i=n.then;if(n instanceof a)return e._state=3,e._value=n,void s(e);if("function"==typeof i)return void d(r(i,n),e)}e._state=1,e._value=n,s(e)}catch(n){l(e,n)}}function l(e,n){e._state=2,e._value=n,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)u(e,e._deferreds[n]);e._deferreds=null}function f(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function d(e,n){var t=!1;try{e(function(e){t||(t=!0,c(n,e))},function(e){t||(t=!0,l(n,e))})}catch(e){if(t)return;t=!0,l(n,e)}}var h=setTimeout;a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,n){var t=new this.constructor(o);return u(this,new f(e,n,t)),t},a.all=function(e){var n=Array.prototype.slice.call(e);return new a(function(e,i){function o(a,u){try{if(u&&("object"===("undefined"==typeof u?"undefined":t(u))||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(e){o(a,e)},i)}n[a]=u,0===--r&&e(n)}catch(e){i(e)}}if(0===n.length)return e([]);for(var r=n.length,a=0;a<n.length;a++)o(a,n[a])})},a.resolve=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t(e))&&e.constructor===a?e:new a(function(n){n(e)})},a.reject=function(e){return new a(function(n,t){t(e)})},a.race=function(e){return new a(function(n,t){for(var i=0,o=e.length;i<o;i++)e[i].then(n,t)})},a._immediateFn="function"==typeof n&&function(e){n(e)}||function(e){h(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},a._setImmediateFn=function(e){a._immediateFn=e},a._setUnhandledRejectionFn=function(e){a._unhandledRejectionFn=e},"undefined"!=typeof e&&e.exports?e.exports=a:i.Promise||(i.Promise=a)}(void 0)}).call(n,t(4).setImmediate)},function(e,n,t){"use strict";function i(e,n){this._id=e,this._clearFn=n}var o=Function.prototype.apply;n.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},t(5),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},function(e,n,t){(function(e,n){"use strict";!function(e,t){function i(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var i={callback:e,args:n};return v[p]=i,h(p),p++}function o(e){delete v[e]}function r(e){var n=e.callback,i=e.args;switch(i.length){case 0:n();break;case 1:n(i[0]);break;case 2:n(i[0],i[1]);break;case 3:n(i[0],i[1],i[2]);break;default:n.apply(t,i)}}function a(e){if(g)setTimeout(a,0,e);else{var n=v[e];if(n){g=!0;try{r(n)}finally{o(e),g=!1}}}}function u(){h=function(e){n.nextTick(function(){a(e)})}}function c(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}function l(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&a(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),h=function(t){e.postMessage(n+t,"*")}}function s(){var e=new MessageChannel;e.port1.onmessage=function(e){var n=e.data;a(n)},h=function(n){e.port2.postMessage(n)}}function f(){var e=m.documentElement;h=function(n){var t=m.createElement("script");t.onreadystatechange=function(){a(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}function d(){h=function(e){setTimeout(a,0,e)}}if(!e.setImmediate){var h,p=1,v={},g=!1,m=e.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(e);y=y&&y.setTimeout?y:e,"[object process]"==={}.toString.call(e.process)?u():c()?l():e.MessageChannel?s():m&&"onreadystatechange"in m.createElement("script")?f():d(),y.setImmediate=i,y.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof e?void 0:e:self)}).call(n,function(){return this}(),t(6))},function(e,n){"use strict";function t(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===t||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(n){try{return s.call(null,e,0)}catch(n){return s.call(this,e,0)}}}function r(e){if(f===clearTimeout)return clearTimeout(e);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function a(){v&&h&&(v=!1,h.length?p=h.concat(p):g=-1,p.length&&u())}function u(){if(!v){var e=o(a);v=!0;for(var n=p.length;n;){for(h=p,p=[];++g<n;)h&&h[g].run();g=-1,n=p.length}h=null,v=!1,r(e)}}function c(e,n){this.fun=e,this.array=n}function l(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:t}catch(e){s=t}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(e){f=i}}();var h,p=[],v=!1,g=-1;d.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];p.push(new c(e,n)),1!==p.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,n,t){"use strict";n=e.exports=t(8)},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":i(e)},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();n=e.exports=function(){function e(){t(this,e)}return r(e,[{key:"isNumerical",value:function(e){return e-=0,e===e}},{key:"isArray",value:function(e){return e instanceof Array}},{key:"toCamel",value:function(e){return this.isNumerical(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}},{key:"convert",value:function(e){var n=void 0,t=void 0,i=void 0,r=void 0,a=void 0;if(this.isArray(e))for(n=[],t=0,a=e.length;t<a;t++)r=e[t],"object"===("undefined"==typeof r?"undefined":o(r))&&(r=this.convert(r)),n.push(r);else{n={};for(t in e)e.hasOwnProperty(t)&&(i=this.toCamel(t),r=e[t],null!==r&&"object"===("undefined"==typeof r?"undefined":o(r))&&(r=this.convert(r)),n[i]=r)}return n}}]),e}()},,,,,,function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=i(a),c=t(15),l=i(c),s=t(16),f=i(s),d=t(17),h=i(d),p=t(18),v=i(p),g=t(19),m=(i(g),t(20)),y=i(m),b=t(22),w=i(b),k=t(23),C=i(k),T=t(24),_=i(T),S=t(25),E=i(S),M=t(26),P=i(M),x=t(27),j=i(x),I=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.default.bgmovieConfig,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.default,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.default.shareConfig;o(this,e),this.bgmovieConfig=n,this.menuConfig=t,this.shareConfig=i,this.init()}return r(e,[{key:"init",value:function(){var e=l.default.selector;this.loading=new E.default($(e.loading)),this.fullpage=new f.default($(e.fullpageWrap),this.menuConfig),this.menu=new v.default($(e.menuWrap)),this.minigameButton=new w.default($(e.minigameButton)),this.indexLayer=new _.default($(e.navIndex)),this.mediaMovieGallery=new C.default($(e.swiperMedia),{slidesPerView:4}),this.introduceMovieGallery=new C.default($(e.swiperIntroduce),{slidesPerView:3}),this.guildMovieGallery=new C.default($(e.swiperGuild),{slidesPerView:3}),this.modal=new nc.ui.Modal(l.default.youtubeConfig.options),this.preorderShare=new y.default($(e.preorderShare)),this.quickBanner=new P.default($(e.quickBanner)),this.appendShare(),this.addEvent()}},{key:"addEvent",value:function(){var e=this;$('[data-module-id="toggle"]').each(function(e,n){var t=$(n),i=void 0;t.data("toggle-target")&&(i=$(t.data("toggle-target"))),new h.default({target:i,toggleElement:t})}),$('[data-module-id="youtube"]').on("click",function(n){n.preventDefault(),""!=$(n.currentTarget).data("youtube-id")&&(e.modal.setYoutubeUrl(l.default.youtubeConfig.baseUrl+$(n.currentTarget).attr("data-youtube-id")),e.modal.show())}),$(".btn-preorder-guild").on("click",function(e){e.preventDefault(),alert("점검 중입니다.")}),$(window).resize(function(){u.default.isMobile()?$.fn.fullpage.reBuild():($.fn.fullpage.setScrollingSpeed(0),$(".fp-easings").addClass(".fp-no-transitions"),$.fn.fullpage.reBuild(),$.fn.fullpage.setScrollingSpeed(700),$(".fp-easings").removeClass(".fp-no-transitions"))})}},{key:"appendShare",value:function(){var e=this,n=$("#share");n.length&&$(document).on("click","#share a",function(n){return e.callShareClickTrace(n)})}},{key:"callShareClickTrace",value:function(e){var n=$(e.currentTarget).attr("class").replace("share-",""),t=u.default.get("/event/snsShareLog.json","POST",{eventCode:"170516_character",snsName:n});t.then(function(){},function(){})}}]),e}();e.exports=I},function(e,n){"use strict";var t={common:{path:window._path?window._path:"",device:window._device?window._device:"",serverEnv:window._serviceEnv?window._serviceEnv:"",home:window._home?window._home:"",bLogin:!!window.isLoginFlag&&"true"===window.isLoginFlag},selector:{fullpageWrap:"#preorder-main",minigameButton:"#btn-minigame",quickNavi:".quick-nav",bgMovie:"#bg-movie",menuWrap:"#menu-wrap",swiperMedia:"#swiper-media",swiperIntroduce:"#swiper-introduce",swiperGuild:"#swiper-guild",preorderShare:"#preorderShare",loading:".loading-page",quickBanner:"#quick-banner",navIndex:".nav-index"},bgmovieConfig:{pc:{autoplay:!1,poster:"",movieUrl:"https://vod.plaync.com/lineageM/2ndTeaser/LineageM_10s_1920x1080_Continous.mp4",movieWidth:1920,movieHeight:1080},mobile:{autoplay:!1,poster:"",movieUrl:"https://vod.plaync.com/lineageM/2ndTeaser/LineageM_10s_1920x1080_Continous.mp4",movieWidth:1920,movieHeight:1080}},youtubeConfig:{baseUrl:"https://www.youtube.com/embed/",options:{type:"youtube",isEsc:!0,movieParams:"?vq=hd720&autoplay=1&version=3&enablejsapi=1&rel=0",isAutoButton:!0}},shareConfig:{$parent:$("#share"),appver:"1.0",appname:"LineageM",order:["facebook","twitter","kakaostory","kakaotalk"],msg:$("title").text(),description:$('meta[name="description"]').attr("content"),img:"https://wstatic-cdn.plaync.com/lineagem/preorder/img/preorder/meta.jpg",imgWidth:300,imgHeight:157,buttonMsg:"lineagem.plaync.com",url:"https://lineagem.plaync.com/"},swiperMovieGalleryConfig:{slidesPerView:4,spaceBetween:5,pagination:"",paginationClickable:!0,breakpoints:{480:{slidesPerView:1},640:{slidesPerView:2},960:{slidesPerView:3}}}};e.exports=t},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=(i(a),t(15)),c=(i(u),function(){function e(n,t){o(this,e),this.$node=n,this.originMenuConfig=t,this.init()}return r(e,[{key:"init",value:function(){this.$node.fullpage({anchors:this.getMenuIds(),easing:"easeInOut",css3:!0,easingcss3:"cubic-bezier(0.77,0,0.175,1)",scrollingSpeed:1e3,fixedElements:".page-visual",normalScrollElements:".ly-container, .ly-contents",scrollOverflow:!0,controlArrows:!1,navigation:!0,navigationPosition:"left",lazyLoading:!0,verticalCentered:!1,afterRender:this.onAfterRender,afterSlideLoad:this.onAfterSlideLoad,onSlideLeave:this.onSlideLeave}),this.addEvent()}},{key:"getMenuIds",value:function(){var e=this.finedActiveMenuConfig(this.originMenuConfig),n=this.sortActiveMenus(e),t=this.findMenuIds(n);return t}},{key:"finedActiveMenuConfig",value:function(e){return _.where(e,{isActive:"true"})}},{key:"sortActiveMenus",value:function(e){return _.sortBy(e,"order")}},{key:"findMenuIds",value:function(e){return _.pluck(e,"sectionId")}},{key:"addEvent",value:function(){$(".btn-preorder").on("click",function(){$.fn.fullpage.moveTo("preorder",1)}),$(".section-preorder .page-back").on("click",function(){$.fn.fullpage.moveTo("preorder",0)}),$(".section-minigame .page-back").on("click",function(){$.fn.fullpage.moveTo("minigame",0)}),$(".section-guild .page-back").on("click",function(){$.fn.fullpage.moveTo("guild",0)})}},{key:"onSlideLeave",value:function(e,n,t,i,o){"right"==i?($(".page-visual."+e).addClass("active"),$("body").addClass("narrow"),$.fn.fullpage.setAllowScrolling(!1,"down, up"),$.fn.fullpage.setKeyboardScrolling(!1,"down, up")):(setTimeout(function(){$(".page-visual."+e).removeClass("active")},1200),$("body").removeClass("narrow"),$.fn.fullpage.setAllowScrolling(!0,"down, up"),$.fn.fullpage.setKeyboardScrolling(!0,"down, up"))}}]),e}());e.exports=c},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),o=function(){function e(n){t(this,e),this.$toggleElement=n.toggleElement,this.$target=n.target,this.options=$.extend({},this.defaults(),n.options),this.init()}return i(e,[{key:"defaults",value:function(){return{toggleClass:"is-active"}}}]),i(e,[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){this.$toggleElement.on("click",$.proxy(this.onClickToggleElement,this))}},{key:"onClickToggleElement",value:function(e){e.preventDefault();var n=this.options;this.$toggleElement.toggleClass(n.toggleClass),this.$target&&this.$target.toggleClass(n.toggleClass),$.fn.fullpage.reBuild()}}]),e}();e.exports=o},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(15),u=(i(a),function(){function e(n){o(this,e),this.$node=n,this.$swiperMenu=this.$node.find("#swiper-menu"),this.$menu=this.$node.find("#menu"),this.$flipmenu=this.$node.find("#flip-menu"),this.init()}return r(e,[{key:"init",value:function(){this.swiper=new Swiper(this.$swiperMenu,{grabCursor:!0,slidesPerView:3,loop:!0,centeredSlides:!0,onTap:function(e,n){if(e.clickedIndex==e.activeIndex){var t=$(e.clickedSlide).data("section-id");$.fn.fullpage.moveTo(t)}}}),this.addEvent()}},{key:"addEvent",value:function(){this.$menu.on("mouseover",".menu",function(e){$(e.delegateTarget).find("a").removeClass("is-active"),$(e.currentTarget).addClass("is-active")}),this.$flipmenu.on("mouseover",".flip-container",function(e){$(e.delegateTarget).find(".flip-container").removeClass("is-active"),$(e.currentTarget).addClass("is-active")})}}]),e}());e.exports=u},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=i(a),c=t(15),l=i(c),s=function(){function e(n){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.default.bgmovieConfig;o(this,e),this.originConfig=i,this.bgMovie=new ui.ncCanvasMovie(n,this.getConfig()),$(document).on("click","body",function(e){t.bgMovie.play()}),$(this.bgMovie.video).one("canplay",function(){}),this.init()}return r(e,[{key:"init",value:function(){this.addEvent()}},{key:"getConfigByDevice",value:function(){var e=this.originConfig;return u.default.isMobile()?e.mobile:e.pc}},{key:"getConfig",value:function(){return $.extend({},this.getConfigByDevice(),{endedCallback:this.onEndedCallback()})}},{key:"addEvent",value:function(){}},{key:"onEndedCallback",value:function(){}}]),e}();e.exports=s},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=i(a),c=t(15),l=i(c),s=t(21),f=i(s),d=function(){function e(n){o(this,e),this.currentSnsType="",this.bCookies=!1,this.currentSection=$(".page-preorder"),this.init()}return r(e,[{key:"init",value:function(){this.layer=new f.default($("#layerCheckPreorder")),this.loadShareJs(),this.addEvent()}},{key:"addEvent",value:function(){var e=this;$(document).on("click","#preorderShare a",function(n){return e.onShareClick(n)}),$(document).on("click","#layerCheckPreorder .btn-confirm",function(n){return e.checkPreorder(n)}),$(document).on("click","#layerCheckPreorder #btn-gotopreorder",function(n){e.layer.hide(),e.currentSection.find(".fp-scrollable").data("iscrollInstance").scrollTo(0,0,0)})}},{key:"loadShareJs",value:function(){var e=this.setKey(window.location.href),n=function(e,n){var t=document.createElement("script"),i=!1;return t.setAttribute("src",e),t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,i||n&&n(),i=!0)}:t.onload=function(){i||n&&n(),i=!0},document.getElementsByTagName("head")[0].appendChild(t),!1};n("https://developers.kakao.com/sdk/js/kakao.min.js",function(){var n=e;Kakao&&Kakao.init(n)})}},{key:"setKey",value:function(e){return/plat-lego.korea.ncsoft.corp/.test(e)?"1af018ac29fd1c88bf279ca5f999c97f":/ui-static.korea/.test(e)?"b5c5048fcf2c4c8376c7047cf4c6d859":/bns.plaync.co/.test(e)?"7a41aad1eebf7e5b4b68db7204aeb574":/lineage.plaync.co/.test(e)?"cc821832de1815dfefd89696a8328808":/lineagem.plaync.co/.test(e)?"cc821832de1815dfefd89696a8328808":/lineage2.plaync.co/.test(e)?"5c2686ba412a29a8fb2942339184d320":/aion.plaync.co/.test(e)||/aionnew.plaync.co/.test(e)?"6c3e99b13fbec7bc6c4d699de19d8e3a":/event.plaync.co/.test(e)?"938e491a6a7a61dee6ad1293a191d999":/mxm.plaync.co/.test(e)?"40481a2626902d33625a1522661be8b8":/power.plaync.co/.test(e)?"b18b4f83affd1baa323d43cb76ccde55":/fb.plaync.co/.test(e)?"938e491a6a7a61dee6ad1293a191d999":/plaync.co/.test(e)||/asia.nc.com/.test(e)?"787f3aa15494fd0879123c1cce573c9b":"address error"}},{key:"onShareClick",value:function(e){e.preventDefault(),this.setCurrentSnsType(e),this.checkCookies(),this.bCookies===!0?this.processShare(this.getCurrentSnsType()):this.layer.show()}},{key:"checkPreorder",value:function(){var e=this,n=void 0,t=this.layer.getWrapperElement(),i="",o="";return this.checkStore()?(i=t.find("[name=phoneType222]:checked").val(),this.checkPhoneNumber()?(o=t.find("[name=phoneNumberSelect222] option:selected").val()+t.find("[name=phoneNumber222]").val(),this.checkValidPhoneNumber()?(o=t.find("[name=phoneNumberSelect222] option:selected").val()+t.find("[name=phoneNumber222]").val(),n=u.default.get(l.default.common.path+"preorder/preorder/findByPhoneNumber","GET",{phoneType:i,phoneNumber:o}),void n.then(function(n){null==n||""==n?(alert("등록되지 않은 번호입니다.\n사전예약을 진행해주세요."),e.currentSection.find(".fp-scrollable").data("iscrollInstance").scrollTo(0,0,0),e.layer.hide()):(alert("사전예약 완료 확인 되었습니다. 사전예약 소식을 공유해주세요."),e.layer.hide())},function(){alert("잠시 후 이용해주세요.")})):void alert("올바른 휴대폰 번호를 입력해주세요.")):void alert("휴대폰 번호를 입력해주세요.")):void alert("스토어를 선택해주세요.")}},{key:"checkStore",value:function(){return this.layer.getWrapperElement().find("[name=phoneType222]:checked").length>0}},{key:"checkPhoneNumber",value:function(){return""!=this.layer.getWrapperElement().find("[name=phoneNumber222]").val()}},{key:"checkValidPhoneNumber",value:function(){var e=/^[0-9]{7,}$/;return!!e.test(this.layer.getWrapperElement().find("[name=phoneNumber222]").val())}},{key:"checkCookies",value:function(){var e="preOrderRecord_lineagem";u.default.getCookie(e)?this.bCookies=!0:this.bCookies=!1}},{key:"setCurrentSnsType",value:function(e){this.currentSnsType=$(e.currentTarget).attr("class").replace("share-","")}},{key:"getCurrentSnsType",value:function(){return this.currentSnsType}},{key:"processShare",value:function(){var e=l.default.shareConfig;switch(this.getCurrentSnsType()){case"facebook":window.open("https://facebook.com/share.php?u="+e.url,"popShareFacebook","640","500");break;case"twitter":var n=$('meta[name="twitter:title"]').attr("content");window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(n)+e.url,"popShareTwitter","600","500");break;case"kakaotalk":Kakao.Link.sendDefault({objectType:"feed",content:{title:e.appname,description:e.description,imageUrl:e.img,link:{mobileWebUrl:e.url}},buttons:[{title:e.appname,link:{mobileWebUrl:e.url}}]});break;case"kakaostory":window.open("https://story.kakao.com/share?url="+e.url,"popShareKakaoStory","530","700");break;default:return}this.callShareClickTrace()}},{key:"callShareClickTrace",value:function(){var e=void 0;e=u.default.get(l.default.common.path+"preorder/preorder/snsShare.json","POST",{snsName:this.getCurrentSnsType()}),e.then(function(){},function(){})}}]),e}();e.exports=d},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(15),u=(i(a),function(){function e(n){o(this,e),this.$node=n,this.$body=$("body"),this.$close=this.$node.find('[data-close="dismiss"]'),this.init()}return r(e,[{key:"init",value:function(){this.addEvent()}},{key:"addEvent",value:function(){var e=this;this.$close.on("click",function(n){return e.hide(n)})}},{key:"getWrapperElement",value:function(){return this.$node}},{key:"show",value:function(){this.$node.addClass("is-show"),this.$body.addClass("ly-active")}},{key:"hide",value:function(e,n){this.$node.removeClass("is-show"),$("body").removeClass("ly-active"),"undefined"!=typeof n&&n()}}]),e}());e.exports=u},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=i(a),c=t(15),l=i(c),s=function(){function e(n){o(this,e),this.$node=n,this.init()}return r(e,[{key:"init",value:function(){this.addEvent()}},{key:"addEvent",value:function(){var e=this;this.$node.on("click",function(n){return e.onClick(n)})}},{key:"onClick",value:function(e){e.preventDefault();var n=this.getUrl();this.$node.attr("href",n),this.isLogin()?this.display():window.location.href=this.getLoginUrl()}},{key:"isLogin",value:function(){return l.default.common.bLogin}},{key:"getLoginUrl",value:function(){var e=void 0;switch(window.location.host){case"opdev.lineagem.plaync.com":e="http://op.mlogin.plaync.com";break;case"rc-lineagem.plaync.com":e="https://rc-mlogin.plaync.com";break;default:e="https://mlogin.plaync.com"}return e+"/login/signin?return_url="+encodeURIComponent(window.location.href)}},{key:"getUrl",value:function(){var e="rc-lineagem.plaync.com"===window.location.hostname?"rc.lineagem.plaync.com":window.location.hostname,n=("rc-lineagem.plaync.com"===window.location.hostname?"http://":"https://")+e.replace("lineagem.plaync.com","minigame.plaync.com")+"/lineagem/index";return n}},{key:"display",value:function(){var e=this.getUrl();return u.default.isMobile()?(window.location.href=e,!1):void window.open(e,"LineagemMinigamePop","toolbar=0,scrollbars=1,resizable=0,width=600,height=900")}}]),e}();e.exports=s},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=(i(a),t(15)),c=i(u),l=function(){function e(n,t){o(this,e),this.$node=n,this.settings=$.extend({},c.default.swiperMovieGalleryConfig,t),this.$pagination=n.siblings(".swiper-pagination"),this.init()}return r(e,[{key:"init",value:function(){this.setPaginationSettings(),this.swiper=new Swiper(this.$node,this.settings),this.addEvent()}},{key:"addEvent",value:function(){}},{key:"setPaginationSettings",value:function(){var e=this;this.settings=$.extend({},this.settings,{pagination:this.$pagination,onPaginationRendered:function(n){return e.onPaginationRendered(n)}})}},{key:"onPaginationRendered",value:function(e){this.swiper=e,this.changePaginationDisplay()}},{key:"isOnePage",value:function(){return this.swiper.bullets.length<=1}},{key:"changePaginationDisplay",value:function(){this.isOnePage()?this.$pagination.hide():this.$pagination.show()}}]),e}();e.exports=l},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(2),u=(i(a),t(15)),c=(i(u),t(16)),l=(i(c),function(){function e(n){o(this,e),this.$node=n,
this.$layer=this.$node.find(".layer-index"),this.$layerToggle=this.$node.find(".btn-layer-toggle"),this.init()}return r(e,[{key:"init",value:function(){this.addEvent()}},{key:"addEvent",value:function(){var e=this;this.$layerToggle.on("click",function(n){return e.onClickLayerToggleButton(n)}),this.$layer.on("click",function(){return e.onClickLayer()})}},{key:"onClickLayerToggleButton",value:function(e){e.preventDefault();var n=this.$layer,t=this.$layerToggle;t.toggleClass("is-active"),t.hasClass("is-active")?(n.addClass("is-active"),$.fn.fullpage.setAllowScrolling(!1),$.fn.fullpage.setKeyboardScrolling(!1)):(n.removeClass("is-active"),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setKeyboardScrolling(!0))}},{key:"onClickLayer",value:function(){var e=this.$layer,n=this.$layerToggle;n.removeClass("is-active"),e.removeClass("is-active"),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setKeyboardScrolling(!0)}}]),e}());e.exports=l},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(15),u=(i(a),function(){function e(n){o(this,e),this.$node=n,this.init()}return r(e,[{key:"init",value:function(){var e=0,n=0,t=setInterval(function(){$(".loading-page .counter h1").html(n+"%"),$(".loading-page .counter hr").css("width",n+"%"),e++,n++,101==e&&(clearInterval(t),$(".loading-page").hide())},16);this.addEvent()}},{key:"addEvent",value:function(){}}]),e}());e.exports=u},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=t(15),u=(i(a),t(2)),c=i(u),l=function(){function e(n){o(this,e),this.$node=n,this.$close=this.$node.find('[data-close="dismiss"]'),this.init()}return r(e,[{key:"init",value:function(){this.setCookieName(),this.process(),this.addEvent()}},{key:"addEvent",value:function(){var e=this;this.$close.on("click",function(n){return e.onClick(n)})}},{key:"setCookieName",value:function(){this.cookiePrefix="prederorder_banner",this.cookieValue=this.$node.data("cookie-value"),this.cookieName=this.cookiePrefix+"_"+this.cookieValue}},{key:"process",value:function(){c.default.getCookie(this.cookieName)?this.hide():this.show()}},{key:"onClick",value:function(){c.default.setCookie(this.cookieName,this.cookieValue,1),this.hide()}},{key:"show",value:function(){this.$node.addClass("is-active")}},{key:"hide",value:function(){this.$node.removeClass("is-active")}}]),e}();e.exports=l},function(e,n){"use strict";var t=[{sectionId:"preorder",isActive:"true",order:"1"},{sectionId:"temp",isActive:"",order:"2"},{sectionId:"temp",isActive:"",order:"3"},{sectionId:"temp",isActive:"",order:"4"},{sectionId:"media",isActive:"true",order:"5"},{sectionId:"introduce",isActive:"true",order:"6"},{sectionId:"footer",isActive:"true",order:"99"}];e.exports=t}]);