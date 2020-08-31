/* jshint node: true */
module.exports= function({app, gulp, error, $g, $o, $run}){
    /* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str) });/* jshint +W061 */
    const { src, bin }= app.directories;
    return function(cb){
        gulp.src([src+"*.svg", '!'+src+'*.sub.svg'])
            .pipe(gulp_place({ folder: src, string_wrapper: '' }))
            .pipe(gulp.dest(bin))
            .on('end', cb);
    };
};