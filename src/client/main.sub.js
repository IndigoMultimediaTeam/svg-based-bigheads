const {
    /**
     * Dictionary of all editable colors (in the form `--bigheads-color-${name}`) with default values
     * @property {object} colors
     */
    colors,
    safe_layers, parts }= getFromJSON();
export { colors };
gulp_place("./services/data.sub.js", "file_once");/* global data */
/**
 * All values are {@link _JSON_Tarray}
 * @type {_JSON_parts}
 */
export const parts_dictionary= Object.keys(parts)
    .reduce(function toKeyArrayDictionary(out, type){
        const value_candidate= parts[type];
        const value= data.isFromMultiplePieces(type) /* for now hairs! */ ?
            Object.keys(value_candidate).filter(v=> v!=="long") :
            value_candidate;
        Reflect.set(out, type, value);
        /* test */
        return out;
    }, {});

/**
 * @param {_JSON_parts_keys} candidate
 * @returns {boolean}
 * */
export function isNotGenderType(candidate){ return candidate!=="breasts"; }
gulp_place("./components/*.sub.js", "files_once");/* global SVGBigHeadsElement, SVGBigHeadsPartElement */
export { SVGBigHeadsElement, SVGBigHeadsPartElement };
/**
 * @param {_JSON_parts_keys} part_name 
 * @param {string} current_name 
 * @param {number} [shift=1] 
 * @returns {string}
 */
export function nextPartName(part_name, current_name, shift= 1){ return data.getNextPartName(part_name, current_name, shift); }
gulp_place("../svgs/parts.types.sub.js", "file_once");
/**
 * @typedef json
 * @private
 * @type {object}
 * @property {_JSON_colors} colors
 * @property {_JSON_parts} parts
 * @property {_JSON_safe_layers} safe_layers
 */
/**
 * @private
 * @returns {json}
 * */
function getFromJSON(){ return JSON.parse(`gulp_place("../svgs/parts.json", "file_once")`); }

/**
 * Library version
 * @constant {string}
 */
export const version= gulp_place("app.version", "variable");
/**
 * @constant {"client"|"server"}
 */
export const type= "client";