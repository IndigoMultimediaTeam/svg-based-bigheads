gulp_place("../services/*.sub.js", "files_once");/* global data */
/* global safe_layers */
/**
 * @private
 * @param {Data} d
 * @param {_JSON_parts_keys} type
 * @returns {SVGUseElement}
 */
function findSafeLayer(d, type){
    for(let i=0, layer_main, layer_nth;( layer_nth= safe_layers[i] ); i++){
        if(!Array.isArray(layer_nth)){ layer_main= layer_nth; continue; }
        const sub_layer_index= layer_nth.indexOf(type);
        if(sub_layer_index===-1) continue;
        
        return data.getElement(d, trySubLayer(layer_nth, sub_layer_index) || layer_main);
    }
    
    function trySubLayer(layer_main, sub_layer_index){
        if(sub_layer_index===0) return false;
        for(let j= sub_layer_index-1, layer_sub; j>=0; j--){
            layer_sub= layer_main[j];
            if(!data.hasElement(d, layer_sub)) continue;
            return layer_sub;
        }
        return false;
    }
}