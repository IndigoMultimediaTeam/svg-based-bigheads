import { parts_dictionary, isNotGenderType } from "../client/bigheads-module.js";
const [ wrapper_buttons, wrapper_avatar, wrapper_below ]= document.getElementsByTagName("article")[0].getElementsByTagName("div");
const href= "../client/bigheads.svg";
let config= Object.keys(parts_dictionary).reduce(function(out, type){
    const values= parts_dictionary[type];
    const { floor, random }= Math;
    Reflect.set(out, type, values[floor(random()*values.length)]);
    return out;
}, {});
/** @type {HTMLElement[]} */
const parts_els= Array.from({ length: 2 }).map(()=> createElement("svg-bigheads-part", { href }, {
    type: "eyes", value: config.eyes, onclick: changeAvatar
}));
wrapper_avatar.appendChild(parts_els[0]);
const avatar_el= wrapper_avatar.appendChild(createElement("svg-bigheads", { href }, config));
wrapper_avatar.appendChild(parts_els[1]);
updatePartsValues();

Object.keys(config).filter(isNotGenderType).filter(n=> parts_dictionary[n].length>1).forEach(value=> wrapper_buttons.appendChild(createElement("button", {
    value, onclick: updatePartsTypes, textContent: value.charAt(0).toUpperCase()+value.slice(1)
})));
wrapper_below.appendChild(createElement("button", {
    textContent: "Change gender",
    onclick: function(){
        const value= config.breasts&&config.breasts==="breasts" ? "none" : "breasts";
        config.breasts= value;
        avatar_el.breasts= value;
    }
}));

function changeAvatar(){
    const [ type, value ]= this.config;
    config[type]= value;
    avatar_el.setAttribute(type, value);
    updatePartsValues(getShift(parts_els.indexOf(this)));
}
function createElement(name, ...params){ return Object.assign(document.createElement(name), ...params); }
function updatePartsValues(shift= 0){ parts_els.forEach((el, i)=> el.nextValue(shift||getShift(i))); }
function updatePartsTypes(){
    const { value }= this;
    parts_els.forEach(el=> {
        Reflect.set(el, "type", value);
        Reflect.set(el, "value", config[value]);
    });
    updatePartsValues();
}
function getShift(i){ return i?1:-1; }