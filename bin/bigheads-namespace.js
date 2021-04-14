/* jshint maxdepth: 4 */
const SVGBigHeads= (function SVGBigHeads_iief(){
    "use strict";
    const { colors, safe_layers, parts }= getFromJSON();
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
    /**
     * @typedef GroupedElement
     * @type {Object}
     * @property {SVGUseElement} [front] 
     * @property {SVGUseElement} [top] 
     * @property {SVGUseElement} [back] 
     * @property {function} remove Removes all elements
     */
    /**
     * @param {object} els_object 
     * @param {SVGUseElement} [els_object.front] 
     * @param {SVGUseElement} [els_object.top] 
     * @param {SVGUseElement} [els_object.back] 
     * @returns {GroupedElement}
     */
    function createGroupedElement(els_object){
        const keys= Object.keys(els_object);
        return Object.assign({ remove(){ keys.forEach(el=> this[el].remove()); } }, els_object);
    }

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
     * @typedef ConfigKeys
     * @type {"href"|_JSON_parts_keys}
     */
    /**
     * @typedef _PreConfig
     * @type {object}
     * @property {string} [href] Target of svg file
     */
    /**
     * @typedef Data
     * @type {object}
     * @property {Config} attributes
     * @property {Object.<_JSON_parts_keys, SVGElement|SVGUseElement>} els
     */
    /**
     * @typedef Config
     * @type {_PreConfig & _JSON_config_parts}
     */
    /** @namespace * */
    const data= (function(){
        const { attributes_default, attributes_keys, attributes_nullable, attributes_objectbased }= attributesInit();
        /** @type {WeakMap<SVGBigHeads, Data>} */
        const storage= new WeakMap();
        return {
             attributes_default, attributes_keys, attributes_nullable, attributes_objectbased,
            /**
             * @param {SVGBigHeads} target 
             */
            create(target){ const attributes= JSON.parse(JSON.stringify(attributes_default)); storage.set(target, { attributes, els: {} }); },
            /**
             * @param {SVGBigHeads} target 
             * @returns {Data}
             */
            get(target){ return storage.get(target); },
            
            /**
             * @param {Data} data 
             * @param {ConfigKeys} name 
             * @param {string|null} [value=null] 
             */
            setAttribute(data, name, value= null){ return Reflect.set(data.attributes, name, value===null ? attributes_default[name] : value); },
            /**
             * @param {Data} data 
             * @param {ConfigKeys} name 
             */
            getAttribute({ attributes }, name){ return attributes[name]; },
            /**
             * @param {Data} data 
             * @param {_JSON_parts_keys} name 
             * @returns {boolean}
             */
            hasElement(data, name){ return Reflect.has(data.els, name); },
            /**
             * @param {Data} data 
             * @param {_JSON_parts_keys} name 
             * @returns {SVGUseElement|GroupedElement|undefined}
             */
            getElement(data, name){ return Reflect.get(data.els, name); },
            /**
             * @param {Data} data 
             * @param {_JSON_parts_keys} name 
             * @param {SVGUseElement|GroupedElement} el 
             */
            setElement(data, name, el){ return Reflect.set(data.els, name, el); },
            /**
             * @param {Data} data 
             * @param {_JSON_parts_keys} name 
             */
            deleteElement({ els }, name){
                if(!Reflect.has(els, name)) return false;
                Reflect.get(els, name).remove();
                return Reflect.deleteProperty(els, name);
            }
        };
        function attributesInit(){
            /**
             * Another loaded from `parts`, see part labeled by comment: #parts.json
             * @type {Config}
             * */
            const attributes_default= { href: "" };
            /**
             * The names of parts with "none" (except “object-based” eg. hairs), see part labeled by comment: #parts.json
             * @type {_JSON_parts_keys[]}
             */
            const attributes_nullable= [];
            /**
             * The names of “object-based” parts (for now hairs), see part labeled by comment: #parts.json
             * @type {_JSON_parts_keys[]}
             */
            const attributes_objectbased= [];
            for(let i=0, keys= Object.keys(parts), key;( key= keys[i] ); i++){
                const val= Reflect.get(parts, key);
                let parts_names;
                if(Array.isArray(val)){
                    parts_names= val;
                    if(parts_names.indexOf("none")!==-1)
                        attributes_nullable.push(key);
                } else {
                    parts_names= Object.keys(val);
                    attributes_objectbased.push(key);
                }
                Reflect.set(attributes_default, key, parts_names[0]);
            }
            const attributes_keys= Object.keys(attributes_default);
            return { attributes_default, attributes_keys, attributes_nullable, attributes_objectbased };
        }
    })();
    /**
     * @param {Data} d 
     * @param {ConfigKeys} type 
     * @param {string} [name] Defaults to value saved in `d`
     * @returns 
     */
    function avatarPartHref(d, type, name= data.getAttribute(d, type)){
        return `${data.getAttribute(d, "href")}#${type}-${name}`;
    }



    /**
     * @param {Data} d
     * @param {_JSON_parts_keys} type
     * @returns {SVGUseElement}
     */
    function findSafeLayer(d, type){
        for(let i=0, layer_main, layer_nth;( layer_nth= safe_layers[i] ); i++){
            if(!Array.isArray(layer_nth)){ layer_main= layer_nth; continue; }
            const sub_layer_index= layer_nth.indexOf(type);
            if(sub_layer_index===-1) continue;
            
            return data.getElement(d, trySubLayer(layer_nth, sub_layer_index) || layer_main);
        }
        
        function trySubLayer(layer_main, sub_layer_index){
            if(sub_layer_index===0) return false;
            for(let j= sub_layer_index-1, layer_sub; j>=0; j--){
                layer_sub= layer_main[j];
                if(!data.hasElement(d, layer_sub)) continue;
                return layer_sub;
            }
            return false;
        }
    }
    /**
     * @param {string} type 
     * @returns {_JSON_Tobject}
     */
    function hairFullConfig(type){
        const config= parts.hair[type];
        return Object.assign({}, config, config.parent ? parts.hair[config.parent] : null);
    }


    /**
     * Contains options for generating default styles for `<svg-bigheads>`. Changes makes sence only before fisrt `<svg-bigheads>` is created. See {@link style.cerate}.
     * @typedef {Object} style_options
     * @property {boolean} [allow=true] Allow creating global default styles
     * @property {string} [fit=contain] CSS `fit` property of `<svg>` inside `<svg-bigheads>`
     * @property {string} [big_hat=bigheads-hat-longhairs] Class name for making hat bigger when long hair
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
        options: { allow: true, fit: "contain", big_hat: "bigheads-hat-longhairs" },
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
            const { fit, big_hat }= this.options;
            style_el.innerHTML=
                `svg-bigheads svg { all: unset; width: 100%; height: 100%; object-fit: ${fit}; }` +
                `svg-bigheads .${big_hat} { transform: scale(1.1) translate(-5%, -7.5%); }`;
            document.head.appendChild(style_el);
            this.is_created= true;
        }
    };





    /**
     * @param {SVGElement} svg
     * @param {Data} d
     * */
    function avatarUpdateHair(svg, d){
        const type= data.getAttribute(d, "hair");
        data.deleteElement(d, "hair");
        const has_hat= data.getAttribute(d, "hat")!=="none";
        const gotoEnd= is_big_hat=> has_hat&&data.getElement(d, "hat").classList.toggle(style_global.options.big_hat, is_big_hat);
        if(type==="none") return gotoEnd(0);
        const config= hairFullConfig(type);
        const els= Object.keys(config).reduce(function(els, curr){
            if(curr!=="parent"&&config[curr]&&(curr!=="top"||!has_hat))
                Reflect.set(els, curr, createUSE(avatarPartHref(d, "hair", (config.parent&&curr==="front" ? config.parent : type)+"-"+curr)));
            return els;
        }, {});
        Object.keys(els).forEach(name=> name==="front" ? 
            svg.insertBefore(els[name], findSafeLayer(d, "hat")) :
            svg.insertBefore(els[name], data.getElement(d, "base")));
        data.setElement(d, "hair", createGroupedElement(els));
        return gotoEnd(Reflect.has(els, "back"));
    }



    const avatar_svg= (function(){
        /** @type {WeakMap<SVGBigHeads, SVGElement>} */
        const storage= new WeakMap();
        return {
            /** @param {SVGBigHeads} big_heads */
            create(big_heads){
                const svg= big_heads.appendChild(createSVG());
                storage.set(big_heads, svg);
                return svg;
            },
            /** @param {SVGBigHeads} big_heads */
            get(big_heads){ return storage.get(big_heads); },
            /**
             * Append `<use>` to internal `<svg>`.
             * @param {SVGElement} svg
             * @param {Data} d
             * @param {_JSON_parts_keys} name
             * @returns {SVGUseElement}
             */
            appendUSE(svg, d, name){
                const use_el= createUSE(avatarPartHref(d, name));
                data.setElement(d, name, svg.appendChild(use_el));
                return use_el;
            },
            /**
             * Insert `<use>` to `<svg>` before `el`.
             * @param {SVGElement} svg
             * @param {Data} d
             * @param {_JSON_parts_keys} name
             * @param {SVGUseElement} el
             * @returns {SVGUseElement}
             */
            insertAfterUSE(svg, d, name, el){
                const use_el= createUSE(avatarPartHref(d, name));
                data.setElement(d, name, svg.insertBefore(use_el, el.nextElementSibling));
                return use_el;
            },
            /**
             * @param {Data} d 
             * @param {ConfigKeys} type 
             * @param {string} [name] Defaults to value saved in `d`
             * @returns 
             */
            avatarPartHref(d, type, name= data.getAttribute(d, type)){
                return `${data.getAttribute(d, "href")}#${type}-${name}`;
            },
            /** @param {SVGBigHeads} big_heads */
            remove(big_heads){
                storage.get(big_heads).remove();
                Reflect.deleteProperty(storage, big_heads);
            }
        };
    })();






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
    /* Automaticaly created from svg file strucutre */
    /**
     * Final usage of colors are: `--bigheads-color-__color_name__`
     * @typedef _JSON_colors_keys
     * @type {"hair"|"clothes"|"hat"|"mouth"|"skin"}
     */
    /**
     * All svg files options
     * @typedef _JSON_parts_keys
     * @type {"glasses"|"breasts"|"eyebrow"|"facialhair"|"hair"|"hat"|"nose"|"base"|"clothes"|"eyes"|"mouth"}
     */
    /**
     * @typedef _JSON_Tstring
     * @type {string}
     */
    /**
     * @typedef _JSON_Tarray
     * @type {string[]}
     */
    /**
     * @typedef _JSON_Tobject
     * @type {object}
     * @property {boolean} [front] 
     * @property {boolean} [back] 
     * @property {boolean} [top] 
     * @property {string} [[parent]=The name of hair to be also used] 
     */
    /**
     * @typedef _JSON_colors
     * @type {object}
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hair 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} clothes 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hat 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} mouth 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} skin 
     */
    /**
     * @typedef _JSON_parts
     * @type {object}
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} glasses 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} breasts 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} eyebrow 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} facialhair 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hair 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hat 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} nose 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} base 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} clothes 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} eyes 
     * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} mouth 
     */
    /**
     * @typedef _JSON_config_colors
     * @type {object}
     * @property {string} [hair=#d96e27] 
     * @property {string} [clothes=#d67070] 
     * @property {string} [hat=#5bcaf0] 
     * @property {string} [mouth=#dd3e3e] 
     * @property {string} [skin=#fdd2b2] 
     */
    /**
     * @typedef _JSON_config_parts
     * @type {object}
     * @property {string} [glasses=none] 
     * @property {string} [breasts=none] 
     * @property {string} [eyebrow=none] 
     * @property {string} [facialhair=none] 
     * @property {string} [hair=none] 
     * @property {string} [hat=none] 
     * @property {string} [nose=none] 
     * @property {string} [base=base] 
     * @property {string} [clothes=dressshirt] 
     * @property {string} [eyes=narrower] 
     * @property {string} [mouth=lips] 
     */
    /**
     * @typedef _JSON_safe_layers_nth
     * @type {_JSON_parts_keys[]}
     */
    /**
     * @typedef _JSON_safe_layers
     * @type {_JSON_safe_layers_nth & _JSON_safe_layers_nth[]}
     */
    
    /**
     * @typedef json
     * @type {object}
     * @property {_JSON_colors} colors
     * @property {_JSON_parts} parts
     * @property {_JSON_safe_layers} safe_layers
     */
    /** @returns {json} */
    function getFromJSON(){ return JSON.parse(`{"colors":{"hair":"#d96e27","clothes":"#d67070","hat":"#5bcaf0","mouth":"#dd3e3e","skin":"#fdd2b2"},"safe_layers":["base","eyes","clothes",["facialhair","eyebrow"],"mouth",["nose","breasts","hat","glasses"]],"parts":{"glasses":["none","big","pincenez","sun"],"breasts":["none","breasts"],"eyebrow":["none","angry","neutral","smiling"],"facialhair":["none","big","stubble"],"hair":{"none":{"front":true},"afro":{"front":true,"top":true},"balding":{"front":true},"bob":{"front":true},"bold":{"front":true},"bun":{"front":true,"top":true},"buzz":{"front":true},"long":{"front":true},"long01":{"back":true,"parent":"long"},"long02":{"back":true,"parent":"long"},"long03":{"back":true,"parent":"long"},"mohawk":{"top":true},"serious":{"front":true},"short":{"front":true},"simple":{"front":true},"stubble":{"front":true}},"hat":["none","beanie","turban"],"nose":["none","big","normal","up"],"base":["base"],"clothes":["dressshirt","tanktop","tshirt","vneck"],"eyes":["narrower","round","semiround","simple","thin"],"mouth":["lips","neutral","open","smile"]}}`); }
    return {  };
})();