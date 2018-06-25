/*
  ts-2.js v1.0.0
  Created Date 2018-04-15 14:22:14
  Last Modified 2018-06-25 01:19:56
  当前DEMO - 纯粹是为了学习移动端滑动事件.
  Released under the MIT License.
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></script>');
    var DScroll = /** @class */function () {
        function DScroll(ele, opts) {
            this.el = ele;
            this.opts = opts;
            this._init();
        }
        DScroll.prototype._init = function () {};
        return DScroll;
    }();
    var ds = new DScroll(document.querySelector('#app'));

})));
