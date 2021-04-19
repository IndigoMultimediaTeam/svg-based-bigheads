gulp_place("../elements_helpers/*.sub.js", "files_once");/* global createSVG, createUSE */
gulp_place("../avatar_helpers/*.sub.js", "files_once");/* global avatarPartHref */
gulp_place("./data.sub.js", "file_once");/* global data */
/**
 * @namespace
 * @private
 */
const avatar_svg= (function(){
    /** @type {WeakMap<SVGBigHeadsElement, SVGElement>} */
    const storage= new WeakMap();
    return {
        /**
         * @memberof avatar_svg
         * @param {SVGBigHeadsElement} big_heads
         * */
        create(big_heads){
            const svg= big_heads.appendChild(createSVG());
            storage.set(big_heads, svg);
            return svg;
        },
        /**
         * @memberof avatar_svg
         * @param {SVGBigHeadsElement} big_heads
         * */
        get(big_heads){ return storage.get(big_heads); },
        /**
         * Append `<use>` to internal `<svg>`.
         * @memberof avatar_svg
         * @param {SVGElement} svg
         * @param {Data} d
         * @param {_JSON_parts_keys} name
         * @returns {SVGUseElement}
         */
        appendUSE(svg, d, name){
            const use_el= createUSE(avatarPartHref(d, name));
            data.setElement(d, name, svg.appendChild(use_el));
            return use_el;
        },
        /**
         * Insert `<use>` to `<svg>` before `el`.
         * @memberof avatar_svg
         * @param {SVGElement} svg
         * @param {Data} d
         * @param {_JSON_parts_keys} name
         * @param {SVGUseElement} el
         * @returns {SVGUseElement}
         */
        insertAfterUSE(svg, d, name, el){
            const use_el= createUSE(avatarPartHref(d, name));
            data.setElement(d, name, svg.insertBefore(use_el, el.nextElementSibling));
            return use_el;
        },
        /**
         * @memberof avatar_svg
         * @param {SVGBigHeadsElement} big_heads
         * */
        remove(big_heads){
            storage.get(big_heads).remove();
            Reflect.deleteProperty(storage, big_heads);
        }
    };
})();