const SVGBigHeads= (function SVGBigHeads_iief(){
    "use strict";
    const { colors, parts }= JSON.parse(`{"colors":{"hair":"#d96e27","clothes":"#d67070","hat":"#5bcaf0","mouth":"#dd3e3e","skin":"#fdd2b2"},"parts":{"accessory":["none","glasses","pincenez","sunglasses"],"breasts":["none","breasts"],"facialhair":["none","big","stubble"],"hair":{"none":{"front":true},"afro":{"front":true,"top":true},"balding":{"front":true},"bob":{"front":true},"bold":{"front":true},"bun":{"front":true,"top":true},"buzz":{"front":true},"long":{"front":true},"long01":{"back":true,"parent":"long"},"long02":{"back":true,"parent":"long"},"long03":{"back":true,"parent":"long"},"mohawk":{"top":true},"serious":{"front":true},"short":{"front":true},"simple":{"front":true},"stubble":{"front":true}},"hat":["none","beanie","turban"],"nose":["none","big","normal","up"],"base":["base"],"clothes":["dressshirt","tanktop","tshirt","vneck"],"eyebrow":["angry","neutral","smiling"],"eyes":["narrower","round","semiround","simple","thin"],"mouth":["lips","neutral","open","smile"]}}`);
    /**
     * @typedef ConfigKeys
     * @type {"href"|ElsKeys}
     */
    /**
     * @typedef ElsKeys
     * @type {"base"|"breasts"|"eyes"}
     */
    /**
     * @typedef Data
     * @type {object}
     * @property {Config} attributes
     * @property {Object.<ElsKeys, SVGElement|SVGUseElement>} els
     */
    /**
     * @namespace
     * */
    const data= {
        /**
         * For default values see {@link data.attributes_default}
         * @typedef Config
         * @type {object}
         * @property {string} [href] Target of svg file
         * @property {string} [base]
         * @property {string} [breasts]
         * @property {string} [eyes]
         */
        /**
         * Another loaded from `parts`, see part labeled by comment: #parts.json
         * @type {Config}
         * */
        attributes_default: { href: "" },
        get attributes_keys(){ return Object.keys(this.attributes_default); },
        
        /** @type {WeakMap<SVGBigHeads, Data>} */
        storage: new WeakMap(),
        
        /**
         * @param {SVGBigHeads} target 
         */
        create(target){ const attributes= JSON.parse(JSON.stringify(this.attributes_default)); this.storage.set(target, { attributes, els: {} }); },
        /**
         * @param {SVGBigHeads} target 
         * @returns {Data}
         */
        get(target){ return this.storage.get(target); },
        
        /**
         * @param {Data} data 
         * @param {ConfigKeys} name 
         * @param {string|null} [value=null] 
         */
        setAttribute(data, name, value= null){ return Reflect.set(data.attributes, name, value===null ? this.attributes_default[name] : value); },
        /**
         * @param {Data} data 
         * @param {ConfigKeys} name 
         */
        getAttribute({ attributes }, name){ return attributes[name]; },
        /**
         * @param {Data} data 
         * @param {ElsKeys} name 
         * @returns {SVGUseElement|undefined}
         */
        getElement(data, name){ return Reflect.get(data.els, name); },
        /**
         * @param {Data} data 
         * @param {ElsKeys} name 
         * @param {SVGUseElement} el 
         */
        setElement(data, name, el){ return Reflect.set(data.els, name, el); },
        /**
         * @param {Data} data 
         * @param {ElsKeys} name 
         */
        deleteElement({ els }, name){
            if(!Reflect.has(els, name)) return false;
            Reflect.get(els, name).remove();
            return Reflect.deleteProperty(els, name);
        }
    };
    /* #parts.json */
    for(let i=0, keys= Object.keys(parts), key;( key= keys[i] ); i++){
        const val= Reflect.get(parts, key);
        Reflect.set(data.attributes_default, key, Array.isArray(val) ? val[0] : Object.keys(val)[0]);
    }
    /**
     * 
     * @param {Data} d 
     * @param {string} href 
     * @param {ConfigKeys} type 
     * @returns 
     */
    function avatarPartHref(d, href, type){
        const name= data.getAttribute(d, type);
        return `${href}#${type}-${name}`;
    }
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
    const style_global= {
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
            const { href, base }= d.attributes;
            data.setElement(d, "base", this._svg.appendChild(createUSE(href+"#"+base)));
            this.appendUSE(d, "eyes", href);
            this.update("breasts");
        }
        /**
         * Append `<use>` to internal `<svg>`.
         * @param {Data} d
         * @param {ElsKeys} name
         * @param {string} href
         * @returns {SVGUseElement}
         */
        appendUSE(d, name, href){
            const use_el= createUSE(avatarPartHref(d, href, name));
            data.setElement(d, name, this._svg.appendChild(use_el));
            return use_el;
        }
        update(type){
            if(!this._svg) return false;
            const d= data.get(this);
            switch (type){
                case "breasts":
                    return this.updateGender(d);
                case "href":
                    Reflect.set(d, "els", {});
                    this._svg.remove();
                    return this.connectedCallback();
                default:
                    return setHref(
                        data.getElement(d, type),
                        avatarPartHref(d, data.getAttribute(d, "href"), type)
                    );
            }
        }
        updateGender(d){
            const
                breasts_name= data.getAttribute(d, "breasts"),
                href= data.getAttribute(d, "href")+"#"+breasts_name,
                is_man= "none"===breasts_name,
                breasts= data.getElement(d, "breasts");
            if((breasts&&!is_man)||(!breasts&&is_man)) return breasts ? setHref(breasts, href) : false;
            if(is_man) return data.deleteElement(d, "breasts");
            return data.setElement(d, "breasts", this._svg.appendChild(createUSE(href)));
        }
    }

    /* set/get attributes */
    data.attributes_keys.forEach(name=> Reflect.defineProperty(SVGBigHeads.prototype, name, { 
        get(){ return this.getAttribute(name); },
        set(val){ return this.setAttribute(name, val); }
    }));
    customElements.define("svg-bigheads", SVGBigHeads);
    return {  };
})();