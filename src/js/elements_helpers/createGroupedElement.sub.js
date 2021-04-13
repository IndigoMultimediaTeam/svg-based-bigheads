/**
 * @typedef GroupedElement
 * @type {Object}
 * @property {SVGUseElement} [front] 
 * @property {SVGUseElement} [top] 
 * @property {SVGUseElement} [back] 
 * @property {function} remove Removes all elements
 */
/**
 * @param {object} els_object 
 * @param {SVGUseElement} [els_object.front] 
 * @param {SVGUseElement} [els_object.top] 
 * @param {SVGUseElement} [els_object.back] 
 * @returns {GroupedElement}
 */
function createGroupedElement(els_object){
    const keys= Object.keys(els_object);
    return Object.assign({ remove(){ keys.forEach(el=> this[el].remove()); } }, els_object);
}