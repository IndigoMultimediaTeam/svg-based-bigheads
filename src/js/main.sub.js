const { colors, safe_layers, parts }= getFromJSON();
gulp_place("./singletons/*.sub.js", "files_once");/* global style_global, data */
gulp_place("./elements_helpers/*.sub.js", "files_once");/* global createSVG, createUSE, setHref, createGroupedElement */
gulp_place("./avatar_helpers/*.sub.js", "files_once");/* global avatarPartHref, findSafeLayer, hairFullConfig */

class SVGBigHeads extends HTMLElement{
    constructor(){ super(); data.create(this); style_global.create(); }
    static get observedAttributes() { return data.attributes_keys; }
    /* see: attributes--set-get.sub.js */
    attributeChangedCallback(name, value_old, value_new){
        if(value_new===value_old) return false;
        data.setAttribute(data.get(this), name, value_new);
        this.update(name);
    }
    connectedCallback(){
        this._svg= this.appendChild(createSVG());
        const d= data.get(this);
        const href= data.getAttribute(d, "href");
        safe_layers.forEach(v=> {
            if(!Array.isArray(v))
                return this.appendUSE(d, v, href);
            v.forEach(v=> {
                const type= data.getAttribute(d, v);
                if(type!=="none") return this.appendUSE(d, v, href);
            });
        });
        this.updateHair(d, href);
    }
    /**
     * Append `<use>` to internal `<svg>`.
     * @param {Data} d
     * @param {_JSON_parts_keys} name
     * @param {string} href
     * @returns {SVGUseElement}
     */
    appendUSE(d, name, href){
        const use_el= createUSE(avatarPartHref(d, href, name));
        data.setElement(d, name, this._svg.appendChild(use_el));
        return use_el;
    }
    /**
     * Insert `<use>` to internal `<svg>` before `el`.
     * @param {Data} d
     * @param {_JSON_parts_keys} name
     * @param {string} href
     * @param {SVGUseElement} el
     * @returns {SVGUseElement}
     */
    insertAfterUSE(d, name, href, el){
        const use_el= createUSE(avatarPartHref(d, href, name));
        data.setElement(d, name, this._svg.insertBefore(use_el, el.nextElementSibling));
        return use_el;
    }
    /** @param {ConfigKeys} type */
    update(type){
        if(!this._svg) return false;
        const d= data.get(this);
        if(type==="href"){
            Reflect.set(d, "els", {});
            this._svg.remove();
            return this.connectedCallback();
        }
        const href= data.getAttribute(d, "href");
        if(type==="hair") return this.updateHair(d, href);
        const gotoEnd= ()=> type==="hat"&&this.updateHair(d, href);
        
        const value= data.getAttribute(d, type);
        if(value==="none")
            return gotoEnd(data.deleteElement(d, type));
        
        if(data.attributes_nullable.indexOf(type)!==-1)
            return gotoEnd(this.insertAfterUSE(d, type, href, findSafeLayer(d, type)));

        return gotoEnd(setHref(data.getElement(d, type), avatarPartHref(d, href, type, value)));
    }
    /**
     * @param {Data} d 
     * @param {string} href 
     */
    updateHair(d, href){
        const type= data.getAttribute(d, "hair");
        data.deleteElement(d, "hair");
        const has_hat= data.getAttribute(d, "hat")!=="none";
        const gotoEnd= is_big_hat=> has_hat&&data.getElement(d, "hat").classList.toggle(style_global.options.big_hat, is_big_hat);
        if(type==="none") return gotoEnd(0);
        const config= hairFullConfig(type);
        const els= Object.keys(config).reduce(function(els, curr){
            if(curr!=="parent"&&config[curr]&&(curr!=="top"||!has_hat))
                Reflect.set(els, curr, createUSE(avatarPartHref(d, href, "hair", (config.parent&&curr==="front" ? config.parent : type)+"-"+curr)));
            return els;
        }, {});
        Object.keys(els).forEach(name=> name==="front" ? 
            this._svg.insertBefore(els[name], findSafeLayer(d, "accessory")) :
            this._svg.insertBefore(els[name], data.getElement(d, "base")));
        data.setElement(d, "hair", createGroupedElement(els));
        return gotoEnd(Reflect.has(els, "back"));
    }
}
gulp_place("./SVGBigHeads/*.sub.js", "files_once");
customElements.define("svg-bigheads", SVGBigHeads);

gulp_place("parts.types.sub.js", "file_once");
/**
 * @typedef json
 * @type {object}
 * @property {_JSON_colors} colors
 * @property {_JSON_parts} parts
 * @property {_JSON_safe_layers} safe_layers
 */
/** @returns {json} */
function getFromJSON(){ return JSON.parse(`gulp_place("parts.json", "file_once")`); }