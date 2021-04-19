/* jshint maxdepth: 4 */
gulp_place("all", "clean");//gulp.remove.line
gulp_place('{ "file": "client/main.sub.js", "name": "${app.name}", "type": "module" }', 'combine');