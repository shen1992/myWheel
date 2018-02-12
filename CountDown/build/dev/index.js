var CountDown =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _countdown = __webpack_require__(1);

var _countdown2 = _interopRequireDefault(_countdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alert() {
  console.log(1);
}

console.log('2');

new _countdown2.default({ endTime: '2018/02/19 10:10:00', container: '.container' });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountDown = function () {
  function CountDown(option) {
    _classCallCheck(this, CountDown);

    this.isMs = option.isMs;
    this.container = document.querySelector(option.container || 'body');
    this.endTime = option.endTime;
    this.callBack = option.callBack;
    this.dayEndShow = option.dayEndShow || true;
    this.colon = option.colon;
    this.init();
  }

  _createClass(CountDown, [{
    key: 'init',
    value: function init() {
      this.render();
      this.bindEvent();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.colon) {
        this.renderColonFormat();
        return;
      }
      this.renderTimeFormat();
    }
  }, {
    key: 'renderTimeFormat',
    value: function renderTimeFormat() {
      var el = document.createElement('div');
      el.classList.add('con');
      el.style.fontSize = 0;
      el.innerHTML = '\n      <div class="box" style="display: inline-block" id="day">\n        <div id="t_d" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">\u5929</span>\n      </div>\n      <div class="box" style="display: inline-block">\n        <div id="t_h" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">\u65F6</span>\n      </div>\n      <div class="box" style="display: inline-block">\n        <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">\u5206</span>\n      </div>\n      <div class="box" style="display: inline-block">\n        <div id="t_s" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">\u79D2</span>\n      </div>\n      <div class="none box" id="ms" style="display: none;">\n        <div id="t_ms" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="font-size: 12px;">\u5206\u79D2</span>\n      </div>\n    ';
      this.container.appendChild(el);
      if (this.isMs) {
        document.querySelector('#ms').style.display = 'inline-block';
      }
    }
  }, {
    key: 'renderColonFormat',
    value: function renderColonFormat() {
      var el = document.createElement('div');
      el.classList.add('con');
      el.style.fontSize = 0;
      el.innerHTML = '\n      <div class="box" style="display: inline-block">\n        <div id="t_h" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">:</span>\n      </div>\n      <div class="box" style="display: inline-block">\n        <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px">:</span>\n      </div>\n      <div class="box" style="display: inline-block">\n        <div id="t_s" class="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span class="box_unit" style="display: inline-block;font-size: 12px" id="lastColon"></span>\n      </div>\n      <div class="none box" id="ms" style="display: none;">\n        <div id="t_ms" class="box_num" style="display: inline-block;font-size: 12px"></div>\n      </div>\n    ';
      this.container.appendChild(el);
      if (this.isMs) {
        document.querySelector('#ms').style.display = 'inline-block';
      }
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      if (this.colon) {
        this.colonFormatEvent();
        return;
      }
      this.timerFormatEvent();
    }
  }, {
    key: 'timerFormatEvent',
    value: function timerFormatEvent() {
      var _this = this;

      var endTime = this.endTime,
          colon = this.colon;

      if (typeof endTime !== "number") {
        endTime = new Date(endTime).getTime();
      }
      var time = endTime - new Date().getTime(),
          day = Math.floor(time / 1000 / 60 / 60 / 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 / 24),
          hour = Math.floor(time / 1000 / 60 / 60 % 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 % 24),
          minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
          second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
          ms = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100);

      ms = ms === 0 && second !== 0 ? '1' + ms : '0' + ms;

      document.querySelector('#t_d').innerHTML = day;
      document.querySelector('#t_h').innerHTML = hour;
      document.querySelector('#t_m').innerHTML = minute;
      document.querySelector('#t_s').innerHTML = second;
      document.querySelector('#t_ms').innerHTML = ms;

      if (day <= 0) {
        document.querySelector('#day').style.display = 'none';
      }

      if (day <= 0 && this.dayEndShow) {
        document.querySelector('#ms').style.display = 'inline-block';
      }

      var timer = setTimeout(function () {
        _this.bindEvent();
      }, 1);

      if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0 && ms <= 0) {
        clearTimeout(timer);
        this.callBack && this.callBack();
      }
    }
  }, {
    key: 'colonFormatEvent',
    value: function colonFormatEvent() {
      var _this2 = this;

      var endTime = this.endTime,
          isMs = this.isMs;

      if (typeof endTime !== "number") {
        endTime = new Date(endTime).getTime();
      }
      var time = endTime - new Date().getTime(),
          hour = Math.floor(time / 1000 / 60 / 60) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60),
          minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
          second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
          ms = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100);

      ms = ms === 0 && second !== 0 ? '1' + ms : '0' + ms;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;

      document.querySelector('#t_h').innerHTML = hour;
      document.querySelector('#t_m').innerHTML = minute;
      document.querySelector('#t_s').innerHTML = second;
      document.querySelector('#t_ms').innerHTML = ms;

      if (hour <= 0 || isMs) {
        document.querySelector('#lastColon').innerHTML = ':';
        document.querySelector('#ms').style.display = 'inline-block';
      }

      var timer = setTimeout(function () {
        _this2.colonFormatEvent();
      }, 1);

      if (hour <= 0 && minute <= 0 && second <= 0 && ms <= 0) {
        clearTimeout(timer);
        this.callBack && this.callBack();
      }
    }
  }]);

  return CountDown;
}();

exports.default = CountDown;

/***/ })
/******/ ])["default"];
//# sourceMappingURL=index.js.map