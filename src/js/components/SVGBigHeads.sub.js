gulp_place("../utils_private/*.sub.js", "files_once");/* global createSVG, createUSE, style, setHref */
class SVGBigHeads extends HTMLElement{
    constructor(){ super(); this._attributes= {}; style.create(); }
    static get observedAttributes() { return Object.keys(this.attributes); }
    static get attributes(){ return { href: "", gender: "man" }; }
    get href(){ return this.getAttribute("href"); }
    set href(val){ return this.setAttribute("href", val); }
    get gender(){ return this.getAttribute("gender"); }
    set gender(val){ return this.setAttribute("gender", val); }
    attributeChangedCallback(name, value_old, value_new){
        if(value_new===value_old) return false;
        this._attributes[name]= value_new !== null ? value_new : this.constructor.attributes[name];
        this.update(name);
    }
    connectedCallback(){
        this._svg= this.appendChild(createSVG());
        const { href }= this._attributes;
        this._els= { base: this._svg.appendChild(createUSE(href+"#base")) };
        this.update("gender");
    }
    update(type){
        if(!this._svg) return false;
        switch (type){
            case "gender":
                this.updateGender();
                break;
            default :
                setHref(this._els.base, this._attributes.href+"#base");
                this.updateGender();
        }
    }
    updateGender(){
        const { href, gender }= this._attributes;
        let { breasts }= this._els;
        const is_man= gender==="man";
        if((breasts&&!is_man)||(!breasts&&is_man))
            return breasts ? setHref(breasts, href+"#breasts") : false;
        if(is_man){
            breasts.remove();
            return Reflect.deleteProperty(this._els, "breasts");
        }
        this._els.breasts= this._svg.appendChild(createUSE(href+"#breasts"));
    }
}
customElements.define("svg-bigheads", SVGBigHeads);