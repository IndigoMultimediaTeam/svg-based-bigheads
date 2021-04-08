/**
 * Toto je jen pomocný komentář k [jaandrle/gulp-place: PHP require like concating syntax for gulp (primary for JavaScript files).](https://github.com/jaandrle/gulp-place)
 * @method gulp_place
 * @param {string} target Dle `type` slouží buť k nastavení speciálních funkcí ale typicky spíše k určení cesty odkud nahrát soubor(y), viz `some_folder/${file_var}`|`${folder_var}/some_file` (`${}` se zpracovává při buildu pomocí `variable_eval` viz příslušný gulp task).
 * @param {gulp_place_file | gulp_place_files | gulp_place_variable | gulp_place_clean | gulp_place_combine} [type='file'] Typicky `file`(s) (⇒ nači soubor(y))
 * @returns {string} Vloží část kódu během buildění
 */
function gulp_place(target, type){}
/**
 * Vloží obsah souboru dle cesty.
 * - `file_if_exists`: potichu přeskočí neexistující soubory
 * - `file_once`: zařídí aby se soubor načetl jen jednou od posledního volání `gulp_place(…, "all")`
 * @typedef {"file"|"file_once"|"file_if_exists"} gulp_place_file
 */
/**
 * Vloží obsah souborů dle zadaného paternu
 * - `files_once`: zařídí aby se každý soubor načetl jen jednou od posledního volání `gulp_place(…, "all")`
 * @typedef {"files"|"files_once"|"glob"} gulp_place_files
 */
/**
 * Vloží obsah proměnné při buildu (viz parametr `variable_eval` v příslušném gulp tasku). V případě `eval*` lze proměnnou i měnit dynamicky (střídmě používat naříklad pro šablony)
 * @typedef {"variable"|"eval"|"eval_out"} gulp_place_variable
 */
/**
 * Vyresetování interní paměti (typicky pro `*_once`)
 * @typedef {"clean"} gulp_place_clean
 */
/**
 * Jako `target` se zadává stringifikovaný JSON ve tvaru `{ glob, file, name, type, depends }`. Cílové soubory interpretuje jako modul (jmenný prostor)
 * 
 * - Jedno z `file`/`glob` musí být definováno. Funguje jako `*_once`.
 *      - V cílových souborech zpracovává "import"/"export" klíčová slova (v případě "module_native" je situcae jednoduchá, jen se přeloží `depends`)
 *      - `/export (default )?(function|const|let|var|class) (?<name>…)…/g`: Tyto výrazy jsou přeloženy do IIFE jako `const name= (()=> { return EXPORTED; })();`
 *      - `/import (\* as [^ ]+|{[^}]+}) from "depends:([^"]+)"/g`: Přeloží `depends` dle zvoleného typu modulu
 * - `name`: výsledné jméno modulu (vytvoří např. `const name= (()=>{ … })();`)
 * - `type` {"namespace"|"module"|"module_native"}: "namespace" je defaultní
 * - Příklad: [gulp-place/tests/combine-test at master · jaandrle/gulp-place](https://github.com/jaandrle/gulp-place/tree/master/tests/combine-test)
 * @typedef {"combine"} gulp_place_combine
 */