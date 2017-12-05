'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AlloyTouch = require('./AlloyTouch');

var _AlloyTouch2 = _interopRequireDefault(_AlloyTouch);

var _transform = require('alloytouch/transformjs/transform');

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