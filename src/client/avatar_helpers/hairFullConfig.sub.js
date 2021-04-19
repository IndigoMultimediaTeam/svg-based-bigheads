/* global parts */
/**
 * @typedef HairPartsNames
 * @type {object}
 * @property {string} [front]
 * @property {string} [top]
 * @property {string} [back]
 */
/**
 * Returns filtered non-false parts and with full name as values (eg. `long01-back`).
 * @private
 * @param {string} name 
 * @returns {HairPartsNames}
 */
function hairFullConfig(name){
    const config= parts.hair[name];
    const partsNames= (config, name, init= {})=> Object.keys(config).filter(k=> k!=="parent"&&Boolean(config[k])).reduce((o, k)=> Reflect.set(o, k, name+"-"+k)&&o, init);
    let parts_names= partsNames(config, name);
    if(config.parent) parts_names= partsNames(parts.hair[config.parent], config.parent, parts_names);
    return parts_names;
}