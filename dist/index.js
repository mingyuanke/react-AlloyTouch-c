(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["reactAlloyTouch"] = factory(require("react"), require("prop-types"));
	else
		root["reactAlloyTouch"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alloytouch = __webpack_require__(7);

var _alloytouch2 = _interopRequireDefault(_alloytouch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 重新设置 AlloyTouch 方法
_alloytouch2.default.prototype.setOption = function (key, value) {
  this[key] = value;
};

exports.default = _alloytouch2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

﻿/* transformjs 1.1.6
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs
 */
; (function () {

    var DEG_TO_RAD =  0.017453292519943295;

    var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        this.elements = window.Float32Array ? new Float32Array(16) : [];
        var te = this.elements;
        te[0] = (n11 !== undefined) ? n11 : 1; te[4] = n12 || 0; te[8] = n13 || 0; te[12] = n14 || 0;
        te[1] = n21 || 0; te[5] = (n22 !== undefined) ? n22 : 1; te[9] = n23 || 0; te[13] = n24 || 0;
        te[2] = n31 || 0; te[6] = n32 || 0; te[10] = (n33 !== undefined) ? n33 : 1; te[14] = n34 || 0;
        te[3] = n41 || 0; te[7] = n42 || 0; te[11] = n43 || 0; te[15] = (n44 !== undefined) ? n44 : 1;
    };


    Matrix3D.prototype = {
        set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
            var te = this.elements;
            te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
            te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
            te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
            te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
            return this;
        },
        identity: function () {
            this.set(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
            return this;
        },
        multiplyMatrices: function (a, be) {

            var ae = a.elements;
            var te = this.elements;
            var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
            var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
            var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
            var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

            var b11 = be[0], b12 = be[1], b13 = be[2], b14 = be[3];
            var b21 = be[4], b22 = be[5], b23 = be[6], b24 = be[7];
            var b31 = be[8], b32 = be[9], b33 = be[10], b34 = be[11];
            var b41 = be[12], b42 = be[13], b43 = be[14], b44 = be[15];

            te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

            te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

            te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

            te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

            return this;

        },
        // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
        _rounded: function (value, i) {
            i = Math.pow(10, i || 15);
            // default
            return Math.round(value * i) / i;
        },
        _arrayWrap: function (arr) {
            return window.Float32Array ? new Float32Array(arr) : arr;
        },
        appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

            var rx = rotateX * DEG_TO_RAD;
            var cosx = this._rounded(Math.cos(rx));
            var sinx = this._rounded(Math.sin(rx));
            var ry = rotateY * DEG_TO_RAD;
            var cosy = this._rounded(Math.cos(ry));
            var siny = this._rounded(Math.sin(ry));
            var rz = rotateZ * DEG_TO_RAD;
            var cosz = this._rounded(Math.cos(rz * -1));
            var sinz = this._rounded(Math.sin(rz * -1));

            this.multiplyMatrices(this, this._arrayWrap([
                1, 0, 0, x,
                0, cosx, sinx, y,
                0, -sinx, cosx, z,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosy, 0, siny, 0,
                0, 1, 0, 0,
                -siny, 0, cosy, 0,
                0, 0, 0, 1
            ]));

            this.multiplyMatrices(this, this._arrayWrap([
                cosz * scaleX, sinz * scaleY, 0, 0,
                -sinz * scaleX, cosz * scaleY, 0, 0,
                0, 0, 1 * scaleZ, 0,
                0, 0, 0, 1
            ]));

            if (skewX || skewY) {
                this.multiplyMatrices(this, this._arrayWrap([
                    this._rounded(Math.cos(skewX * DEG_TO_RAD)), this._rounded(Math.sin(skewX * DEG_TO_RAD)), 0, 0,
                    -1 * this._rounded(Math.sin(skewY * DEG_TO_RAD)), this._rounded(Math.cos(skewY * DEG_TO_RAD)), 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1
                ]));
            }


            if (originX || originY || originZ) {
                this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
                this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
                this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
            }
            return this;
        }
    };

    var Matrix2D = function(a, b, c, d, tx, ty) {
        this.a = a == null ? 1 : a;
        this.b = b || 0;
        this.c = c || 0;
        this.d = d == null ? 1 : d;
        this.tx = tx || 0;
        this.ty = ty || 0;
        return this;
    };

    Matrix2D.prototype = {
        identity : function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this;
        },
        appendTransform : function(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
            if (rotation % 360) {
                var r = rotation * DEG_TO_RAD;
                var cos = Math.cos(r);
                var sin = Math.sin(r);
            } else {
                cos = 1;
                sin = 0;
            }
            if (skewX || skewY) {
                skewX *= DEG_TO_RAD;
                skewY *= DEG_TO_RAD;
                this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
            } else {
                this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
            }
            if (originX || originY) {
                this.tx -= originX * this.a + originY * this.c;
                this.ty -= originX * this.b + originY * this.d;
            }
            return this;
        },
        append : function(a, b, c, d, tx, ty) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            this.a = a * a1 + b * c1;
            this.b = a * b1 + b * d1;
            this.c = c * a1 + d * c1;
            this.d = c * b1 + d * d1;
            this.tx = tx * a1 + ty * c1 + this.tx;
            this.ty = tx * b1 + ty * d1 + this.ty;
            return this;
        },
        initialize : function(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            return this;
        },
        setValues : function(a, b, c, d, tx, ty) {
            this.a = a == null ? 1 : a;
            this.b = b || 0;
            this.c = c || 0;
            this.d = d == null ? 1 : d;
            this.tx = tx || 0;
            this.ty = ty || 0;
            return this;
        },
        copy : function(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        }
    };

    function observe(target, props, callback) {
        for (var i = 0, len = props.length; i < len; i++) {
            var prop = props[i];
            watch(target, prop, callback);
        }
    }

    function watch(target, prop, callback) {
        Object.defineProperty(target, prop, {
            get: function () {
                return this["_" + prop];
            },
            set: function (value) {
                this["_" + prop] = value;
                callback();
            }
        });
    }

    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    function Transform(obj, notPerspective) {
        if(obj.hasOwnProperty("translateX")) return;
        var observeProps = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
            objIsElement = isElement(obj);
        if (!notPerspective) {
            observeProps.push("perspective");
        }

        observe(
            obj,
            observeProps,
            function () {
                var mtx = obj.matrix3d.identity().appendTransform(obj.translateX, obj.translateY, obj.translateZ, obj.scaleX, obj.scaleY, obj.scaleZ, obj.rotateX, obj.rotateY, obj.rotateZ, obj.skewX, obj.skewY, obj.originX, obj.originY, obj.originZ);
                var transform = (notPerspective ? "" : "perspective(" + obj.perspective + "px) ") + "matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
                if (objIsElement) {
                    obj.style.transform = obj.style.msTransform = obj.style.OTransform = obj.style.MozTransform = obj.style.webkitTransform = transform;
                } else {
                    obj.transform = transform;
                }
            });

        obj.matrix3d = new Matrix3D();
        if (!notPerspective) {
            obj.perspective = 500;
        }
        obj.scaleX = obj.scaleY = obj.scaleZ = 1;
        //由于image自带了x\y\z，所有加上translate前缀
        obj.translateX = obj.translateY = obj.translateZ = obj.rotateX = obj.rotateY = obj.rotateZ = obj.skewX = obj.skewY = obj.originX = obj.originY = obj.originZ = 0;
    }

    Transform.getMatrix3D = function (option) {
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            originZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix3D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.translateZ, defaultOption.scaleX, defaultOption.scaleY, defaultOption.scaleZ, defaultOption.rotateX, defaultOption.rotateY, defaultOption.rotateZ, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY, defaultOption.originZ).elements;

    }

    Transform.getMatrix2D = function(option){
        var defaultOption = {
            translateX: 0,
            translateY: 0,
            rotation: 0,
            skewX: 0,
            skewY: 0,
            originX: 0,
            originY: 0,
            scaleX: 1,
            scaleY: 1
        };
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                defaultOption[key] = option[key];
            }
        }
        return new Matrix2D().identity().appendTransform(defaultOption.translateX, defaultOption.translateY, defaultOption.scaleX, defaultOption.scaleY, defaultOption.rotation, defaultOption.skewX, defaultOption.skewY, defaultOption.originX, defaultOption.originY);
    }

    if (true) {
        module.exports = Transform;
    }else {
        window.Transform = Transform;
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSwiper = exports.ReactCarousel = exports.ReactPull = undefined;

var _ReactAlloyTouch = __webpack_require__(6);

var _ReactAlloyTouch2 = _interopRequireDefault(_ReactAlloyTouch);

var _ReactPull = __webpack_require__(8);

var _ReactPull2 = _interopRequireDefault(_ReactPull);

var _ReactCarousel = __webpack_require__(9);

var _ReactCarousel2 = _interopRequireDefault(_ReactCarousel);

var _ReactSwiper = __webpack_require__(10);

var _ReactSwiper2 = _interopRequireDefault(_ReactSwiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactPull = exports.ReactPull = _ReactPull2.default;
var ReactCarousel = exports.ReactCarousel = _ReactCarousel2.default;
var ReactSwiper = exports.ReactSwiper = _ReactSwiper2.default;

exports.default = _ReactAlloyTouch2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlloyTouch = __webpack_require__(2);

var _AlloyTouch2 = _interopRequireDefault(_AlloyTouch);

var _transform = __webpack_require__(3);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 基于腾讯组件 https://github.com/AlloyTeam/AlloyTouch 实现
var ReactAlloyTouch = function (_Component) {
  _inherits(ReactAlloyTouch, _Component);

  function ReactAlloyTouch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactAlloyTouch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactAlloyTouch.__proto__ || Object.getPrototypeOf(ReactAlloyTouch)).call.apply(_ref, [this].concat(args))), _this), _this.handleWrapper = function (wrapper) {
      _this.wrapper = wrapper;
    }, _this.handleScroller = function (scroller) {
      _this.scroller = scroller;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  //可能需要传入的参数


  _createClass(ReactAlloyTouch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs = this.refs,
          wrapper = _refs.wrapper,
          scroller = _refs.scroller;
      var _props = this.props,
          options = _props.options,
          transform = _props.transform,
          extensionFunc = _props.extensionFunc;

      // 处理 options 中函数，返回 wrapper 和 scroller

      Object.keys(options).forEach(function (func) {
        if (typeof func === 'function') {
          options[func] = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            options[func].apply(options, args.concat([wrapper, scroller]));
          };
        }
      });

      if (transform) {
        (0, _transform2.default)(scroller, true);
      }

      var min = wrapper.clientHeight - scroller.scrollHeight;
      if (min >= 0) {
        min = 0;
      }

      var alloyOptions = _extends({
        touch: wrapper, // 反馈触摸的dom
        target: scroller, // 运动的对象
        vertical: true, // 不必需，默认是true代表监听竖直方向touch
        property: 'translateY', // 被运动的属性
        sensitivity: 1, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, // 不必需,表示触摸位移与被运动属性映射关系，默认值是1
        min: min,
        max: 0, // 不必需,滚动属性的最大值
        step: 40 }, options || {});

      // 初始化 alloyTouch 实例
      this.alloyTouch = new _AlloyTouch2.default(alloyOptions);

      if (typeof extensionFunc === 'function') {
        extensionFunc(this.alloyTouch, wrapper, scroller);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var updateFunc = this.props.updateFunc;
      var _refs2 = this.refs,
          wrapper = _refs2.wrapper,
          scroller = _refs2.scroller;

      if (typeof updateFunc === 'function') {
        updateFunc(this.alloyTouch, wrapper, scroller);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          prefix = _props2.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-wrapper ' + (className || ''), ref: this.handleWrapper },
        _react2.default.createElement(
          'div',
          { className: prefix + '-scroller', ref: this.handleScroller },
          children
        )
      );
    }
  }]);

  return ReactAlloyTouch;
}(_react.Component);

