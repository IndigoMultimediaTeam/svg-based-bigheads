/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
module.exports= function({app, $gulp_folder, gulp, error, $g, $o, $run}){
    const /* params */
        docs_locations= (({ file_name })=> ({
            from_full_path: app.directories.bin+app.directories._client+file_name+".js",
            to_full_path: "docs/"+file_name+".md"
        }))({ file_name: app.name+"-module" }),
        docs_modifications= "docs/modifications/",
        global_options= { private: true, separators: true, partial: docs_modifications+"*.hbs", helper: docs_modifications+"helpers.js" };
        const /* used in gulp_place */ root_folder_name= app.name;
    const /* documentation functions */
        jsdoc2md= require('jsdoc-to-markdown'),
        generateDoc= files=> jsdoc2md.render(Object.assign({ files }, global_options)),
        writeDoc= file=> markdown=> new Promise(function(resolve,reject){ $o.fs.writeFile(file, `# ${app.name} – Documentation\n[⇠ Go back to GitHub repository](${app.homepage})\n`+markdown, err=> !err ? resolve() : reject(err)); });
    /* jshint -W061 */const gulp_place= $g.place({ variable_eval: (str)=> eval(str) });/* jshint +W061 */
    return function(cb){
        gulp.src([docs_modifications+"*_pre.js"])
            .pipe(gulp_place({folder: docs_modifications, string_wrapper: ''}))
            .pipe($g.rename(function(p){
                p.basename= p.basename.replace(/_pre/ig, "");
                return p;
            }))
            .pipe(gulp.dest(docs_modifications))
            .on('end', function(){
                generateDoc(docs_locations.from_full_path)
                .then(writeDoc(docs_locations.to_full_path))
                .catch(error.handler)
                .then(cb);
            });
    };
};
