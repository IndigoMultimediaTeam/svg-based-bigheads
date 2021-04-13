gulp_place("../singletons/data.sub.js", "file_once");/* global data */
/* global SVGBigHeads */
/* set/get attributes */
data.attributes_keys.forEach(name=> Reflect.defineProperty(SVGBigHeads.prototype, name, { 
    get(){ return this.getAttribute(name); },
    set(val){ return this.setAttribute(name, val); }
}));