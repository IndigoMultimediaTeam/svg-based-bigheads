/**
 * @typedef config
 * @type {object}
 * @property {string} [href=""] Target of svg file
 * @property {string} [gender="man"] Mainly show/hide breasts
 * @property {string} [eyes="simple"] Mainly show/hide breasts
 */
/**
 * @typedef config_keys
 * @type {"href"|"gender"|"eyes"}
 */
/**
 * @typedef els_keys
 * @type {"base"|"breasts"}
 */
/**
 * @typedef Data
 * @type {object}
 * @property {config} attributes
 * @property {Object.<els_keys, SVGElement|SVGUseElement>} els
 */
const data= {
    /** @type {config} */
    attributes_default: {
        href: "",
        gender: "man",
        eyes: "simple"
    },
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
     * @param {config_keys} name 
     * @param {string|null} [value=null] 
     */
    setAttribute(data, name, value= null){ return Reflect.set(data.attributes, name, value===null ? this.attributes_default[name] : value); },
    /**
     * @param {Data} data 
     * @param {config_keys} name 
     */
    getAttribute({ attributes }, name){ return attributes[name]; },
    /**
     * @param {Data} data 
     * @param {els_keys} name 
     * @returns {SVGUseElement|undefined}
     */
    getElement(data, name){ return Reflect.get(data.els, name); },
    /**
     * @param {Data} data 
     * @param {els_keys} name 
     * @param {SVGUseElement} el 
     */
    setElement(data, name, el){ return Reflect.set(data.els, name, el); },
    /**
     * @param {Data} data 
     * @param {els_keys} name 
     */
    deleteElement({ els }, name){
        if(!Reflect.has(els, name)) return false;
        Reflect.get(els, name).remove();
        return Reflect.deleteProperty(els, name);
    }
};