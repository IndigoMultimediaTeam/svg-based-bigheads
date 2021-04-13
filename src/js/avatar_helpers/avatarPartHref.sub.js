gulp_place("../singletons/data.sub.js", "file_once");/* global data */
/**
 * 
 * @param {Data} d 
 * @param {string} href 
 * @param {ConfigKeys} type 
 * @param {string} [name] Defaults to value saved in `d`
 * @returns 
 */
function avatarPartHref(d, href, type, name= data.getAttribute(d, type)){
    return `${href}#${type}-${name}`;
}