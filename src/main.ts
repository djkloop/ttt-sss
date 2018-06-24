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
        console.log(this.opts, this.el)
    }
}

const ds = new DScroll(document.querySelector('#app'));