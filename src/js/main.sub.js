gulp_place("./utils_private/*.sub.js", "files_once");/* global createSVG, createUSE, style_global, setHref, data, avatarPartHref */
const svg_parts= JSON.parse(`gulp_place("parts.json", "file_once")`);

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
        data.setElement(d, "base", this._svg.appendChild(createUSE(href+"#base")));
        this.appendUSE(d, "eyes", href);
        this.update("gender");
    }
    appendUSE(d, name, href){
        const use_el= createUSE(avatarPartHref(d, href, name));
        data.setElement(d, name, this._svg.appendChild(use_el));
        return use_el;
    }
    update(type){
        if(!this._svg) return false;
        const d= data.get(this);
        switch (type){
            case "gender":
                return this.updateGender(d);
            case "href":
                Reflect.set(d, "els", {});
                this._svg.remove();
                return this.connectedCallback();
            default :
                return setHref(
                    data.getElement(d, type),
                    avatarPartHref(d, data.getAttribute(d, "href"), type)
                );
        }
    }
    updateGender(d){
        const
            href= data.getAttribute(d, "href")+"#breasts",
            is_man= "man"===data.getAttribute(d, "gender"),
            breasts= data.getElement(d, "breasts");
        
        if((breasts&&!is_man)||(!breasts&&is_man)) return breasts ? setHref(breasts, href) : false;
        if(is_man) return data.deleteElement(d, "breasts");
        return data.setElement(d, "breasts", this._svg.appendChild(createUSE(href)));
    }
}
gulp_place("./SVGBigHeads/*.sub.js", "files_once");
customElements.define("svg-bigheads", SVGBigHeads);