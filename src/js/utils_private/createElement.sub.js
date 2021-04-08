/**
 * @callback __createElementNS
 * @returns {SVGElement|SVGUseElement}
 */
/**
 * Creates elemnet in *svg* namespace
 * @type {__createElementNS}
 * @private
 * @global
 */
const createElement= document.createElementNS.bind(document, "http://www.w3.org/2000/svg");