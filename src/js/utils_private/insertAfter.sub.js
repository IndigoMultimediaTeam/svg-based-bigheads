/**
 * @param {HTMLElement} referenceNode 
 * @param {HTMLElement} newNode 
 */
function insertAfter(referenceNode, newNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}