ReactAlloyTouch.propTypes = {
  children: _propTypes2.default.node, // 待渲染的内容
  className: _propTypes2.default.string, // 自定义 className
  prefix: _propTypes2.default.string, // 样式前缀
  options: _propTypes2.default.object, // AlloyTouch 组件选项
  transform: _propTypes2.default.bool, // 是否用 Transform 处理
  extensionFunc: _propTypes2.default.func, // 扩展函数，处理额外的功能
  updateFunc: _propTypes2.default.func // 执行 componentDidUpdate 调用的回调
};
ReactAlloyTouch.defaultProps = {
  className: '',
  prefix: 'alloy',
  options: {},
  transform: true
};
exports.default = ReactAlloyTouch;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

﻿/* AlloyTouch v0.2.5
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */

;(function () {
    'use strict';

    if (!Date.now)
        Date.now = function () { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
                                   || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

(function () {

    function bind(element, type, callback) {
        element.addEventListener(type, callback, false);
    }

    function ease(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }

    function reverseEase(y) {
        return 1 - Math.sqrt(1 - y * y);
    }

    function preventDefaultTest(el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }
        return false;
    }

    var AlloyTouch = function (option) {

        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
        this.target = this._getValue(option.target, this.element);
        this.vertical = this._getValue(option.vertical, true);
        this.property = option.property;
        this.tickID = 0;

        this.initialValue = this._getValue(option.initialValue, this.target[this.property]);
        this.target[this.property] = this.initialValue;
        this.fixed = this._getValue(option.fixed, false);
        this.sensitivity = this._getValue(option.sensitivity, 1);
        this.moveFactor = this._getValue(option.moveFactor, 1);
        this.factor = this._getValue(option.factor, 1);
        this.outFactor = this._getValue(option.outFactor, 0.3);
        this.min = option.min;
        this.max = option.max;
        this.deceleration = 0.0006;
        this.maxRegion = this._getValue(option.maxRegion, 600);
        this.springMaxRegion = this._getValue(option.springMaxRegion, 60);
        this.maxSpeed = option.maxSpeed;
        this.hasMaxSpeed = !(this.maxSpeed === void 0);
        this.lockDirection = this._getValue(option.lockDirection, true);

        var noop = function () { };
        this.change = option.change || noop;
        this.touchEnd = option.touchEnd || noop;
        this.touchStart = option.touchStart || noop;
        this.touchMove = option.touchMove || noop;
        this.touchCancel = option.touchCancel || noop;
        this.reboundEnd = option.reboundEnd || noop;
        this.animationEnd = option.animationEnd || noop;
        this.correctionEnd = option.correctionEnd || noop;
        this.tap = option.tap || noop;
        this.pressMove = option.pressMove || noop;

        this.preventDefault = this._getValue(option.preventDefault, true);
        this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
        this.hasMin = !(this.min === void 0);
        this.hasMax = !(this.max === void 0);
        if (this.hasMin && this.hasMax && this.min > this.max) {
            throw "the min value can't be greater than the max value."
        }
        this.isTouchStart = false;
        this.step = option.step;
        this.inertia = this._getValue(option.inertia, true);

        this._calculateIndex();

        this.eventTarget = window;
        if(option.bindSelf){
            this.eventTarget = this.element;
        }

        this._moveHandler = this._move.bind(this);
        bind(this.element, "touchstart", this._start.bind(this));
        bind(this.eventTarget, "touchend", this._end.bind(this));
        bind(this.eventTarget, "touchcancel", this._cancel.bind(this));
        this.eventTarget.addEventListener("touchmove", this._moveHandler, { passive: false, capture: false });
        this.x1 = this.x2 = this.y1 = this.y2 = null;
    };

    AlloyTouch.prototype = {
        _getValue: function (obj, defaultValue) {
            return obj === void 0 ? defaultValue : obj;
        },
        stop:function(){
            cancelAnimationFrame(this.tickID);
            this._calculateIndex();
        },
        _start: function (evt) {
            this.isTouchStart = true;
            this.touchStart.call(this, evt, this.target[this.property]);
            cancelAnimationFrame(this.tickID);
            this._calculateIndex();
            this.startTime = new Date().getTime();
            this.x1 = this.preX = evt.touches[0].pageX;
            this.y1 = this.preY = evt.touches[0].pageY;
            this.start = this.vertical ? this.preY : this.preX;
            this._firstTouchMove = true;
            this._preventMove = false;
        },
        _move: function (evt) {
            if (this.isTouchStart) {
                var len = evt.touches.length,
                    currentX = evt.touches[0].pageX,
                    currentY = evt.touches[0].pageY;

                if (this._firstTouchMove && this.lockDirection) {
                    var dDis = Math.abs(currentX - this.x1) - Math.abs(currentY - this.y1);
                    if (dDis > 0 && this.vertical) {
                        this._preventMove = true;
                    } else if (dDis < 0 && !this.vertical) {
                        this._preventMove = true;
                    }
                    this._firstTouchMove = false;
                }
                if(!this._preventMove) {
                    var d = (this.vertical ? currentY - this.preY : currentX - this.preX) * this.sensitivity;
                    var f = this.moveFactor;
                    if (this.hasMax && this.target[this.property] > this.max && d > 0) {
                        f = this.outFactor;
                    } else if (this.hasMin && this.target[this.property] < this.min && d < 0) {
                        f = this.outFactor;
                    }
                    d *= f;
                    this.preX = currentX;
                    this.preY = currentY;
                    if (!this.fixed) {
                        this.target[this.property] += d;
                    }
                    this.change.call(this, this.target[this.property]);
                    var timestamp = new Date().getTime();
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.start = this.vertical ? this.preY : this.preX;
                    }
                    this.touchMove.call(this, evt, this.target[this.property]);
                }

                if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                    evt.preventDefault();
                }

                if (len === 1) {
                    if (this.x2 !== null) {
                        evt.deltaX = currentX - this.x2;
                        evt.deltaY = currentY - this.y2;

                    } else {
                        evt.deltaX = 0;
                        evt.deltaY = 0;
                    }
                    this.pressMove.call(this, evt, this.target[this.property]);
                }
                this.x2 = currentX;
                this.y2 = currentY;
            }
        },
        _cancel: function (evt) {
            var current = this.target[this.property];
            this.touchCancel.call(this, evt, current);
            this._end(evt);

        },
        to: function (v, time, user_ease) {
            this._to(v, this._getValue(time, 600), user_ease || ease, this.change, function (value) {
                this._calculateIndex();
                this.reboundEnd.call(this, value);
                this.animationEnd.call(this, value);
            }.bind(this));

        },
        _calculateIndex: function () {
            if (this.hasMax && this.hasMin) {
                this.currentPage = Math.round((this.max - this.target[this.property]) / this.step);
            }
        },
        _end: function (evt) {
            if (this.isTouchStart) {
                this.isTouchStart = false;
                var self = this,
                    current = this.target[this.property],
                    triggerTap = (Math.abs(evt.changedTouches[0].pageX - this.x1) < 30 && Math.abs(evt.changedTouches[0].pageY - this.y1) < 30);
                if (triggerTap) {
                    this.tap.call(this, evt, current);
                }
                if (this.touchEnd.call(this, evt, current, this.currentPage) === false) return;
                if (this.hasMax && current > this.max) {
                    this._to(this.max, 200, ease, this.change, function (value) {
                        this.reboundEnd.call(this, value);
                        this.animationEnd.call(this, value);
                    }.bind(this));
                } else if (this.hasMin && current < this.min) {
                    this._to(this.min, 200, ease, this.change, function (value) {
                        this.reboundEnd.call(this, value);
                        this.animationEnd.call(this, value);
                    }.bind(this));
                } else if (this.inertia && !triggerTap && !this._preventMove) {
                    var dt = new Date().getTime() - this.startTime;
                    if (dt < 300) {
                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                            speed = Math.abs(distance) / dt,
                            speed2 = this.factor * speed;
                        if(this.hasMaxSpeed&&speed2>this.maxSpeed) {
                            speed2 = this.maxSpeed;
                        }
                        var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                        var tRatio = 1;
                        if (destination < this.min ) {
                            if (destination < this.min - this.maxRegion) {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
                            }
                        } else if (destination > this.max) {
                            if (destination > this.max + this.maxRegion) {
                                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion;
                            } else {
                                tRatio = reverseEase((this.max + this.springMaxRegion * ( destination-this.max) / this.maxRegion - current) / (destination - current));
                                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;

                            }
                        }
                        var duration = Math.round(speed / self.deceleration) * tRatio;

                        self._to(Math.round(destination), duration, ease, self.change, function (value) {
                            if (self.hasMax && self.target[self.property] > self.max) {

                                cancelAnimationFrame(self.tickID);
                                self._to(self.max, 600, ease, self.change, self.animationEnd);

                            } else if (self.hasMin && self.target[self.property] < self.min) {

                                cancelAnimationFrame(self.tickID);
                                self._to(self.min, 600, ease, self.change, self.animationEnd);

                            } else {
                                if(self.step) {
                                    self._correction()
                                }else{
                                    self.animationEnd.call(self, value);
                                }
                            }

                            self.change.call(this, value);
                        });


                    } else {
                        self._correction();
                    }
                } else {
                    self._correction();
                }
                // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
                //     evt.preventDefault();
                // }

            }
            this.x1 = this.x2 = this.y1 = this.y2 = null;

        },
        _to: function (value, time, ease, onChange, onEnd) {
            if (this.fixed) return;
            var el = this.target,
                property = this.property;
            var current = el[property];
            var dv = value - current;
            var beginTime = new Date();
            var self = this;
            var toTick = function () {

                var dt = new Date() - beginTime;
                if (dt >= time) {
                    el[property] = value;
                    onChange && onChange.call(self, value);
                    onEnd && onEnd.call(self, value);
                    return;
                }
                el[property] = dv * ease(dt / time) + current;
                self.tickID = requestAnimationFrame(toTick);
                //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
                onChange && onChange.call(self, el[property]);
            };
            toTick();
        },
        _correction: function () {
            if (this.step === void 0) return;
            var el = this.target,
                property = this.property;
            var value = el[property];
            var rpt = Math.floor(Math.abs(value / this.step));
            var dy = value % this.step;
            if (Math.abs(dy) > this.step / 2) {
                this._to((value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, ease, this.change, function (value) {
                    this._calculateIndex();
                    this.correctionEnd.call(this, value);
                    this.animationEnd.call(this, value);
                }.bind(this));
            } else {
                this._to((value < 0 ? -1 : 1) * rpt * this.step, 400, ease, this.change, function (value) {
                    this._calculateIndex();
                    this.correctionEnd.call(this, value);
                    this.animationEnd.call(this, value);
                }.bind(this));
            }
        }
    };

    if (true) {
        module.exports = AlloyTouch;
    } else {
        window.AlloyTouch = AlloyTouch;
    }

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlloyTouch = __webpack_require__(2);

var _AlloyTouch2 = _interopRequireDefault(_AlloyTouch);

var _transform = __webpack_require__(3);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 基于腾讯组件
var ReactAlloyTouch = function (_Component) {
  _inherits(ReactAlloyTouch, _Component);

  //可能需要传入的参数
  function ReactAlloyTouch(props) {
    _classCallCheck(this, ReactAlloyTouch);

    var _this = _possibleConstructorReturn(this, (ReactAlloyTouch.__proto__ || Object.getPrototypeOf(ReactAlloyTouch)).call(this, props));

    _this.touchStart = function (e, value) {
      if (_this.props.loadMore) {
        // 记录当前滑动值
        var _this$refs = _this.refs,
            wrapper = _this$refs.wrapper,
            scroller = _this$refs.scroller;

        var heightOffset = wrapper.clientHeight - scroller.scrollHeight;
        if (heightOffset > 0) {
          heightOffset = 0;
        }

        _this.offsetStart = heightOffset;
        _this.moveValue = value;
      }
    };

    _this.touchMove = function (e, value) {
      var _this$props = _this.props,
          refresh = _this$props.refresh,
          loadMore = _this$props.loadMore,
          refreshThreshold = _this$props.refreshThreshold,
          loadMoreThrottle = _this$props.loadMoreThrottle,
          pullDownText = _this$props.pullDownText,
          pullUpText = _this$props.pullUpText;

      // 下拉刷新

      if (refresh && _this.refreshState !== 'loading') {
        var _this$refs2 = _this.refs,
            refreshEl = _this$refs2.refreshEl,
            refreshIconEl = _this$refs2.refreshIconEl;
        var style = refreshEl.style;

        if (value > 0) {
          if (value > refreshThreshold) {
            _this.refreshState = 'enable';
            refreshIconEl.classList.add('rotate');
            _this.setState({
              refreshText: pullDownText[1]
            });
          } else {
            _this.refreshState = null;
            refreshIconEl.classList.remove('rotate');
            _this.setState({
              refreshText: pullDownText[0]
            });
          }
        }

        style.opacity = 1;
        style.webkitTransform = 'translate3d(0, ' + value + 'px, 0)';
        style.transform = 'translate3d(0, ' + value + 'px, 0)';
      }

      // 上滑加载更多
      if (loadMore) {
        var disablePullUp = _this.props.disablePullUp;
        var _this$refs3 = _this.refs,
            loadMoreEl = _this$refs3.loadMoreEl,
            loadMoreIconEl = _this$refs3.loadMoreIconEl;
        var _style = loadMoreEl.style;
        var _this$refs4 = _this.refs,
            wrapper = _this$refs4.wrapper,
            scroller = _this$refs4.scroller;


        var min = wrapper.clientHeight - scroller.scrollHeight;

        if (_this.loadMoreState !== 'loading') {
          if (disablePullUp) {
            var _min = wrapper.clientHeight - scroller.scrollHeight;
            if (_min < 0) {
              loadMoreEl.style.visibility = value < _min - 5 ? 'visible' : 'hidden';
            }
            return false;
          }
          if (value < min && value < 0) {
            _style.visibility = 'visible';
            if (Math.abs(value - _this.moveValue) > loadMoreThrottle) {
              _this.loadMoreState = 'enable';
              loadMoreIconEl.classList.add('rotate');
              _this.setState({
                loadMoreText: pullUpText[1]
              });
            } else {
              _this.loadMoreState = null;
              loadMoreIconEl.classList.remove('rotate');
              _this.setState({
                loadMoreText: pullUpText[0]
              });
            }
          } else {
            _style.visibility = 'hidden';
          }
        }
      }
    };

    _this.touchEnd = function (e, value) {
      var _this$props2 = _this.props,
          refresh = _this$props2.refresh,
          loadMore = _this$props2.loadMore,
          disablePullUp = _this$props2.disablePullUp;
      // 刷新

      if (value > 0) {
        if (refresh) {
          if (_this.refreshState === 'enable') {
            _this.refresh(e);
          } else {
            _this.resetRefreshState();
          }
          // 阻止默认的滑动
          return false;
        }
        return;
      }

      // 加载更多
      var _this$refs5 = _this.refs,
          wrapper = _this$refs5.wrapper,
          scroller = _this$refs5.scroller;

      var min = wrapper.clientHeight - scroller.scrollHeight;
      if (value < min) {
        if (loadMore && !disablePullUp && _this.loadMoreState === 'enable') {
          _this.loadMore(e);
          // 阻止默认的滑动
          return false;
        }
        _this.resetLoadMoreState({ moveTo: false });
      }
    };

    _this.refresh = function (e) {
      if (e) {
        e.stopImmediatePropagation();
      }

      if (_this.refreshState === null || _this.refreshState === 'loading') {
        return;
      }
      _this.refreshState = 'loading';
      var _this$props3 = _this.props,
          refreshCallback = _this$props3.refreshCallback,
          lockInTime = _this$props3.lockInTime,
          pullDownText = _this$props3.pullDownText;
      var refreshIconEl = _this.refs.refreshIconEl;

      refreshIconEl.classList.add('loading');
      _this.setState({
        refreshText: pullDownText[2]
      });

      if (refreshCallback && typeof refreshCallback === 'function') {
        if (lockInTime > 0) {
          clearTimeout(_this.refreshTimoutId);
          _this.refreshTimoutId = setTimeout(function () {
            refreshCallback().then(_this.resetRefreshState, _this.resetRefreshState);
          }, lockInTime);
        } else {
          refreshCallback().then(_this.resetRefreshState, _this.resetRefreshState);
        }
      } else {
        _this.resetRefreshState();
      }
    };

    _this.resetRefreshState = function () {
      var _this$props4 = _this.props,
          pullDownText = _this$props4.pullDownText,
          refresh = _this$props4.refresh;

      _this.refreshState = null;
      if (refresh) {
        var _this$refs6 = _this.refs,
            refreshEl = _this$refs6.refreshEl,
            refreshIconEl = _this$refs6.refreshIconEl;
        var style = refreshEl.style;

        refreshIconEl.classList.remove('rotate');
        refreshIconEl.classList.remove('loading');

        style.opacity = 0;
        style.transition = '';
        style.webkitTransition = '';
        style.webkitTransform = 'translate3d(0, 0, 0)';
        style.transform = 'translate3d(0, 0, 0)';

        _this.setState({
          refreshText: pullDownText[0]
        });
      }

      _this.alloyTouch.to(0);
    };

    _this.loadMore = function (e) {
      if (e) {
        e.stopImmediatePropagation();
      }

      if (_this.loadMoreState === null || _this.loadMoreState === 'loading') {
        return;
      }
      _this.loadMoreState = 'loading';
      var _this$props5 = _this.props,
          loadMoreCallback = _this$props5.loadMoreCallback,
          lockInTime = _this$props5.lockInTime,
          pullUpText = _this$props5.pullUpText;
      var loadMoreIconEl = _this.refs.loadMoreIconEl;

      loadMoreIconEl.classList.add('loading');
      _this.setState({
        loadMoreText: pullUpText[2]
      });

      if (loadMoreCallback && typeof loadMoreCallback === 'function') {
        if (lockInTime > 0) {
          clearTimeout(_this.loadMoreTimoutId);
          _this.loadMoreTimoutId = setTimeout(function () {
            loadMoreCallback().then(function () {
              _this.resetLoadMoreState({ adjust: true });
            }, function () {
              _this.resetLoadMoreState({});
            });
          }, lockInTime);
        } else {
          loadMoreCallback().then(function () {
            _this.resetLoadMoreState({ adjust: true });
          }, function () {
            _this.resetLoadMoreState({});
          });
        }
      } else {
        _this.resetLoadMoreState({});
      }
    };

    _this.resetLoadMoreState = function (_ref) {
      var _ref$adjust = _ref.adjust,
          adjust = _ref$adjust === undefined ? false : _ref$adjust,
          _ref$moveTo = _ref.moveTo,
          moveTo = _ref$moveTo === undefined ? true : _ref$moveTo;
      var _this$props6 = _this.props,
          pullUpText = _this$props6.pullUpText,
          loadedRecoilTime = _this$props6.loadedRecoilTime,
          moveForwardOffset = _this$props6.moveForwardOffset,
          loadMore = _this$props6.loadMore;

      _this.loadMoreState = null;
      if (loadMore) {
        var _this$refs7 = _this.refs,
            loadMoreEl = _this$refs7.loadMoreEl,
            loadMoreIconEl = _this$refs7.loadMoreIconEl;

        loadMoreIconEl.classList.remove('rotate');
        loadMoreIconEl.classList.remove('loading');

        _this.setState({
          loadMoreText: pullUpText[0]
        });
        loadMoreEl.style.visibility = 'hidden';
      }

      if (_this.offsetStart !== undefined) {
        var offset = void 0;
        if (adjust) {
          offset = _this.offsetStart < -moveForwardOffset ? _this.offsetStart - moveForwardOffset : _this.offsetStart;
        } else {
          offset = _this.offsetStart;
        }

        if (moveTo) {
          _this.alloyTouch.to(offset, loadedRecoilTime);
        }
      }
    };

    _this.state = {
      refreshText: props.pullDownText[0],
      loadMoreText: props.pullUpText[0]
    };
    // 下拉状态: 分为没有开启，开启，加载中 null enable loading
    _this.refreshState = null;
    // 上滑状态: 分为没有开启，开启，加载中 null enable loading
    _this.loadMoreState = null;
    return _this;
  }

  _createClass(ReactAlloyTouch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs = this.refs,
          wrapper = _refs.wrapper,
          scroller = _refs.scroller;
      var options = this.props.options;


      (0, _transform2.default)(scroller, true);

      // 设置向下滑动时，滑动的最小值，如果采用translateY，则设置 y的最小值，如果不设置 min，则可以无限制的向下滑动
      var min = wrapper.clientHeight - scroller.scrollHeight;
      if (min >= 0) {
        min = 0;
      }

      var alloyOptions = _extends({
        touch: wrapper, // 反馈触摸的dom
        target: scroller, // 运动的对象
        vertical: true, // 不必需，默认是true代表监听竖直方向touch
        property: 'translateY', // 被运动的属性
        sensitivity: 1, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, // 不必需,表示触摸位移与被运动属性映射关系，默认值是1
        min: min,
        max: 0, // 不必需,滚动属性的最大值
        step: 40, // 用于校正到step的整数倍
        maxSpeed: 2, //不必需，触摸反馈的最大速度限制
        touchStart: this.touchStart,
        touchMove: this.touchMove,
        touchEnd: this.touchEnd
      }, options || {});

      // 初始化 alloyTouch 实例
      this.alloyTouch = new _AlloyTouch2.default(alloyOptions);

      this.adjustPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // 每次页面数据更改后，需要重新设置 this.alloyTouch 的 min 值
      var _refs2 = this.refs,
          wrapper = _refs2.wrapper,
          scroller = _refs2.scroller;


      var min = wrapper.clientHeight - scroller.scrollHeight;
      if (min >= 0) {
        min = 0;
      }
      this.alloyTouch.setOption('min', min);

      this.adjustPosition();
    }
  }, {
    key: 'adjustPosition',
    value: function adjustPosition() {
      var _refs3 = this.refs,
          header = _refs3.header,
          footer = _refs3.footer,
          alloyBody = _refs3.alloyBody;


      if (header) {
        alloyBody.style.top = header.scrollHeight + 'px';
      }

      if (footer) {
        alloyBody.style.bottom = footer.scrollHeight + 'px';
      }
    }

    // touch 开始时


    // touch 移动时，分刷新和加载更多


    // touch end


    // 刷新数据


    // 恢复刷新原始状态


    // 加载更多


    // 恢复加载更多原始状态

  }, {
    key: 'renderLoadMore',


    // 选择加载更多
    value: function renderLoadMore() {
      var loadMoreText = this.state.loadMoreText;
      var _props = this.props,
          enableText = _props.enableText,
          loadMore = _props.loadMore,
          loadMoreProcessIcon = _props.loadMoreProcessIcon,
          disablePullUp = _props.disablePullUp,
          pullUpText = _props.pullUpText;

      if (loadMore) {
        return _react2.default.createElement(
          'div',
          { ref: 'loadMoreEl', className: 'pull-load-more' },
          _react2.default.createElement('div', { ref: 'loadMoreIconEl',
            className: 'pull-load-more-icon' + (!loadMoreProcessIcon || disablePullUp ? ' hide' : '') }),
          enableText ? _react2.default.createElement(
            'div',
            {
              className: 'pull-load-more-text' },
            disablePullUp ? pullUpText[3] : loadMoreText
          ) : null
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          header = _props2.header,
          footer = _props2.footer,
          refresh = _props2.refresh,
          enableText = _props2.enableText;
      var refreshText = this.state.refreshText;


      return _react2.default.createElement(
        'div',
        { className: 'pull-panel ' + className },
        header ? _react2.default.createElement(
          'div',
          { className: 'pull-header', ref: 'header' },
          header
        ) : null,
        _react2.default.createElement(
          'div',
          { ref: 'alloyBody', className: 'pull-body' },
          refresh ? _react2.default.createElement(
            'div',
            { ref: 'refreshEl', className: 'pull-refresh', style: { opacity: 0 } },
            _react2.default.createElement(
              'div',
              { className: 'pull-refresh-icon-wrapper' },
              _react2.default.createElement('div', { ref: 'refreshIconEl', className: 'pull-refresh-icon' })
            ),
            enableText ? _react2.default.createElement(
              'div',
              { className: 'pull-refresh-text' },
              refreshText
            ) : null
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'pull-wrapper', ref: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'pull-scroller', ref: 'scroller' },
              children
            )
          ),
          this.renderLoadMore()
        ),
        footer ? _react2.default.createElement(
          'div',
          { className: 'pull-footer', ref: 'footer' },
          footer
        ) : null
      );
    }
  }]);

  return ReactAlloyTouch;
}(_react.Component);

