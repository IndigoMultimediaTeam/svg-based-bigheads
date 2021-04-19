gulp_place("../elements_helpers/*.sub.js", "files_once");/* global createSVG, createUSE */
gulp_place("../avatar_helpers/*.sub.js", "files_once");/* global avatarPartHref */
gulp_place("./data.sub.js", "file_once");/* global data */
const avatar_svg= (function(){
    /** @type {WeakMap<SVGBigHeadsElement, SVGElement>} */
    const storage= new WeakMap();
    return {
        /** @param {SVGBigHeadsElement} big_heads */
        create(big_heads){
            const svg= big_heads.appendChild(createSVG());
            storage.set(big_heads, svg);
            return svg;
        },
        /** @param {SVGBigHeadsElement} big_heads */
        get(big_heads){ return storage.get(big_heads); },
        /**
         * Append `<use>` to internal `<svg>`.
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
         * @param {Data} d 
         * @param {ConfigKeys} type 
         * @param {string} [name] Defaults to value saved in `d`
         * @returns 
         */
        avatarPartHref(d, type, name= data.getAttribute(d, type)){
            return `${data.getAttribute(d, "href")}#${type}-${name}`;
        },
        /** @param {SVGBigHeadsElement} big_heads */
        remove(big_heads){
            storage.get(big_heads).remove();
            Reflect.deleteProperty(storage, big_heads);
        }
    };
})();