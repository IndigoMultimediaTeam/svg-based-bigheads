const { colors, safe_layers, parts }= getFromJSON();
export { colors };
gulp_place("./services/data.sub.js", "file_once");/* global data */
/**
 * All values are {@link _JSON_Tarray}
 * @type {_JSON_parts}
 */
export const parts_dictionary= Object.keys(parts).reduce((o, name)=> (Reflect.set(o, name, data.isFromMultiplePieces(name) ? Object.keys(parts[name]) : parts[name]), o), Object.create(null));
/** @param {_JSON_parts_keys} candidate */
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
 * @type {object}
 * @property {_JSON_colors} colors
 * @property {_JSON_parts} parts
 * @property {_JSON_safe_layers} safe_layers
 */
/** @returns {json} */
function getFromJSON(){ return JSON.parse(`gulp_place("../svgs/parts.json", "file_once")`); }