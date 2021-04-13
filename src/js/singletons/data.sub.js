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
 * @namespace
 * */
const data= {
    /**
     * @typedef Config
     * @type {_PreConfig & _JSON_config_parts}
     */
    /**
     * Another loaded from `parts`, see part labeled by comment: #parts.json
     * @type {Config}
     * */
    attributes_default: { href: "" },
    get attributes_keys(){ return Object.keys(this.attributes_default); },
    /**
     * The names of parts with "none" (except “object-based” eg. hairs), see part labeled by comment: #parts.json
     * @type {_JSON_parts_keys[]}
     */
    attributes_nullable: [],
    /**
     * The names of “object-based” parts (for now hairs), see part labeled by comment: #parts.json
     * @type {_JSON_parts_keys[]}
     */
    attributes_objectbased: [],
    
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
/* global parts */
/* #parts.json */
for(let i=0, keys= Object.keys(parts), key;( key= keys[i] ); i++){
    const val= Reflect.get(parts, key);
    let parts_names;
    if(Array.isArray(val)){
        parts_names= val;
        if(parts_names.indexOf("none")!==-1)
            data.attributes_nullable.push(key);
    } else {
        parts_names= Object.keys(val);
        data.attributes_objectbased.push(key);
    }
    Reflect.set(data.attributes_default, key, parts_names[0]);
}