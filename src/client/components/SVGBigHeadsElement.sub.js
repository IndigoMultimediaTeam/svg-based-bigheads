/* global safe_layers */
gulp_place("../services/*.sub.js", "files_once");/* global style_global, data, avatar_svg */
gulp_place("../avatar_helpers/*.sub.js", "files_once");/* global avatarPartHref, avatarUpdateHair, findSafeLayer */
gulp_place("../elements_helpers/setHref.sub.js", "file_once");/* global setHref */
gulp_place("../elements_helpers/mixinObservedAttributes.sub.js", "file_once");/* global mixinObservedAttributes */
/** @extends {HTMLElement} */
class SVGBigHeadsElement extends mixinObservedAttributes(HTMLElement, data.attributes_keys){
    static get tag_name(){ return "svg-bigheads"; }
    constructor(){ super(); style_global.create(); }
    attributeChangedCallback(name, value_old, value_new){
        if(value_new===value_old) return false;
        data.setAttribute(data.get(this), name, value_new);
        this.update(name);
        return true;
    }
    connectedCallback(){
        const svg= avatar_svg.create(this);
        const d= data.get(this);
        const appendUSE= avatar_svg.appendUSE.bind(null, svg, d);
        safe_layers.forEach(v=> {
            if(!Array.isArray(v))//is nullable (data.isNullable)
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
        if(data.isFromMultiplePieces(type)) return avatarUpdateHair(svg, d);
        const gotoEnd= ()=> type==="hat"&&avatarUpdateHair(svg, d);
        
        const value= data.getAttribute(d, type);
        if(value==="none")
            return gotoEnd(data.deleteElement(d, type));
        
        if(data.isNullable(type)&&!data.hasElement(d, type))
            return gotoEnd(avatar_svg.insertAfterUSE(svg, d, type, findSafeLayer(d, type)));

        return gotoEnd(setHref(data.getElement(d, type), avatarPartHref(d, type, value)));
    }
}
customElements.define(SVGBigHeadsElement.tag_name, SVGBigHeadsElement);