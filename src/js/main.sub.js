const { colors, safe_layers, parts }= getFromJSON();
gulp_place("./components/*.sub.js", "files_once");
gulp_place("parts.types.sub.js", "file_once");
/**
 * @typedef json
 * @type {object}
 * @property {_JSON_colors} colors
 * @property {_JSON_parts} parts
 * @property {_JSON_safe_layers} safe_layers
 */
/** @returns {json} */
function getFromJSON(){ return JSON.parse(`gulp_place("parts.json", "file_once")`); }