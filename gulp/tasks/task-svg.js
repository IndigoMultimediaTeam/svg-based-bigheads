/* jshint node: true, maxparams: 4 */
module.exports= function({app, gulp, error, $g, $o, $run}){
    const /** looads initial data for `/src/parts.json` */
        data= JSON.parse($o.fs.readFileSync(app.directories.src+"parts_initial.json")),
        colors= Object.keys(data.colors).reduce((t, c)=> Reflect.set(t, data.colors[c], c) && t, {});
    if(!Reflect.has(data, "parts")) Reflect.set(data, "parts", {});
    const idsClr= _in=> _in.replace(/ id=["'][^"']*["']/ig, "");
    /* jshint -W061 */
    const gulp_place= $g.place({
        variable_eval: str=> eval(str),
        filesCleaner: content=>
            content
                .replace(/<svg ([^>]*) xmlns="http:\/\/www.w3.org\/2000\/svg"([^>]*)>/g, "<symbol $1$2>")
                .replace(/<\/svg>/g, "</symbol>")
                .replace(/<([^>]*)fill=["']([^"']*)["']([^>]*)\/>/gm, function(_, m1, m2, m3){
                    if(!Reflect.has(colors, m2)) return idsClr(_);
                    let out= [ m1, m3 ].map(i=> i.trim()).filter(Boolean).join(" ");
                    const re= /style=(["'])/;
                    if(!out.match(re)) out+= " style=''";
                    out= idsClr(out).replace(re, (_, q)=> `style=${q}fill:var(--bigheads-color-${colors[m2]}, ${m2});`);
                    return `<${out}\/>`;
                })
    });
    /* jshint +W061 */
    const { src, bin }= app.directories;
    return function(cb){
        gulp.src([ src+"**/*.sub.svg" ])
            .pipe($g.svgmin({
                js2svg: {
                    pretty: true
                },
                plugins: [{
                    removeDoctype: false
                }, {
                    removeComments: false
                }, {
                    cleanupNumericValues: {
                        floatPrecision: 2
                    }
                }, {
                    convertColors: {
                        names2hex: false,
                        rgb2hex: false
                    }
                }]
            }))
            .pipe($g.replace(/<svg([^>]*)>/i, function(_, match= ""){
                const id= generateID(this.file);
                updateData(id.split("-"), data.parts);
                return `<svg id="${id}"${idsClr(match)}>`;
            }))
            .pipe(gulp.dest(src))
            .on('end', function(){
                gulp.src([ src+"*.svg", '!'+src+'*.sub.svg' ])
                    .pipe(gulp_place({ folder: src, string_wrapper: '' }))
                    .pipe(gulp.dest(bin))
                    .on('end', function(){
                        $o.fs.writeFileSync(src+"parts.json", JSON.stringify(data));
                        $o.fs.writeFileSync(src+"parts.types.sub.js", generateJSDoc(data));
                        cb();
                    });
            });
    };
    function updateData(path, parts){
        if(path.length===1) path= [ path[0], path[0] ];
        const [ type, ...item ]= path;
        if(item.length===1) return getWithDefault(parts, type, []).push(item[0]);
        /* mainly hairs?: [ "hair", "long", "back" ] → hair: { long: { back: true } } */
        const curr_type= getWithDefault(parts, type, {});
        const [ item_name, item_type ]= item;
        const curr_item= getWithDefault(curr_type, item_name, {});
        Reflect.set(curr_item, item_type, true);
        const re= /[0-9]{2,}/g;
        if(!item_name.match(re)) return true;
        /* long: { front: true }, long01: { back: true }, … */
        Reflect.set(curr_item, "parent", item_name.replace(re, ""));
    }
    function getWithDefault(target, property, _default){
        if(!Reflect.has(target, property))
            Reflect.set(target, property, _default);
        return Reflect.get(target, property);
    }
    function generateID({ basename, dirname }){
        let part= dirname.split("bigheads-parts\\")[1];
        const name= basename.split(".")[0];
        if(!part) part= name;
        return part+"-"+name;
    }
    function generateJSDoc(data){
        const keys= [ "colors", "parts" ];
        const descs_keys= [ "Final usage of colors are: `--bigheads-color-__color_name__`", "All svg files options" ];
        let out= "/* Automaticaly created from svg file strucutre */\n";
        out+= keys.map((k, i)=> jsdocTypedef({
            name: "_JSON_"+k+"_keys",
            desc: descs_keys[i],
            type: '"'+(Array.isArray(data[k]) ? data[k] : Object.keys(data[k])).join('"|"')+'"'
        })).join("\n")+"\n";
        const bht_json_Ts= [ "string", "array", "object" ].map(t=> "_JSON_T"+t);
        out+= jsdocTypedef({ name: bht_json_Ts[0], type: "string" })+"\n";
        out+= jsdocTypedef({ name: bht_json_Ts[1], type: "string[]" })+"\n";
        out+= jsdocTypedefProps(
            { name: bht_json_Ts[2], type: "object" },
            [ "front", "back", "top" ].map(n=> [ `[${n}]`, "boolean" ]).concat([ [ "[parent]", "string", "The name of hair to be also used" ] ])
        )+"\n";
        out+= keys.map(k=> jsdocTypedefProps({
            name: "_JSON_"+k,
            type: "object"
        }, Object.keys(data[k]).map(name=>
            ([ name, bht_json_Ts.join("|") ]))
        )).join("\n")+"\n";
        out+= keys.map(k=> jsdocTypedefProps({
            name: "_JSON_config_"+k,
            type: "object"
        }, Object.keys(data[k]).map(name=>
            ([ name, "string", (dkn=> typeof dkn==="string" ? dkn : ( Array.isArray(dkn) ? dkn[0] : Object.keys(dkn)[0] ) )(data[k][name]) ]))
        )).join("\n")+"\n";
        out+= jsdocTypedef({ name: "_JSON_safe_layers_nth", type: "_JSON_parts_keys[]" })+"\n";
        out+= jsdocTypedef({ name: "_JSON_safe_layers", type: "_JSON_safe_layers_nth & _JSON_safe_layers_nth[]" })+"\n";
        return out;
    }
    function jsdocTypedef({ name, type, desc }, close= true){
        const main= "/**"+
            (desc ? "\n * "+desc : "")+
            [
                " @typedef "+name,
                ` @type {${type}}`
            ].map(l=> "\n *"+l).join("");
        return main+(close?"\n */":"");
    }
    function jsdocTypedefProps(typedef, props){
        return jsdocTypedef(typedef, false)+
            props.map(([ name, type, initial, desc= "" ])=> typeof initial==="undefined" ?
                `@property {${type}} ${name} ${desc}` :
                `@property {${type}} [${name}=${initial}] ${desc}`
            ).map(l=> "\n * "+l).join("")+"\n */";
    }
};