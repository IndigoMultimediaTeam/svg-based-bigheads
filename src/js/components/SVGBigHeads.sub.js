/* global safe_layers */
gulp_place("../services/*.sub.js", "files_once");/* global style_global, data, avatar_svg */
gulp_place("../elements_helpers/avatarUpdateHair.sub.js", "files_once");/* global avatarUpdateHair */
gulp_place("../elements_helpers/setHref.sub.js", "files_once");/* global setHref */
gulp_place("../avatar_helpers/avatarPartHref.sub.js", "files_once");/* global avatarPartHref */
gulp_place("../avatar_helpers/findSafeLayer.sub.js", "files_once");/* global findSafeLayer */
class SVGBigHeads extends HTMLElement{
    constructor(){ super(); data.create(this); style_global.create(); }
    static get observedAttributes() { return data.attributes_keys; }
    /* for set/get see comment label below: #SVGBigHeads-attributes */
    attributeChangedCallback(name, value_old, value_new){
        if(value_new===value_old) return false;
        data.setAttribute(data.get(this), name, value_new);
        this.update(name);
    }
    connectedCallback(){
        const svg= avatar_svg.create(this);
        const d= data.get(this);
        const appendUSE= avatar_svg.appendUSE.bind(null, svg, d);
        safe_layers.forEach(v=> {
            if(!Array.isArray(v))
                return appendUSE(v);
            v.forEach(v=> {
                const type= data.getAttribute(d, v);
                if(type!=="none") return appendUSE(v);
            });
        });
        avatarUpdateHair(svg, d);
    }
    /** @param {ConfigKeys} type */
    update(type){
        const svg= avatar_svg.get(this);
        if(!svg) return false;
        const d= data.get(this);
        if(type==="href"){//rare situation, so prob. ok just recreate all
            Reflect.set(d, "els", {});
            avatar_svg.remove(this);
            return this.connectedCallback();
        }
        if(type==="hair") return avatarUpdateHair(svg, d);
        const gotoEnd= ()=> type==="hat"&&avatarUpdateHair(svg, d);
        
        const value= data.getAttribute(d, type);
        if(value==="none")
            return gotoEnd(data.deleteElement(d, type));
        
        if(data.attributes_nullable.indexOf(type)!==-1)
            return gotoEnd(avatar_svg.insertAfterUSE(svg, d, type, findSafeLayer(d, type)));

        return gotoEnd(setHref(data.getElement(d, type), avatarPartHref(d, type, value)));
    }
}
/* #SVGBigHeads-attributes */
data.attributes_keys.forEach(name=> Reflect.defineProperty(SVGBigHeads.prototype, name, { 
    get(){ return this.getAttribute(name); },
    set(val){ return this.setAttribute(name, val); }
}));
customElements.define("svg-bigheads", SVGBigHeads);