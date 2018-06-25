document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></script>');
import { extend } from './utils'

interface DScrollOptions {
    el: Element
    opts?: Object
}

class DScroll implements DScrollOptions {
    el: Element
    opts?: Object
    constructor(ele: Element, opts?: Object) {
        this.el = ele;
        this.opts = opts;
        this._init()
    }

    private _init() {

    }
}

const ds = new DScroll(document.querySelector('#app'));