gulp_place("../services/*.sub.js", "files_once");/* global style_global, data */
gulp_place("../avatar_helpers/hairFullConfig.sub.js", "file_once");/* global hairFullConfig */
gulp_place("../elements_helpers/*.sub.js", "files_once");/* global createSVG, createUSE, mixinObservedAttributes */
gulp_place("./SVGBigHeadsElement.sub.js", "file_once");/* global SVGBigHeadsElement */
/** @extends {HTMLElement} */
class SVGBigHeadsPartElement extends mixinObservedAttributes(HTMLElement, [ "href", "type", "value" ]){
    static get tag_name(){ return SVGBigHeadsElement.tag_name+"-part"; }
    constructor(){ super(); style_global.create(); }
    attributeChangedCallback(name, value_old, value_new){
        if(name==="type") return false;
        if(!this._svg||value_new===value_old) return false;
        return this.connectedCallback();
    }
    connectedCallback(){
        const [ type, value, href ]= this.config;
        if(this._svg) this._svg.remove();
        this._svg= this.appendChild(createSVG());
        if(!type||value==="none") return false;
        
        const appendUSE= name=> this._svg.appendChild(createUSE(`${href}#${type}-${name}`));
        if(!data.isFromMultiplePieces(type))
            return appendUSE(value);
        const config= hairFullConfig(value);
        [ "back", "top", "front" ].forEach(part=> appendUSE(config[part]));
    }
    get config(){
        const [ href, type, value ]= this.constructor.observedAttributes.map(n=> this.getAttribute(n));
        return [ type, value, href ];
    }
    nextValue(shift= 1){
        return this.setAttribute("value", data.getNextPartName(
            this.getAttribute("type"),
            this.getAttribute("value"),
            shift
        ));
    }
}
customElements.define(SVGBigHeadsPartElement.tag_name, SVGBigHeadsPartElement);