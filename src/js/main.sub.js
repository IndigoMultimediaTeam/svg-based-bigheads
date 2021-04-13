const { colors, safe_layers, parts }= getFromJSON();
gulp_place("./utils_private/*.sub.js", "files_once");/* global createSVG, createUSE, style_global, setHref, data, avatarPartHref, insertAfter */

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
        const value= data.getAttribute(d, type);
        if(value==="none")
            return data.deleteElement(d, type);
        
        const href= data.getAttribute(d, "href");
        if(data.attributes_nullable.indexOf(type)!==-1)
            return this.insertAfterUSE(d, type, href, findLayer(d, type));

        return setHref(
            data.getElement(d, type),
            avatarPartHref(d, href, type, value)
        );
    }
}
gulp_place("./SVGBigHeads/*.sub.js", "files_once");
customElements.define("svg-bigheads", SVGBigHeads);

/**
 * @param {Data} d
 * @param {_JSON_parts_keys} type
 * @returns {SVGUseElement}
 */
function findLayer(d, type){
    let out;
    for(let i=0, j;( j= safe_layers[i] ); i++){
        if(!Array.isArray(j)){ out= j; continue; }
        const sub_layer_index= j.indexOf(type);
        if(sub_layer_index===-1) continue;
        if(sub_layer_index!==0)
            out= j[sub_layer_index-1];
        break;
    }
    return data.getElement(d, out);
}
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