gulp_place("../services/*.sub.js", "files_once");/* global data */
/**
 * @private
 * @param {Data} d 
 * @param {ConfigKeys} type 
 * @param {string} [name] Defaults to value saved in `d`
 * @returns {string}
 */
function avatarPartHref(d, type, name= data.getAttribute(d, type)){
    return `${data.getAttribute(d, "href")}#${type}-${name}`;
}