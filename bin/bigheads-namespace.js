const SVGBigHeads= (function SVGBigHeads_iief(){
    "use strict";
    const parts= JSON.parse(`{"colors":{"hair":"#d96e27","clothes":"#d67070","hat":"#5bcaf0","mouth":"#dd3e3e","skin":"#fdd2b2"},"base":["base","breasts"],"accessory":["glasses","pincenez","sunglasses"],"clothes":["dressshirt","tanktop","tshirt","vneck"],"eyebrow":["angry","neutral","smiling"],"eyes":["narrower","round","semiround","simple","thin"],"facialhair":["big","stubble"],"hair":{"afro":{"front":true,"top":true},"balding":{"front":true},"bob":{"front":true},"bold":{"front":true},"bun":{"front":true,"top":true},"buzz":{"front":true},"long":{"front":true},"long01":{"back":true,"parent":"long"},"long02":{"back":true,"parent":"long"},"long03":{"back":true,"parent":"long"},"mohawk":{"top":true},"serious":{"front":true},"short":{"front":true},"simple":{"front":true},"stubble":{"front":true}},"hat":["beanie","turban"],"mouth":["lips","neutral","open","smile"],"nose":["big","normal","up"]}`);
    /**
     * @callback __createElementNS
     * @returns {SVGElement|SVGUseElement}
     */
    /**
     * Creates elemnet in *svg* namespace
     * @type {__createElementNS}
     * @private
     * @global
     */
    const createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");

    /** @returns {SVGElement} */
    function createSVG(){
        const svg= createElement("svg");
        svg.setAttribute("viewBox", "0 0 1000 990");
        return svg;
    }

    /**
     * Sets 'xlink:href' for given element
     * @private
     * @global
     * @param {SVGUseElement} element
     * @param {String} value
     */
    const setHref= (element, value)=> element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
    /**
     * @param {string} href 
     * @returns {SVGUseElement}
     */
    function createUSE(href){
        const use= createElement("use");
        setHref(use, href);
        return use;
    }

    /**
     * Contains options for generating default styles for `<svg-bigheads>`. Changes makes sence only before fisrt `<svg-bigheads>` is created. See {@link style.cerate}.
     * @typedef {Object} style_options
     * @property {boolean} [allow=true] Allow creating global default styles
     * @property {string} [fit=contain] CSS `fit` property of `<svg>` inside `<svg-bigheads>`
     */
    /**
     * @namespace
     * @private
     * @global
     */
    const style= {
        /**
         * @property {style_options} options
         * @memberof style
         * @public
         */
        options: { allow: true, fit: "contain" },
        /**
         * Keeping information the global style was created – see {@link style.cerate}
         * @property {boolean} [is_created=false]
         * @memberof style
         * @private
         */
        is_created: false,
        /**
         * Creates new `<style>` inside `<head>` with default styling of `<svg-bigheads>` (displays block and size)
         * @method
         * @memberof style
         * @public
         */
        create(){
            if(!this.options.allow||this.is_created) return false;
            const style_el= document.createElement("style");
            const { fit }= this.options;
            style_el.innerHTML=
                `svg-bigheads svg-bigheads-part { display: none; }` +
                `svg-bigheads svg { width: 100%; height: 100%; object-fit: ${fit}; }`;
            document.head.appendChild(style_el);
            this.is_created= true;
        }
    };
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
    return {  };
})();