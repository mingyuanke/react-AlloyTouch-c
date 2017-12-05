'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alloytouch = require('alloytouch');

var _alloytouch2 = _interopRequireDefault(_alloytouch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 重新设置 AlloyTouch 方法
_alloytouch2.default.prototype.setOption = function (key, value) {
  this[key] = value;
};

exports.default = _alloytouch2.default;