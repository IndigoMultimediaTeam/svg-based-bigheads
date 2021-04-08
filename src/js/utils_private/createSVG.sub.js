gulp_place("./createElement.sub.js", "file_once");/* global createElement */
/** @returns {SVGElement} */
function createSVG(){
    const svg= createElement("svg");
    svg.setAttribute("viewBox", "0 0 1000 990");
    return svg;
}