ReactAlloyTouch.propTypes = {
  children: _propTypes2.default.node, // 待渲染的内容
  className: _propTypes2.default.string, // 自定义 className
  header: _propTypes2.default.element, // 头部
  footer: _propTypes2.default.element, // 底部
  options: _propTypes2.default.object, // AlloyTouch 组件选项
  lockInTime: _propTypes2.default.number, // 延迟刷新或加载
  enableText: _propTypes2.default.bool, // 是否显示文本
  refresh: _propTypes2.default.bool, // 是否下拉刷新
  refreshThreshold: _propTypes2.default.number, // 设置刷新页面时，距离顶部临界值，
  refreshCallback: _propTypes2.default.func, // 刷新回调函数
  pullDownText: _propTypes2.default.array, // 下拉显示文本内容
  loadMore: _propTypes2.default.bool, // 是否加载更多
  loadMoreThrottle: _propTypes2.default.number, // 设置加载更多，距离最底部临界值，
  loadMoreCallback: _propTypes2.default.func, // 加载更多回调函数
  pullUpText: _propTypes2.default.array, // 上拉显示文本内容
  loadMoreProcessIcon: _propTypes2.default.bool, // 加载更多过程图标
  disablePullUp: _propTypes2.default.bool, // 对于上拉加载更多时，如果没有更多记录时，禁止上滑，
  loadedRecoilTime: _propTypes2.default.number, // 加载完更多数据回弹时间
  moveForwardOffset: _propTypes2.default.number // 加载完更多数据时，向前推进的距离
};
ReactAlloyTouch.defaultProps = {
  className: '',
  refreshThreshold: 50,
  loadMoreThrottle: 30,
  lockInTime: 0,
  pullDownText: ['下拉刷新', '松开刷新数据', '加载中，请稍后...'],
  pullUpText: ['上滑加载更多...', '松开加载数据', '加载中，请稍后...', '没有更多数据了'],
  enableText: true,
  loadMoreProcessIcon: true,
  loadedRecoilTime: 300,
  moveForwardOffset: 50
};
exports.default = ReactAlloyTouch;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlloyTouch = __webpack_require__(2);

