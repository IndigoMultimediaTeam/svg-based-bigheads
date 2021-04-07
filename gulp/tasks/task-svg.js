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
        gulp.src([ src+"**/*.sub.svg" ])
            .pipe($g.replace(/<svg (id="[^"]*")?/, function(){
                return `<svg id="${getID(this.file)}"`;
            }))
            .pipe(gulp.dest(src))
            .on('end', function(){
                gulp.src([ src+"*.svg", '!'+src+'*.sub.svg' ])
                    .pipe(gulp_place({ folder: src, string_wrapper: '' }))
                    .pipe(gulp.dest(bin))
                    .on('end', cb);
            });
    };
    function getID({ basename, dirname }){
        const part= dirname.split("bigheads-parts\\")[1];
        const name= basename.split(".")[0];
        if(!part) return name;
        return part+"-"+name;
    }
};