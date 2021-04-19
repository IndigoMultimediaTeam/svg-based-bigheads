/* jshint esversion: 6,-W097, -W040, node: true, expr: true, undef: true */
/* global gulp_place */
module.exports= {
    pathHelper: function(path){
        return "gulp_place('app.homepage.replace(`#readme`, ``)', 'variable')/blob/main/gulp_place('docs_file', 'variable')";
    }
};
