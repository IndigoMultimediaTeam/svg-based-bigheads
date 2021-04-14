gulp_place("../services/style_global.sub.js", "file_once");/* global style_global */
gulp_place("../services/data.sub.js", "file_once");/* global data */
gulp_place("../avatar_helpers/hairFullConfig.sub.js", "file_once");/* global hairFullConfig */
gulp_place("../elements_helpers/createSVG.sub.js", "file_once");/* global createSVG */
gulp_place("../elements_helpers/createUSE.sub.js", "file_once");/* global createUSE */
class SVGBigHeadsPart extends HTMLElement{
    constructor(){ super(); style_global.create(); }
    connectedCallback(){
        this._svg= this.appendChild(createSVG());
        const [ href, type, value ]= [ "href", "type", "value" ].map(n=> this.getAttribute(n));
        if(value==="none") return false;
        
        if(!data.isFromMultiplePieces(type))
            return this._svg.appendChild(createUSE(`${href}#${type}-${value}`));
        const config= hairFullConfig(value);
        [ "back", "top", "front" ].forEach(part=> this._svg.appendChild(createUSE(`${href}#${type}-${config[part]}`)));
    }
    nextValue(shift= 1){
        this._svg.remove();
        this.setAttribute("value", data.getNextPartName(
            this.getAttribute("type"),
            this.getAttribute("value"),
            shift
        ));
        return this.connectedCallback();
    }
}
customElements.define("svg-bigheads-part", SVGBigHeadsPart);