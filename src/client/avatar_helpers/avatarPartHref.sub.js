gulp_place("../services/data.sub.js", "file_once");/* global data */
/**
 * @param {Data} d 
 * @param {ConfigKeys} type 
 * @param {string} [name] Defaults to value saved in `d`
 * @returns 
 */
function avatarPartHref(d, type, name= data.getAttribute(d, type)){
    return `${data.getAttribute(d, "href")}#${type}-${name}`;
}