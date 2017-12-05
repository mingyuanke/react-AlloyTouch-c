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