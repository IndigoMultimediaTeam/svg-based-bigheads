(function main(){
    if(document.readyState==="loading") return document.addEventListener("DOMContentLoaded", main);
    const [ wrapper_buttons, wrapper_avatar ]= document.getElementsByTagName("article")[0].getElementsByTagName("div");
    let config= {
        href: "bigheads.svg",
        eyes: "simple",
        hair: "serious",
        eyebrow: "angry",
        clothes: "dressshirt",
        mouth: "open",
        glasses: "sun",
        nose: "none"
    };
    /** @type {HTMLElement[]} */
    const parts_els= Array.from({ length: 2 }).map(()=> createElement("svg-bigheads-part", {
        href: config.href, type: "eyes", value: config.eyes, onclick: changeAvatar
    }));
    wrapper_avatar.appendChild(parts_els[0]);
    const avatar_el= wrapper_avatar.appendChild(createElement("svg-bigheads", config));
    wrapper_avatar.appendChild(parts_els[1]);
    updatePartsValues();

    Object.keys(config).filter(n=> n!=="href").forEach(value=> wrapper_buttons.appendChild(createElement("button", {
        value, onclick: updatePartsTypes, textContent: value.charAt(0).toUpperCase()+value.slice(1)
    })));

    function changeAvatar(){
        const [ type, value ]= this.config;
        config[type]= value;
        avatar_el.setAttribute(type, value);
        updatePartsValues(getShift(parts_els.indexOf(this)));
    }
    function createElement(name, params){ return Object.assign(document.createElement(name), params); }
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
})();