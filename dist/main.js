"use strict";
var DScroll = /** @class */ (function () {
    function DScroll(ele, opts) {
        this.el = ele;
        this.opts = opts;
        this._init();
    }
    DScroll.prototype._init = function () {
        console.log(this.opts, this.el);
    };
    return DScroll;
}());
var ds = new DScroll(document.querySelector('#app'));
