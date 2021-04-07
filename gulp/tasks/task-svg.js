/* jshint node: true, maxparams: 4 */
module.exports= function({app, gulp, error, $g, $o, $run}){
    const colors= {
        "#d96e27": "hair",
        "#d67070": "clothes",
        "#5bcaf0": "hat",
        "#dd3e3e": "mouth",
        "#fdd2b2": "skin"
    };
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
        let data= { colors: Object.keys(colors).reduce((t, c)=> Reflect.set(t, colors[c], c) && t, {}) };
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
                updateData(id.split("-"), data);
                return `<svg id="${id}"${idsClr(match)}>`;
            }))
            .pipe(gulp.dest(src))
            .on('end', function(){
                gulp.src([ src+"*.svg", '!'+src+'*.sub.svg' ])
                    .pipe(gulp_place({ folder: src, string_wrapper: '' }))
                    .pipe(gulp.dest(bin))
                    .on('end', ()=> $o.fs.writeFile(src+"parts.json", JSON.stringify(data), cb));
            });
    };
    function updateData(path, data){
        if(path.length===1) path= [ "base", path[0] ];
        const [ type, ...item ]= path;
        if(item.length===1) return getWithDefault(data, type, []).push(item[0]);
        /* mainly hairs?: [ "hair", "long", "back" ] → hair: { long: { back: true } } */
        const curr_type= getWithDefault(data, type, {});
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
        const part= dirname.split("bigheads-parts\\")[1];
        const name= basename.split(".")[0];
        if(!part) return name;
        return part+"-"+name;
    }
};