var _AlloyTouch2 = _interopRequireDefault(_AlloyTouch);

var _transform = __webpack_require__(3);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 基于腾讯组件 https://github.com/AlloyTeam/AlloyTouch 实现
var ReactAlloyTouch = function (_Component) {
  _inherits(ReactAlloyTouch, _Component);

  //可能需要传入的参数
  function ReactAlloyTouch(props) {
    _classCallCheck(this, ReactAlloyTouch);

    var _this = _possibleConstructorReturn(this, (ReactAlloyTouch.__proto__ || Object.getPrototypeOf(ReactAlloyTouch)).call(this, props));

    _this.touchStart = function () {
      // 先删除
      clearInterval(_this.timerId);
    };

    _this.touchEnd = function (evt, value, index) {
      var _this$alloyTouch = _this.alloyTouch,
          step = _this$alloyTouch.step,
          min = _this$alloyTouch.min,
          max = _this$alloyTouch.max;

      var stepV = index * step * -1;
      var dx = value - stepV;

      if (value < min) {
        _this.alloyTouch.to(min);
      } else if (value > max) {
        _this.alloyTouch.to(max);
      } else if (Math.abs(dx) < 30) {
        _this.alloyTouch.to(stepV);
      } else if (dx > 0) {
        _this.alloyTouch.to(stepV + step);
      } else {
        _this.alloyTouch.to(stepV - step);
      }
      _this.currentIndex = index;

      // 开启自动播放
      _this.handleAutoPlay();
      return false;
    };

    _this.animationEnd = function () {
      var len = _this.navItems.length;
      var i = 0;
      for (; i < len; i++) {
        if (i === _this.alloyTouch.currentPage) {
          _this.navItems[i].classList.add('active');
        } else {
          _this.navItems[i].classList.remove('active');
        }
      }
    };

    _this.currentIndex = 0;
    return _this;
  }

  _createClass(ReactAlloyTouch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs = this.refs,
          wrapper = _refs.wrapper,
          scroller = _refs.scroller,
          nav = _refs.nav;
      var _props = this.props,
          options = _props.options,
          items = _props.items;


      this.navItems = nav.querySelectorAll('a');
      (0, _transform2.default)(scroller, true);

      var alloyOptions = _extends({
        touch: wrapper, //反馈触摸的dom
        vertical: false, //不必需，默认是true代表监听竖直方向touch
        target: scroller, //运动的对象
        property: 'translateX', //被运动的属性
        min: wrapper.clientWidth * -(items.length - 1), //不必需,运动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        step: wrapper.clientWidth,
        spring: true, //不必需,是否有回弹效果。默认是true
        inertia: false, //不必需,是否有惯性。默认是true
        touchStart: this.touchStart,
        touchEnd: this.touchEnd,
        animationEnd: this.animationEnd
      }, options || {});

      // 初始化 alloyTouch 实例
      this.alloyTouch = new _AlloyTouch2.default(alloyOptions);
      this.handleAutoPlay();
    }
  }, {
    key: 'handleAutoPlay',


    // 自动播放
    value: function handleAutoPlay() {
      var _this2 = this;

      var _props2 = this.props,
          autoPlay = _props2.autoPlay,
          items = _props2.items;

      var len = items.length;
      if (autoPlay) {
        this.timerId = setInterval(function () {
          var step = _this2.alloyTouch.step;

          var stepV = _this2.currentIndex * step * -1;
          _this2.alloyTouch.to(stepV);
          if (_this2.currentIndex >= len - 1) {
            _this2.currentIndex = 0;
          } else {
            _this2.currentIndex++;
          }
        }, autoPlay);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          prefix = _props3.prefix,
          items = _props3.items,
          active = _props3.active,
          events = _props3.events;


      var len = items.length;
      return _react2.default.createElement(
        'div',
        { className: prefix + '-wrapper ' + (className || ''), ref: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: prefix + '-scroller', ref: 'scroller', style: { width: 100 * len + '%' } },
          items.map(function (_ref) {
            var image = _ref.image,
                link = _ref.link;

            if (link) {
              return _react2.default.createElement(
                'a',
                _extends({ key: image, href: link }, events),
                _react2.default.createElement('img', { style: { width: 100 / len + '%' }, src: image })
              );
            }
            return _react2.default.createElement('img', _extends({ key: image, style: { width: 100 / len + '%' }, src: image }, events));
          })
        ),
        _react2.default.createElement(
          'div',
          { className: prefix + '-nav', ref: 'nav' },
          items.map(function (it, index) {
            /*eslint-disable react/no-array-index-key*/
            return _react2.default.createElement('a', { key: index, className: active === index ? 'active' : '' });
          })
        )
      );
    }
  }]);

  return ReactAlloyTouch;
}(_react.Component);

