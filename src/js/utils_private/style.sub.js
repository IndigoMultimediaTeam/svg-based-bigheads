/**
 * Contains options for generating default styles for `<svg-bigheads>`. Changes makes sence only before fisrt `<svg-bigheads>` is created. See {@link style.cerate}.
 * @typedef {Object} style_options
 * @property {boolean} [allow=true] Allow creating global default styles
 * @property {string} [fit=contain] CSS `fit` property of `<svg>` inside `<svg-bigheads>`
 */
/**
 * @namespace
 * @private
 * @global
 */
const style= {
    /**
     * @property {style_options} options
     * @memberof style
     * @public
     */
    options: { allow: true, fit: "contain" },
    /**
     * Keeping information the global style was created – see {@link style.cerate}
     * @property {boolean} [is_created=false]
     * @memberof style
     * @private
     */
    is_created: false,
    /**
     * Creates new `<style>` inside `<head>` with default styling of `<svg-bigheads>` (displays block and size)
     * @method
     * @memberof style
     * @public
     */
    create(){
        if(!this.options.allow||this.is_created) return false;
        const style_el= document.createElement("style");
        const { fit }= this.options;
        style_el.innerHTML=
            `svg-bigheads svg-bigheads-part { display: none; }` +
            `svg-bigheads svg { width: 100%; height: 100%; object-fit: ${fit}; }`;
        document.head.appendChild(style_el);
        this.is_created= true;
    }
};