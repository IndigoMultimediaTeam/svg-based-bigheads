/**
 * Helper for registering `observedAttributes` and getters/setters
 * @private
 * @param {HTMLElement} BaseClass 
 * @param {string[]} attributes_names 
 * @returns {HTMLElement}
 */
function mixinObservedAttributes(BaseClass, attributes_names){
    class c extends BaseClass{ static get observedAttributes() { return attributes_names; } }
    attributes_names.forEach(name=> Reflect.defineProperty(c.prototype, name, { 
        get(){ return this.getAttribute(name); },
        set(val){ return this.setAttribute(name, val); }
    }));
    return c;
}