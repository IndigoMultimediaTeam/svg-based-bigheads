/* global parts */
/**
 * @param {string} type 
 * @returns {_JSON_Tobject}
 */
function hairFullConfig(type){
    const config= parts.hair[type];
    return Object.assign({}, config, config.parent ? parts.hair[config.parent] : null);
}