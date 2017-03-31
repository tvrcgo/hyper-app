!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("mobx"),require("react-dom"),require("react-router"),require("mobx-react")):"function"==typeof define&&define.amd?define(["react","mobx","react-dom","react-router","mobx-react"],t):"object"==typeof exports?exports.arcjs=t(require("react"),require("mobx"),require("react-dom"),require("react-router"),require("mobx-react")):e.arcjs=t(e.React,e.mobx,e.ReactDOM,e.ReactRouter,e.mobxReact)}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e,t){var r=this;t.mixin=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.defineProperties(e,{store:{value:t,enumerable:!0},__STYLES__:{value:n,enumerable:!1,writable:!1}}),r},t.render=function(t){return(0,o.connect)(t,e,e.__STYLES__)}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3);t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=this;t.router=function(t){var r=function e(t){return{path:t.path,component:t.component||t.view.default||t.view,childRoutes:t.children&&t.children.map(function(t){return e(t)})}},n=(t||e.config.routes||[]).map(function(e){return r(e)});e.$router=i.default.createElement(f.Router,{history:f.hashHistory,routes:n})},t.run=function(t){e.$router||r.router(),(0,c.render)(e.$router,document.querySelector(t))}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),i=n(u),c=r(7),f=r(8);r(4);t.default=o},function(e,t,r){!function(t,n){e.exports=n(r(0),r(6),r(9))}(0,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(0),c=n(i),f=r(3),a=r(4),l=r(2),s=n(l),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2],n={},i={};return Object.keys(e).forEach(function(t){i[t]=e[t]}),i.displayName=e.name||e.displayName,i.componentWillMount=function(){var e=this;Object.keys(t).forEach(function(r){var o=t[r];n[r]=o,o&&"function"==typeof o&&(n[r]=new o(e.props)),o&&"object"===(void 0===o?"undefined":u(o))&&(n[r]=(0,f.observable)(o))})},i.render=function(){return(0,s.default)(e(o({},this.props),n,this.context),r||{})},(0,a.observer)(c.default.createClass(i))};t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(0),i=n(u),c=function(e){var t=void 0;if(e.constructor===Array)t=e.map(function(e){return e});else{t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),t},f=function(e){var t=e.styleName,r=e.clazz,n=[];return t&&"string"==typeof t&&(n=t.split(" ")),r&&"string"==typeof r&&(n=n.concat(r.split(" "))),n},a=function(e){return e&&"[object Array]"===toString.call(e)},l=function(e){var t="function"==typeof Symbol&&Symbol.iterator;return!!e&&"function"==typeof(t?e[t]:e["@@iterator"])},s=function(e){var t=void 0===e?"undefined":o(e);return null!=e&&("object"===t||"function"===t)},p=function e(t,r){if(!s(t)||!r)return t;var n=t,o=!1;Object.isFrozen&&Object.isFrozen(n)&&(o=!0,n=c(n),n.props=c(n.props));var u=f(n.props);if(u.length){var p=n.props.className,d=u.map(function(e){return r[e]});n.props.className=p?[p].concat(d).join(" "):d.join(" "),delete n.props.styleName,delete n.props.clazz}var b=n.props.children;return i.default.isValidElement(b)?n.props.children=e(i.default.Children.only(b),r):a(b)?n.props.children=b.map(function(t){return i.default.isValidElement(t)?e(t,r):t}):l(b)&&(n.props.children=i.default.Children.map(b,function(t){return i.default.isValidElement(t)?e(t,r):t})),o&&(Object.freeze(n.props),Object.freeze(n)),n};t.default=p},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.connect=void 0;var o=r(1),u=n(o);t.connect=u.default}])})},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var i=u>=0?arguments[u]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),u="/"===i(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&u&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),u=n(r.split("/")),i=Math.min(o.length,u.length),c=i,f=0;f<i;f++)if(o[f]!==u[f]){c=f;break}for(var a=[],f=c;f<o.length;f++)a.push("..");return a=a.concat(u.slice(c)),a.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=u(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=u(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return u(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(5))},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(s===clearTimeout)return clearTimeout(e);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function i(){y&&d&&(y=!1,d.length?b=d.concat(b):h=-1,b.length&&c())}function c(){if(!y){var e=o(i);y=!0;for(var t=b.length;t;){for(d=b,b=[];++h<t;)d&&d[h].run();h=-1,t=b.length}d=null,y=!1,u(e)}}function f(e,t){this.fun=e,this.array=t}function a(){}var l,s,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{s="function"==typeof clearTimeout?clearTimeout:n}catch(e){s=n}}();var d,b=[],y=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];b.push(new f(e,t)),1!==b.length||y||o(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=a,p.addListener=a,p.once=a,p.off=a,p.removeListener=a,p.removeAllListeners=a,p.emit=a,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Application=t.default=void 0;var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2),a=n(f),l=r(1),s=n(l),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),Object.defineProperties(this,{$app:{value:{config:t},enumerable:!1,writable:!0}})}return c(e,[{key:"use",value:function(e){return e&&"function"==typeof e&&e.call(this,this.$app,this),this}}]),e}();(Object.freeze||Object)(p.prototype);var d=function(e){function t(e){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.use(s.default),r.use(a.default),r}return u(t,e),t}(p);t.default=d,t.Application=p}])});