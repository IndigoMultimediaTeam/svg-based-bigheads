gulp_place("./data.sub.js", "file_once");/* global data */
/**
 * 
 * @param {Data} d 
 * @param {string} href 
 * @param {ConfigKeys} type 
 * @returns 
 */
function avatarPartHref(d, href, type){
    const name= data.getAttribute(d, type);
    return `${href}#${type}-${name}`;
}