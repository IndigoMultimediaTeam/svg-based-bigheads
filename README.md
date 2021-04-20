# svg-based-bigheads
Jedná se o alternativní přepracovanou verzi projektu/knihovny https://bigheads.io/. Jednotlivé části jsou vlastně samostatné soubory [`svg`](src/svgs/bigheads-parts/), které se zpracují pomocí `gulp`u.
Tak se vytvoří výsledný soubor [`bigheads.svg`](./dist/client/bigheads.svg) s pojmenovanými oblastmi – výsledný avatar lze tedy vytvořit čistě v *HTML* (například):
```html
<svg viewBox="0 0 1000 990">
  <use xlink:href="dist/client/bigheads.svg#hair-mohawk-top"></use>
  <use xlink:href="dist/client/bigheads.svg#base-base"></use>
  …
  <use xlink:href="dist/client/bigheads.svg#glasses-pincenez"></use>
</svg>
```
Pro lepší použitelnost tato knihovna mimojiné nabízí také dvě webové komponenty [SVGBigHeadsElement](docs/bigheads-module.md#SVGBigHeadsElement) a [SVGBigHeadsPartElement](docs/bigheads-module.md#SVGBigHeadsPartElement).

## Aktuální stav
Idea generování avatarů by měla být již finální. Klientská část je taktéž finální, s výhradou, že ještě může docházet ke změnám API. Stojí na podpoře **Web komponent a css proměnných (navíc uvnitř SVG souborů)**.
Přibude ještě serverová část složená z kombinace PHP a JS. Tedy JS části by (asi?) měli sdílet nějaké vlastnosti.

## Plánované verze
- [x] *1.0*: Publikace použitelné knihovny
- [ ] *1.1*: Dodělávky (první verze textů dokumentace/nápověd a příkladů)
- [ ] *1.5*: Ideálně dodělání dokumentace/příkladů apod. Náčrt serverové části (sjednocení API na klientovi)
- [ ] *2.0*: LTS verze (dokončení *1.5* + EN texty)

## Rozcestník
- [Struktura avatara z pohledu grafika](../../wiki/svgs.cs)
- [Úprava avatara z pohledu grafika](../../wiki/svgs_edit.cs)
- [Použití na klientovi](#client-side)
- Použití na serveru
- [Správa repozitáře](#technical-bg)

## Client-side
Lze použít knihovny ve složce [dist/client](dist/client). Soubory `*-module(.min).js` odpovídají [JS modulům](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), případně lze použít *bundle* verzi či *namespace* (`const SVGBigHeads= (function SVGBigHeads_iief(){…})();`).

Dokumentace k nalezení v [docs/bigheads-module.md](docs/bigheads-module.md).

[Ukázka použití (editor avatara)](https://refined-github-html-preview.kidonng.workers.dev/IndigoMultimediaTeam/svg-based-bigheads/raw/master/dist/client-example/index.html) (zdrojové soubory [./bin/client-example](./dist/client-example/)).

## Technical BG
Repozitář naklonujte jak jste zvyklí, poté stačí použít `npm install` a `gulp` (alternativně `npm run gulp`). Sekvence úkolů se provádí dle [package.json](package.json) (klíč `sequence`), položka začínající `!` se přeskakuje.

Konkrétní `gulp` tasky jsou k nalezení v [gulp/tasks/](gulp/tasks/).