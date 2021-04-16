gulp_place("./*.sub.js", "files_once");/* global avatarPartHref, findSafeLayer, hairFullConfig */
gulp_place("../services/*.sub.js", "files_once");/* global style_global, data */
gulp_place("../elements_helpers/*.sub.js", "files_once");/* global createUSE, createGroupedElement */
/**
 * @param {SVGElement} svg
 * @param {Data} d
 * */
function avatarUpdateHair(svg, d){
    const type= data.getAttribute(d, "hair");
    data.deleteElement(d, "hair");
    const has_hat= data.getAttribute(d, "hat")!=="none";
    const gotoEnd= is_big_hat=> has_hat&&data.getElement(d, "hat").classList.toggle(style_global.options.big_hat, is_big_hat);
    if(type==="none") return gotoEnd(0);
    const config= hairFullConfig(type);
    const els= Object.keys(config).reduce(function(els, curr){
        if(curr!=="top"||!has_hat)
            Reflect.set(els, curr, createUSE(avatarPartHref(d, "hair", config[curr])));
        return els;
    }, {});
    Object.keys(els).forEach(name=> name==="front" ? 
        svg.insertBefore(els[name], findSafeLayer(d, "hat")) :
        svg.insertBefore(els[name], data.getElement(d, "base")));
    data.setElement(d, "hair", createGroupedElement(els));
    return gotoEnd(Reflect.has(els, "back"));
}