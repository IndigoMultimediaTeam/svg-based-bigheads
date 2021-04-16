/* jshint maxdepth: 3 */
/* global parts */
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
    /** @param {_JSON_parts_keys} name */
    function isFromMultiplePieces(name){ return attributes_objectbased.indexOf(name)!==-1; }
    return {
         attributes_default, attributes_keys,
         /** @param {_JSON_parts_keys} name */
         isNullable(name){ return attributes_nullable.indexOf(name)!==-1; },
         isFromMultiplePieces,
         /**
          * 
          * @param {_JSON_parts_keys} part_name 
          * @param {string} current_name 
          * @param {number} [shift=1] 
          * @returns {string}
          */
         getNextPartName(part_name, current_name, shift= 1){
            const values= Reflect.get(parts, part_name);
            const names= isFromMultiplePieces(part_name) ? Object.keys(values).filter(n=> n!=="long") : values;
            return names[ arrayIndex( names.indexOf(current_name), shift, names.length ) ];
         },
        
        /**
         * @param {SVGBigHeads} target 
         * @returns {Data}
         */
        get(target){ return storage.has(target) ? storage.get(target) : create(target); },
        
        /**
         * @param {Data} data 
         * @param {ConfigKeys} name 
         * @param {string|null} [value=null] 
         */
        setAttribute({ attributes }, name, value= null){ return Reflect.set(attributes, name, !value ? attributes_default[name] : value); },
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
    
    function create(target){
        const attributes= JSON.parse(JSON.stringify(attributes_default));
        storage.set(target, { attributes, els: {} });
        return storage.get(target);
    }
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
    function arrayIndex(i,s,l){ return (l+i+(s%l))%l; }
})();