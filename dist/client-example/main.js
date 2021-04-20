import { parts_dictionary, colors as colors_initial, isNotGenderType } from "../client/bigheads-module.js";
const [ wrapper_buttons, wrapper_colors, wrapper_avatar, wrapper_below ]= document.getElementsByTagName("article")[0].getElementsByTagName("div");
const href= "../client/bigheads.svg";
let config= randomPartsConfig(parts_dictionary);
let colors= randomColorsConfig(colors_initial);
let active_type= "eyes";
const style_colors= document.head.appendChild(createElement("style", { innerHTML: colorStyle() }));

/** @type {HTMLElement[]} */
const parts_els= Array.from({ length: 2 }).map(()=> createElement("svg-bigheads-part", { href }, {
    type: active_type, value: config[active_type], onclick: changeAvatar
}));
updateColorsButtons(active_type);
wrapper_avatar.appendChild(parts_els[0]);
const avatar_el= wrapper_avatar.appendChild(createElement("svg-bigheads", { href }, config));
wrapper_avatar.appendChild(parts_els[1]);
updatePartsValues();

Object.keys(config)
    .filter(isNotGenderType)
    .filter(n=> parts_dictionary[n].length>1)
    .forEach(value=> wrapper_buttons.appendChild(createElement("button", { value, onclick: updatePartsTypes, textContent: buttonName(value) })));
    wrapper_below.appendChild(createElement("button", {
        textContent: "Change gender",
        onclick: function(){
            const value= config.breasts&&config.breasts==="breasts" ? "none" : "breasts";
            config.breasts= value;
            avatar_el.breasts= value;
        }
    }));
colors.skin.values.map((color, value)=> wrapper_below.appendChild(createElement("button", {
        className: "colorButton", onclick: updateColor, value, style: `background-color: ${color};`, color_type: "skin"
    })))
    .forEach((el, i)=> Reflect.set(el.dataset, "current", i));

function changeAvatar(){
    const [ type, value ]= this.config;
    config[type]= value;
    avatar_el.setAttribute(type, value);
    updatePartsValues(getShift(parts_els.indexOf(this)));
}
function cssColorName(name){ return "--bigheads-color-"+name; }
/** @this {HTMLElement} */
function updateColor(){
    const { value, color_type= active_type }= this;
    Reflect.set(colors[color_type], "current", value);
    Reflect.set(this.parentElement.dataset, "js_active", value);
    Object.assign(style_colors, { innerHTML: colorStyle() });
}
function updateColorsButtons(type){
    const toggleWrapper= Reflect.set.bind(null, wrapper_colors.dataset, "js_hide_inside");
    if(!Reflect.has(colors, type)) return toggleWrapper(true);
    emptyElement(wrapper_colors);
    const { values, current }= colors[type];
    Reflect.set(wrapper_colors.dataset, "js_active", current);
    values
        .map((color, value)=> wrapper_colors.appendChild(createElement("button", {
            className: "colorButton", onclick: updateColor, value, style: `background-color: ${color};`
        })))
        .forEach((el, i)=> Reflect.set(el.dataset, "current", i));
    toggleWrapper(false);
}
function updatePartsValues(shift= 0){
    parts_els.forEach((el, i)=> el.nextValue(shift||getShift(i)));
}
function updatePartsTypes(){
    const { value }= this;
    parts_els.forEach(el=> {
        Reflect.set(el, "type", value);
        Reflect.set(el, "value", config[value]);
    });
    active_type= value;
    updatePartsValues();
    updateColorsButtons(value);
}
function randomPartsConfig(parts_dictionary){
    return Object.keys(parts_dictionary).reduce(function(out, type){
        const values= parts_dictionary[type];
        const { floor, random }= Math;
        Reflect.set(out, type, values[floor(random()*values.length)]);
        return out;
    }, {});
}
function randomColorsConfig(colors_initial){
    return Object.keys(colors_initial).reduce(function(out, curr){
        const values= [ colors_initial[curr] ];
        switch(curr){
            case "skin":    values.push("#efbf8f"); break;
            case "hat":     values.push("#8fb7ef"); break;
            case "clothes": values.push("#ef8fb7"); break;
            case "hair":    values.push("#ef8f8f"); break;
            case "mouth":   values.push("#f28297"); break;
        }
        Reflect.set(out, curr, { values, current: 0 });
        return out;
    }, {});
}

function colorStyle(){ return "svg-bigheads, svg-bigheads-part{"+Object.keys(colors).map(name=> cssColorName(name)+": "+colors[name].values[colors[name].current]+";").join("")+"}"; }
function createElement(name, ...params){ return Object.assign(document.createElement(name), ...params); }
function emptyElement(container){
    let len = container.childNodes.length;
    while(len--){ container.removeChild(container.lastChild); }
}
function getShift(i){ return i?1:-1; }
function buttonName(value){ return value.charAt(0).toUpperCase()+value.slice(1); }