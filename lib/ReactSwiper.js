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