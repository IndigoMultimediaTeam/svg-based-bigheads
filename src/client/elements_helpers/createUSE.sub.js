gulp_place("./createElement.sub.js", "file_once");/* global createElement */
gulp_place("./setHref.sub.js", "file_once");/* global setHref */
/**
 * @private
 * @param {string} href 
 * @returns {SVGUseElement}
 */
function createUSE(href){
    const use= createElement("use");
    setHref(use, href);
    return use;
}