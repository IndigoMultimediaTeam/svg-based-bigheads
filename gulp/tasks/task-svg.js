/* jshint node: true */
module.exports= function({app, gulp, error, $g, $o, $run}){
    /* jshint -W061 */
    const gulp_place= $g.place({
        variable_eval: str=> eval(str),
        filesCleaner: content=>
            content
                .replace(/<svg ([^>]*) xmlns="http:\/\/www.w3.org\/2000\/svg"([^>]*)>/g, "<symbol $1$2>")
                .replace(/<\/svg>/g, "</symbol>")
    });
    /* jshint +W061 */
    const { src, bin }= app.directories;
    return function(cb){
        let data= {};
        gulp.src([ src+"**/*.sub.svg" ])
            .pipe($g.replace(/<svg (id="[^"]*")?/, function(){
                const id= generateID(this.file);
                updateData(id.split("-"), data);
                return `<svg id="${id}"`;
            }))
            .pipe(gulp.dest(src))
            .on('end', function(){
                gulp.src([ src+"*.svg", '!'+src+'*.sub.svg' ])
                    .pipe(gulp_place({ folder: src, string_wrapper: '' }))
                    .pipe(gulp.dest(bin))
                    .on('end', function(){
                        $o.fs.writeFile(src+"parts.json", JSON.stringify(data), cb);
                    });
            });
    };
    function updateData(path, data){
        if(path.length===1) path= [ "base", path[0] ];
        const [ type, ...item ]= path;
        if(item.length===1) return getWithDefault(data, type, []).push(item[0]);
        
        const curr_type= getWithDefault(data, type, {});
        const [ item_name, item_type ]= item;
        const curr_item= getWithDefault(curr_type, item_name, {});
        Reflect.set(curr_item, item_type, true);
        const re= /[0-9]{2,}/g;
        if(!item_name.match(re)) return true;
        
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