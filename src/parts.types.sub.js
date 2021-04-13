/* Automaticaly created from svg file strucutre */
/**
 * Final usage of colors are: `--bigheads-color-__color_name__`
 * @typedef _JSON_colors_keys
 * @type {"hair"|"clothes"|"hat"|"mouth"|"skin"}
 */
/**
 * All svg files options
 * @typedef _JSON_parts_keys
 * @type {"accessory"|"breasts"|"eyebrow"|"facialhair"|"hair"|"hat"|"nose"|"base"|"clothes"|"eyes"|"mouth"}
 */
/**
 * @typedef _JSON_Tstring
 * @type {string}
 */
/**
 * @typedef _JSON_Tarray
 * @type {string[]}
 */
/**
 * @typedef _JSON_Tobject
 * @type {object}
 * @property {boolean} [front] 
 * @property {boolean} [back] 
 * @property {boolean} [top] 
 * @property {string} [[parent]=The name of hair to be also used] 
 */
/**
 * @typedef _JSON_colors
 * @type {object}
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hair 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} clothes 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hat 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} mouth 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} skin 
 */
/**
 * @typedef _JSON_parts
 * @type {object}
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} accessory 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} breasts 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} eyebrow 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} facialhair 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hair 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} hat 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} nose 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} base 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} clothes 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} eyes 
 * @property {_JSON_Tstring|_JSON_Tarray|_JSON_Tobject} mouth 
 */
/**
 * @typedef _JSON_config_colors
 * @type {object}
 * @property {string} [hair=#d96e27] 
 * @property {string} [clothes=#d67070] 
 * @property {string} [hat=#5bcaf0] 
 * @property {string} [mouth=#dd3e3e] 
 * @property {string} [skin=#fdd2b2] 
 */
/**
 * @typedef _JSON_config_parts
 * @type {object}
 * @property {string} [accessory=none] 
 * @property {string} [breasts=none] 
 * @property {string} [eyebrow=none] 
 * @property {string} [facialhair=none] 
 * @property {string} [hair=none] 
 * @property {string} [hat=none] 
 * @property {string} [nose=none] 
 * @property {string} [base=base] 
 * @property {string} [clothes=dressshirt] 
 * @property {string} [eyes=narrower] 
 * @property {string} [mouth=lips] 
 */
/**
 * @typedef _JSON_safe_layers_nth
 * @type {_JSON_parts_keys[]}
 */
/**
 * @typedef _JSON_safe_layers
 * @type {_JSON_safe_layers_nth & _JSON_safe_layers_nth[]}
 */
