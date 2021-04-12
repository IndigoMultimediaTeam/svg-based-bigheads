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
/* global parts */
/* #parts.json */
for(let i=0, keys= Object.keys(parts), key;( key= keys[i] ); i++){
    const val= Reflect.get(parts, key);
    Reflect.set(data.attributes_default, key, Array.isArray(val) ? val[0] : Object.keys(val)[0]);
}