ReactAlloyTouch.propTypes = {
  className: _propTypes2.default.string, // 自定义 className
  prefix: _propTypes2.default.string, // 样式前缀
  options: _propTypes2.default.object, // AlloyTouch 组件选项
  items: _propTypes2.default.array, // 轮播图
  active: _propTypes2.default.number, // 当前活动轮播图
  autoPlay: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]), // 是否自动播放
  events: _propTypes2.default.object // 自定义各种事件
};
ReactAlloyTouch.defaultProps = {
  className: '',
  prefix: 'carousel',
  active: 0,
  autoPlay: 4000, // 默认一4秒播放一次
  events: {}
};
exports.default = ReactAlloyTouch;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlloyTouch = __webpack_require__(2);

var _AlloyTouch2 = _interopRequireDefault(_AlloyTouch);

var _transform = __webpack_require__(3);

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 基于腾讯组件 https://github.com/AlloyTeam/AlloyTouch 实现
var ReactAlloyTouch = function (_Component) {
  _inherits(ReactAlloyTouch, _Component);

  //可能需要传入的参数
  function ReactAlloyTouch(props) {
    _classCallCheck(this, ReactAlloyTouch);

    var _this = _possibleConstructorReturn(this, (ReactAlloyTouch.__proto__ || Object.getPrototypeOf(ReactAlloyTouch)).call(this, props));

    _this.touchStart = function () {
      // 先删除
      clearInterval(_this.timerId);
    };

    _this.touchEnd = function (evt, value, index) {
      var _this$alloyTouch = _this.alloyTouch,
          step = _this$alloyTouch.step,
          min = _this$alloyTouch.min,
          max = _this$alloyTouch.max;

      var stepV = index * step * -1;
      var dx = value - stepV;

      if (value < min) {
        _this.alloyTouch.to(min);
      } else if (value > max) {
        _this.alloyTouch.to(max);
      } else if (Math.abs(dx) < 30) {
        _this.alloyTouch.to(stepV);
      } else if (dx > 0) {
        _this.alloyTouch.to(stepV + step);
      } else {
        _this.alloyTouch.to(stepV - step);
      }
      _this.currentIndex = index;

      // 开启自动播放
      _this.handleAutoPlay();
      return false;
    };

    _this.animationEnd = function () {
      var len = _this.navItems.length;
      var i = 0;
      for (; i < len; i++) {
        if (i === _this.alloyTouch.currentPage) {
          _this.navItems[i].classList.add('active');
        } else {
          _this.navItems[i].classList.remove('active');
        }
      }

      if (typeof _this.props.onSlideChange === 'function') _this.props.onSlideChange(_this.alloyTouch.currentPage);
    };

    _this.SlideTo = function (index) {
      var step = _this.alloyTouch.step;

      var stepV = index * step * -1;
      _this.alloyTouch.to(stepV);
    };

    _this.currentIndex = 0;
    return _this;
  }

  _createClass(ReactAlloyTouch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs = this.refs,
          wrapper = _refs.wrapper,
          scroller = _refs.scroller,
          nav = _refs.nav,
          menu = _refs.menu;
      var _props = this.props,
          options = _props.options,
          items = _props.items,
          prefix = _props.prefix;


      this.navItems = nav.querySelectorAll('a');
      (0, _transform2.default)(scroller);

      var alloyOptions = _extends({
        touch: wrapper, //反馈触摸的dom
        vertical: false, //不必需，默认是true代表监听竖直方向touch
        target: scroller, //运动的对象
        property: 'translateX', //被运动的属性
        min: wrapper.clientWidth * -(items.length - 1), //不必需,运动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        step: wrapper.clientWidth,
        spring: true, //不必需,是否有回弹效果。默认是true
        inertia: false, //不必需,是否有惯性。默认是true
        touchStart: this.touchStart,
        touchEnd: this.touchEnd,
        animationEnd: this.animationEnd
      }, options || {});

      // 初始化 alloyTouch 实例
      this.alloyTouch = new _AlloyTouch2.default(alloyOptions);
      this.handleAutoPlay();
    }

    //给外部组件提供接口

  }, {
    key: 'handleAutoPlay',


    // 自动播放
    value: function handleAutoPlay() {
      var _this2 = this;

      var _props2 = this.props,
          autoPlay = _props2.autoPlay,
          items = _props2.items;

      var len = items.length;
      if (autoPlay) {
        this.timerId = setInterval(function () {
          var step = _this2.alloyTouch.step;

          var stepV = _this2.currentIndex * step * -1;
          _this2.alloyTouch.to(stepV);
          if (_this2.currentIndex >= len - 1) {
            _this2.currentIndex = 0;
          } else {
            _this2.currentIndex++;
          }
        }, autoPlay);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          prefix = _props3.prefix,
          items = _props3.items,
          active = _props3.active,
          showDot = _props3.showDot,
          events = _props3.events;


      var len = items.length;
      return _react2.default.createElement(
        'div',
        { className: prefix + '-wrapper ' + (className || ''), ref: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: prefix + '-scroller', ref: 'scroller', style: { width: 100 * len + '%' } },
          items.map(function (item, index) {
            /*eslint-disable react/no-array-index-key*/
            return _react2.default.createElement(
              'div',
              _extends({ key: index, className: 'swiper-panel', style: { width: 100 / len + '%' } }, events),
              item
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: prefix + '-nav', ref: 'nav', style: { display: showDot ? 'inline-block' : 'none' } },
          items.map(function (it, index) {
            /*eslint-disable react/no-array-index-key*/
            return _react2.default.createElement('a', { key: index, className: active === index ? 'active' : '' });
          })
        )
      );
    }
  }]);

  return ReactAlloyTouch;
}(_react.Component);

ReactAlloyTouch.propTypes = {
  className: _propTypes2.default.string, // 自定义 className
  prefix: _propTypes2.default.string, // 样式前缀
  options: _propTypes2.default.object, // AlloyTouch 组件选项
  items: _propTypes2.default.array, // 轮播图
  showDot: _propTypes2.default.bool, //是否显示点
  active: _propTypes2.default.number, // 当前活动轮播图
  autoPlay: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]), // 是否自动播放
  events: _propTypes2.default.object, // 自定义各种事件
  onSlideChange: _propTypes2.default.func
};
ReactAlloyTouch.defaultProps = {
  className: '',
  prefix: 'carousel',
  active: 0,
  autoPlay: 4000, // 默认一4秒播放一次
  tabsMenu: null,
  events: {}
};
exports.default = ReactAlloyTouch;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map