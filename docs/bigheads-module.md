# SVGBigHeads – Documentation
[⇠ Go back to GitHub repository](https://github.com/IndigoMultimediaTeam/svg-based-bigheads#readme)
<hr>
<p>Overview</p>
<hr>

## Classes

<dl>
<dt><a href="#SVGBigHeadsElement">SVGBigHeadsElement</a> ⇐ <code>HTMLElement</code></dt>
<dd></dd>
<dt><a href="#SVGBigHeadsPartElement">SVGBigHeadsPartElement</a> ⇐ <code>HTMLElement</code></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#colors">colors</a></dt>
<dd><p>Dictionary of all editable colors (in the form <code>--bigheads-color-${name}</code>) with default values</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#data">data</a> : <code>object</code> ℗</dt>
<dd></dd>
<dt><a href="#style_global">style_global</a> : <code>object</code> ℗</dt>
<dd></dd>
<dt><a href="#avatar_svg">avatar_svg</a> : <code>object</code> ℗</dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#parts_dictionary">parts_dictionary</a> : <code><a href="#_JSON_parts">_JSON_parts</a></code></dt>
<dd><p>All values are <a href="#_JSON_Tarray">_JSON_Tarray</a></p>
</dd>
<dt><a href="#createElement">createElement</a> : <code><a href="#__createElementNS">__createElementNS</a></code> ℗</dt>
<dd><p>Creates elemnet in <em>svg</em> namespace</p>
</dd>
<dt><a href="#version">version</a> : <code>string</code></dt>
<dd><p>Library version</p>
</dd>
<dt><a href="#type">type</a> : <code>&quot;client&quot;</code> | <code>&quot;server&quot;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#isNotGenderType">isNotGenderType(candidate)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#createGroupedElement">createGroupedElement(els_object)</a> ⇒ <code><a href="#GroupedElement">GroupedElement</a></code> ℗</dt>
<dd></dd>
<dt><a href="#createSVG">createSVG()</a> ⇒ <code>SVGElement</code> ℗</dt>
<dd></dd>
<dt><a href="#setHref">setHref(element, value)</a> ℗</dt>
<dd><p>Sets &#39;xlink:href&#39; for given element</p>
</dd>
<dt><a href="#createUSE">createUSE(href)</a> ⇒ <code>SVGUseElement</code> ℗</dt>
<dd></dd>
<dt><a href="#mixinObservedAttributes">mixinObservedAttributes(BaseClass, attributes_names)</a> ⇒ <code>HTMLElement</code> ℗</dt>
<dd><p>Helper for registering <code>observedAttributes</code> and getters/setters</p>
</dd>
<dt><a href="#avatarPartHref">avatarPartHref(d, type, [name])</a> ⇒ <code>string</code> ℗</dt>
<dd></dd>
<dt><a href="#findSafeLayer">findSafeLayer(d, type)</a> ⇒ <code>SVGUseElement</code> ℗</dt>
<dd></dd>
<dt><a href="#hairFullConfig">hairFullConfig(name)</a> ⇒ <code><a href="#HairPartsNames">HairPartsNames</a></code> ℗</dt>
<dd><p>Returns filtered non-false parts and with full name as values (eg. <code>long01-back</code>).</p>
</dd>
<dt><a href="#avatarUpdateHair">avatarUpdateHair(svg, d)</a> ℗</dt>
<dd></dd>
<dt><a href="#nextPartName">nextPartName(part_name, current_name, [shift])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getFromJSON">getFromJSON()</a> ⇒ <code><a href="#json">json</a></code> ℗</dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ConfigKeys">ConfigKeys</a> : <code>&quot;href&quot;</code> | <code><a href="#_JSON_parts_keys">_JSON_parts_keys</a></code> ℗</dt>
<dd></dd>
<dt><a href="#_PreConfig">_PreConfig</a> : <code>object</code> ℗</dt>
<dd></dd>
<dt><a href="#Data">Data</a> : <code>object</code> ℗</dt>
<dd></dd>
<dt><a href="#Config">Config</a> : <code><a href="#_PreConfig">_PreConfig</a></code> | <code><a href="#_JSON_config_parts">_JSON_config_parts</a></code> ℗</dt>
<dd></dd>
<dt><a href="#__createElementNS">__createElementNS</a> ⇒ <code>SVGElement</code> | <code>SVGUseElement</code></dt>
<dd></dd>
<dt><a href="#GroupedElement">GroupedElement</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#style_options">style_options</a> : <code>Object</code></dt>
<dd><p>Contains options for generating default styles for <code>&lt;svg-bigheads&gt;</code>. Changes makes sence only before fisrt <code>&lt;svg-bigheads&gt;</code> is created. See <a href="style.cerate">style.cerate</a>.</p>
</dd>
<dt><a href="#HairPartsNames">HairPartsNames</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_colors_keys">_JSON_colors_keys</a> : <code>&quot;hair&quot;</code> | <code>&quot;clothes&quot;</code> | <code>&quot;hat&quot;</code> | <code>&quot;mouth&quot;</code> | <code>&quot;skin&quot;</code></dt>
<dd><p>Final usage of colors are: <code>--bigheads-color-__color_name__</code></p>
</dd>
<dt><a href="#_JSON_parts_keys">_JSON_parts_keys</a> : <code>&quot;glasses&quot;</code> | <code>&quot;breasts&quot;</code> | <code>&quot;eyebrow&quot;</code> | <code>&quot;facialhair&quot;</code> | <code>&quot;hair&quot;</code> | <code>&quot;hat&quot;</code> | <code>&quot;nose&quot;</code> | <code>&quot;base&quot;</code> | <code>&quot;clothes&quot;</code> | <code>&quot;eyes&quot;</code> | <code>&quot;mouth&quot;</code></dt>
<dd><p>All svg files options</p>
</dd>
<dt><a href="#_JSON_Tstring">_JSON_Tstring</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#_JSON_Tarray">_JSON_Tarray</a> : <code>Array.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#_JSON_Tobject">_JSON_Tobject</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_colors">_JSON_colors</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_parts">_JSON_parts</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_config_colors">_JSON_config_colors</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_config_parts">_JSON_config_parts</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_JSON_safe_layers_nth">_JSON_safe_layers_nth</a> : <code><a href="#_JSON_parts_keys">Array.&lt;_JSON_parts_keys&gt;</a></code></dt>
<dd></dd>
<dt><a href="#_JSON_safe_layers">_JSON_safe_layers</a> : <code><a href="#_JSON_safe_layers_nth">_JSON_safe_layers_nth</a></code> | <code><a href="#_JSON_safe_layers_nth">Array.&lt;_JSON_safe_layers_nth&gt;</a></code></dt>
<dd></dd>
<dt><a href="#json">json</a> : <code>object</code> ℗</dt>
<dd></dd>
</dl>

<hr>
<p>Content</p>
<hr>

<a name="SVGBigHeadsElement"></a>

## SVGBigHeadsElement ⇐ <code>HTMLElement</code>
**Kind**: global class <a name="SVGBigHeadsElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L467"><small>(defined@467)</small></a>  
**Extends**: <code>HTMLElement</code>  

* [SVGBigHeadsElement](#SVGBigHeadsElement) ⇐ <code>HTMLElement</code>
    * [new SVGBigHeadsElement()](#new_SVGBigHeadsElement_new)
    * _instance_
        * [.update(type)](#SVGBigHeadsElement+update)
    * _static_
        * [.tag_name](#SVGBigHeadsElement.tag_name)


* * *

<a name="new_SVGBigHeadsElement_new"></a>

### new SVGBigHeadsElement()
>Represents html tag `<svg-bigheads …>`, for all possibilities (the '…' part) see [ConfigKeys](#ConfigKeys) and [parts_dictionary](#parts_dictionary).


* * *

<a name="SVGBigHeadsElement+update"></a>

### svgBigHeadsElement.update(type)
**Kind**: instance method of [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) <a name="SVGBigHeadsElement+update" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L501"><small>(defined@501)</small></a>  

| Param | Type |
| --- | --- |
| type | [<code>ConfigKeys</code>](#ConfigKeys) | 


* * *

<a name="SVGBigHeadsElement.tag_name"></a>

### SVGBigHeadsElement.tag\_name
>Returns html name represantion

**Kind**: static property of [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) <a name="SVGBigHeadsElement.tag_name" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L478"><small>(defined@478)</small></a>  
**Getter**:   

* * *

<a name="SVGBigHeadsPartElement"></a>

## SVGBigHeadsPartElement ⇐ <code>HTMLElement</code>
**Kind**: global class <a name="SVGBigHeadsPartElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L535"><small>(defined@535)</small></a>  
**Extends**: <code>HTMLElement</code>  

* [SVGBigHeadsPartElement](#SVGBigHeadsPartElement) ⇐ <code>HTMLElement</code>
    * [new SVGBigHeadsPartElement()](#new_SVGBigHeadsPartElement_new)
    * [.nextValue(shift)](#SVGBigHeadsPartElement+nextValue)


* * *

<a name="new_SVGBigHeadsPartElement_new"></a>

### new SVGBigHeadsPartElement()
>Represents html tag `<svg-bigheads-part href="…" type="…" name="…">`.


* * *

<a name="SVGBigHeadsPartElement+nextValue"></a>

### svgBigHeadsPartElement.nextValue(shift)
>Regenrate html elememnt with the next svg part in [parts_dictionary](#parts_dictionary).

**Kind**: instance method of [<code>SVGBigHeadsPartElement</code>](#SVGBigHeadsPartElement) <a name="SVGBigHeadsPartElement+nextValue" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L568"><small>(defined@568)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| shift | <code>numbet</code> | <code>1</code> | 


* * *

<a name="colors"></a>

## colors
>Dictionary of all editable colors (in the form `--bigheads-color-${name}`) with default values

**Kind**: global variable <a name="colors" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L7"><small>(defined@7)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| colors | <code>object</code> | 


* * *

<a name="data"></a>

## data : <code>object</code> ℗
**Kind**: global namespace <a name="data" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L37"><small>(defined@37)</small></a>  
**Access**: private  

* [data](#data) : <code>object</code> ℗
    * [.isFromMultiplePieces(name)](#data.isFromMultiplePieces) ⇒ <code>boolean</code>
    * [.isNullable(name)](#data.isNullable) ⇒ <code>boolean</code>
    * [.getNextPartName(part_name, current_name, [shift])](#data.getNextPartName) ⇒ <code>string</code>
    * [.get(target)](#data.get) ⇒ [<code>Data</code>](#Data)
    * [.setAttribute(data, name, [value])](#data.setAttribute)
    * [.getAttribute(data, name)](#data.getAttribute)
    * [.hasElement(data, name)](#data.hasElement) ⇒ <code>boolean</code>
    * [.getElement(data, name)](#data.getElement) ⇒ <code>SVGUseElement</code> \| [<code>GroupedElement</code>](#GroupedElement) \| <code>undefined</code>
    * [.setElement(data, name, el)](#data.setElement)
    * [.deleteElement(data, name)](#data.deleteElement)


* * *

<a name="data.isFromMultiplePieces"></a>

### data.isFromMultiplePieces(name) ⇒ <code>boolean</code>
**Kind**: static method of [<code>data</code>](#data) <a name="data.isFromMultiplePieces" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L46"><small>(defined@46)</small></a>  

| Param | Type |
| --- | --- |
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="data.isNullable"></a>

### data.isNullable(name) ⇒ <code>boolean</code>
**Kind**: static method of [<code>data</code>](#data) <a name="data.isNullable" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L54"><small>(defined@54)</small></a>  

| Param | Type |
| --- | --- |
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="data.getNextPartName"></a>

### data.getNextPartName(part_name, current_name, [shift]) ⇒ <code>string</code>
**Kind**: static method of [<code>data</code>](#data) <a name="data.getNextPartName" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L63"><small>(defined@63)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| part_name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) |  | 
| current_name | <code>string</code> |  | 
| [shift] | <code>number</code> | <code>1</code> | 


* * *

<a name="data.get"></a>

### data.get(target) ⇒ [<code>Data</code>](#Data)
**Kind**: static method of [<code>data</code>](#data) <a name="data.get" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L74"><small>(defined@74)</small></a>  

| Param | Type |
| --- | --- |
| target | [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) | 


* * *

<a name="data.setAttribute"></a>

### data.setAttribute(data, name, [value])
**Kind**: static method of [<code>data</code>](#data) <a name="data.setAttribute" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L82"><small>(defined@82)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| data | [<code>Data</code>](#Data) |  | 
| name | [<code>ConfigKeys</code>](#ConfigKeys) |  | 
| [value] | <code>string</code> \| <code>null</code> | <code>null</code> | 


* * *

<a name="data.getAttribute"></a>

### data.getAttribute(data, name)
**Kind**: static method of [<code>data</code>](#data) <a name="data.getAttribute" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L88"><small>(defined@88)</small></a>  

| Param | Type |
| --- | --- |
| data | [<code>Data</code>](#Data) | 
| name | [<code>ConfigKeys</code>](#ConfigKeys) | 


* * *

<a name="data.hasElement"></a>

### data.hasElement(data, name) ⇒ <code>boolean</code>
**Kind**: static method of [<code>data</code>](#data) <a name="data.hasElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L95"><small>(defined@95)</small></a>  

| Param | Type |
| --- | --- |
| data | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="data.getElement"></a>

### data.getElement(data, name) ⇒ <code>SVGUseElement</code> \| [<code>GroupedElement</code>](#GroupedElement) \| <code>undefined</code>
**Kind**: static method of [<code>data</code>](#data) <a name="data.getElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L102"><small>(defined@102)</small></a>  

| Param | Type |
| --- | --- |
| data | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="data.setElement"></a>

### data.setElement(data, name, el)
**Kind**: static method of [<code>data</code>](#data) <a name="data.setElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L109"><small>(defined@109)</small></a>  

| Param | Type |
| --- | --- |
| data | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 
| el | <code>SVGUseElement</code> \| [<code>GroupedElement</code>](#GroupedElement) | 


* * *

<a name="data.deleteElement"></a>

### data.deleteElement(data, name)
**Kind**: static method of [<code>data</code>](#data) <a name="data.deleteElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L115"><small>(defined@115)</small></a>  

| Param | Type |
| --- | --- |
| data | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="style_global"></a>

## style\_global : <code>object</code> ℗
**Kind**: global namespace <a name="style_global" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L270"><small>(defined@270)</small></a>  
**Access**: private  

* [style_global](#style_global) : <code>object</code> ℗
    * [.options](#style_global.options)
    * [.is_created](#style_global.is_created) ℗
    * [.create()](#style_global.create)


* * *

<a name="style_global.options"></a>

### style_global.options
**Kind**: static property of [<code>style\_global</code>](#style_global) <a name="style_global.options" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L276"><small>(defined@276)</small></a>  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| options | [<code>style\_options</code>](#style_options) | 


* * *

<a name="style_global.is_created"></a>

### style_global.is\_created ℗
>Keeping information the global style was created – see [style.cerate](style.cerate)

**Kind**: static property of [<code>style\_global</code>](#style_global) <a name="style_global.is_created" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L283"><small>(defined@283)</small></a>  
**Access**: private  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [is_created] | <code>boolean</code> | <code>false</code> | 


* * *

<a name="style_global.create"></a>

### style_global.create()
>Creates new `<style>` inside `<head>` with default styling of `<svg-bigheads>` (displays block and size)

**Kind**: static method of [<code>style\_global</code>](#style_global) <a name="style_global.create" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L290"><small>(defined@290)</small></a>  
**Access**: public  

* * *

<a name="avatar_svg"></a>

## avatar\_svg : <code>object</code> ℗
**Kind**: global namespace <a name="avatar_svg" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L400"><small>(defined@400)</small></a>  
**Access**: private  

* [avatar_svg](#avatar_svg) : <code>object</code> ℗
    * [.create(big_heads)](#avatar_svg.create)
    * [.get(big_heads)](#avatar_svg.get)
    * [.appendUSE(svg, d, name)](#avatar_svg.appendUSE) ⇒ <code>SVGUseElement</code>
    * [.insertAfterUSE(svg, d, name, el)](#avatar_svg.insertAfterUSE) ⇒ <code>SVGUseElement</code>
    * [.remove(big_heads)](#avatar_svg.remove)


* * *

<a name="avatar_svg.create"></a>

### avatar_svg.create(big_heads)
**Kind**: static method of [<code>avatar\_svg</code>](#avatar_svg) <a name="avatar_svg.create" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L408"><small>(defined@408)</small></a>  

| Param | Type |
| --- | --- |
| big_heads | [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) | 


* * *

<a name="avatar_svg.get"></a>

### avatar_svg.get(big_heads)
**Kind**: static method of [<code>avatar\_svg</code>](#avatar_svg) <a name="avatar_svg.get" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L417"><small>(defined@417)</small></a>  

| Param | Type |
| --- | --- |
| big_heads | [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) | 


* * *

<a name="avatar_svg.appendUSE"></a>

### avatar_svg.appendUSE(svg, d, name) ⇒ <code>SVGUseElement</code>
>Append `<use>` to internal `<svg>`.

**Kind**: static method of [<code>avatar\_svg</code>](#avatar_svg) <a name="avatar_svg.appendUSE" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L426"><small>(defined@426)</small></a>  

| Param | Type |
| --- | --- |
| svg | <code>SVGElement</code> | 
| d | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="avatar_svg.insertAfterUSE"></a>

### avatar_svg.insertAfterUSE(svg, d, name, el) ⇒ <code>SVGUseElement</code>
>Insert `<use>` to `<svg>` before `el`.

**Kind**: static method of [<code>avatar\_svg</code>](#avatar_svg) <a name="avatar_svg.insertAfterUSE" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L440"><small>(defined@440)</small></a>  

| Param | Type |
| --- | --- |
| svg | <code>SVGElement</code> | 
| d | [<code>Data</code>](#Data) | 
| name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 
| el | <code>SVGUseElement</code> | 


* * *

<a name="avatar_svg.remove"></a>

### avatar_svg.remove(big_heads)
**Kind**: static method of [<code>avatar\_svg</code>](#avatar_svg) <a name="avatar_svg.remove" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L449"><small>(defined@449)</small></a>  

| Param | Type |
| --- | --- |
| big_heads | [<code>SVGBigHeadsElement</code>](#SVGBigHeadsElement) | 


* * *

<a name="parts_dictionary"></a>

## parts\_dictionary : [<code>\_JSON\_parts</code>](#_JSON_parts)
>All values are [_JSON_Tarray](#_JSON_Tarray)

**Kind**: global constant <a name="parts_dictionary" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L165"><small>(defined@165)</small></a>  

* * *

<a name="createElement"></a>

## createElement : [<code>\_\_createElementNS</code>](#__createElementNS) ℗
>Creates elemnet in *svg* namespace

**Kind**: global constant <a name="createElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L191"><small>(defined@191)</small></a>  
**Access**: private  

* * *

<a name="version"></a>

## version : <code>string</code>
>Library version

**Kind**: global constant <a name="version" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L687"><small>(defined@687)</small></a>  

* * *

<a name="type"></a>

## type : <code>&quot;client&quot;</code> \| <code>&quot;server&quot;</code>
**Kind**: global constant <a name="type" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L691"><small>(defined@691)</small></a>  

* * *

<a name="isNotGenderType"></a>

## isNotGenderType(candidate) ⇒ <code>boolean</code>
**Kind**: global function <a name="isNotGenderType" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L180"><small>(defined@180)</small></a>  

| Param | Type |
| --- | --- |
| candidate | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="createGroupedElement"></a>

## createGroupedElement(els_object) ⇒ [<code>GroupedElement</code>](#GroupedElement) ℗
**Kind**: global function <a name="createGroupedElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L208"><small>(defined@208)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| els_object | <code>object</code> | 
| [els_object.front] | <code>SVGUseElement</code> | 
| [els_object.top] | <code>SVGUseElement</code> | 
| [els_object.back] | <code>SVGUseElement</code> | 


* * *

<a name="createSVG"></a>

## createSVG() ⇒ <code>SVGElement</code> ℗
**Kind**: global function <a name="createSVG" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L217"><small>(defined@217)</small></a>  
**Access**: private  

* * *

<a name="setHref"></a>

## setHref(element, value) ℗
>Sets 'xlink:href' for given element

**Kind**: global function <a name="setHref" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L229"><small>(defined@229)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| element | <code>SVGUseElement</code> | 
| value | <code>String</code> | 


* * *

<a name="createUSE"></a>

## createUSE(href) ⇒ <code>SVGUseElement</code> ℗
**Kind**: global function <a name="createUSE" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L235"><small>(defined@235)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| href | <code>string</code> | 


* * *

<a name="mixinObservedAttributes"></a>

## mixinObservedAttributes(BaseClass, attributes_names) ⇒ <code>HTMLElement</code> ℗
>Helper for registering `observedAttributes` and getters/setters

**Kind**: global function <a name="mixinObservedAttributes" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L247"><small>(defined@247)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| BaseClass | <code>HTMLElement</code> | 
| attributes_names | <code>Array.&lt;string&gt;</code> | 


* * *

<a name="avatarPartHref"></a>

## avatarPartHref(d, type, [name]) ⇒ <code>string</code> ℗
**Kind**: global function <a name="avatarPartHref" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L308"><small>(defined@308)</small></a>  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| d | [<code>Data</code>](#Data) |  |
| type | [<code>ConfigKeys</code>](#ConfigKeys) |  |
| [name] | <code>string</code> | Defaults to value saved in `d` |


* * *

<a name="findSafeLayer"></a>

## findSafeLayer(d, type) ⇒ <code>SVGUseElement</code> ℗
**Kind**: global function <a name="findSafeLayer" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L322"><small>(defined@322)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| d | [<code>Data</code>](#Data) | 
| type | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) | 


* * *

<a name="hairFullConfig"></a>

## hairFullConfig(name) ⇒ [<code>HairPartsNames</code>](#HairPartsNames) ℗
>Returns filtered non-false parts and with full name as values (eg. `long01-back`).

**Kind**: global function <a name="hairFullConfig" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L354"><small>(defined@354)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 


* * *

<a name="avatarUpdateHair"></a>

## avatarUpdateHair(svg, d) ℗
**Kind**: global function <a name="avatarUpdateHair" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L375"><small>(defined@375)</small></a>  
**Access**: private  

| Param | Type |
| --- | --- |
| svg | <code>SVGElement</code> | 
| d | [<code>Data</code>](#Data) | 


* * *

<a name="nextPartName"></a>

## nextPartName(part_name, current_name, [shift]) ⇒ <code>string</code>
**Kind**: global function <a name="nextPartName" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L584"><small>(defined@584)</small></a>  

| Param | Type | Default |
| --- | --- | --- |
| part_name | [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) |  | 
| current_name | <code>string</code> |  | 
| [shift] | <code>number</code> | <code>1</code> | 


* * *

<a name="getFromJSON"></a>

## getFromJSON() ⇒ [<code>json</code>](#json) ℗
**Kind**: global function <a name="getFromJSON" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L681"><small>(defined@681)</small></a>  
**Access**: private  

* * *

<a name="ConfigKeys"></a>

## ConfigKeys : <code>&quot;href&quot;</code> \| [<code>\_JSON\_parts\_keys</code>](#_JSON_parts_keys) ℗
**Kind**: global typedef <a name="ConfigKeys" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L10"><small>(defined@10)</small></a>  
**Access**: private  

* * *

<a name="_PreConfig"></a>

## \_PreConfig : <code>object</code> ℗
**Kind**: global typedef <a name="_PreConfig" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L15"><small>(defined@15)</small></a>  
**Access**: private  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [href] | <code>string</code> | Target of svg file |


* * *

<a name="Data"></a>

## Data : <code>object</code> ℗
**Kind**: global typedef <a name="Data" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L21"><small>(defined@21)</small></a>  
**Access**: private  
**Properties**

| Name | Type |
| --- | --- |
| attributes | [<code>Config</code>](#Config) | 
| els | <code>Object.&lt;\_JSON\_parts\_keys, (SVGElement\|SVGUseElement)&gt;</code> | 


* * *

<a name="Config"></a>

## Config : [<code>\_PreConfig</code>](#_PreConfig) \| [<code>\_JSON\_config\_parts</code>](#_JSON_config_parts) ℗
**Kind**: global typedef <a name="Config" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L28"><small>(defined@28)</small></a>  
**Access**: private  

* * *

<a name="__createElementNS"></a>

## \_\_createElementNS ⇒ <code>SVGElement</code> \| <code>SVGUseElement</code>
**Kind**: global typedef <a name="__createElementNS" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L181"><small>(defined@181)</small></a>  

* * *

<a name="GroupedElement"></a>

## GroupedElement : <code>Object</code>
**Kind**: global typedef <a name="GroupedElement" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L192"><small>(defined@192)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [front] | <code>SVGUseElement</code> |  |
| [top] | <code>SVGUseElement</code> |  |
| [back] | <code>SVGUseElement</code> |  |
| remove | <code>function</code> | Removes all elements |


* * *

<a name="style_options"></a>

## style\_options : <code>Object</code>
>Contains options for generating default styles for `<svg-bigheads>`. Changes makes sence only before fisrt `<svg-bigheads>` is created. See [style.cerate](style.cerate).

**Kind**: global typedef <a name="style_options" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L258"><small>(defined@258)</small></a>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [allow] | <code>boolean</code> | <code>true</code> | Allow creating global default styles |
| [fit] | <code>string</code> | <code>&quot;contain&quot;</code> | CSS `fit` property of `<svg>` inside `<svg-bigheads>` |
| [big_hat] | <code>string</code> | <code>&quot;bigheads-hat-longhairs&quot;</code> | Class name for making hat bigger when long hair |


* * *

<a name="HairPartsNames"></a>

## HairPartsNames : <code>object</code>
**Kind**: global typedef <a name="HairPartsNames" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L341"><small>(defined@341)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| [front] | <code>string</code> | 
| [top] | <code>string</code> | 
| [back] | <code>string</code> | 


* * *

<a name="_JSON_colors_keys"></a>

## \_JSON\_colors\_keys : <code>&quot;hair&quot;</code> \| <code>&quot;clothes&quot;</code> \| <code>&quot;hat&quot;</code> \| <code>&quot;mouth&quot;</code> \| <code>&quot;skin&quot;</code>
>Final usage of colors are: `--bigheads-color-__color_name__`

**Kind**: global typedef <a name="_JSON_colors_keys" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L586"><small>(defined@586)</small></a>  

* * *

<a name="_JSON_parts_keys"></a>

## \_JSON\_parts\_keys : <code>&quot;glasses&quot;</code> \| <code>&quot;breasts&quot;</code> \| <code>&quot;eyebrow&quot;</code> \| <code>&quot;facialhair&quot;</code> \| <code>&quot;hair&quot;</code> \| <code>&quot;hat&quot;</code> \| <code>&quot;nose&quot;</code> \| <code>&quot;base&quot;</code> \| <code>&quot;clothes&quot;</code> \| <code>&quot;eyes&quot;</code> \| <code>&quot;mouth&quot;</code>
>All svg files options

**Kind**: global typedef <a name="_JSON_parts_keys" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L591"><small>(defined@591)</small></a>  

* * *

<a name="_JSON_Tstring"></a>

## \_JSON\_Tstring : <code>string</code>
**Kind**: global typedef <a name="_JSON_Tstring" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L596"><small>(defined@596)</small></a>  

* * *

<a name="_JSON_Tarray"></a>

## \_JSON\_Tarray : <code>Array.&lt;string&gt;</code>
**Kind**: global typedef <a name="_JSON_Tarray" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L600"><small>(defined@600)</small></a>  

* * *

<a name="_JSON_Tobject"></a>

## \_JSON\_Tobject : <code>object</code>
**Kind**: global typedef <a name="_JSON_Tobject" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L604"><small>(defined@604)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [front] | <code>boolean</code> |  |
| [back] | <code>boolean</code> |  |
| [top] | <code>boolean</code> |  |
| [parent] | <code>string</code> | The name of hair to be also used |


* * *

<a name="_JSON_colors"></a>

## \_JSON\_colors : <code>object</code>
**Kind**: global typedef <a name="_JSON_colors" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L612"><small>(defined@612)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| hair | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| clothes | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| hat | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| mouth | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| skin | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 


* * *

<a name="_JSON_parts"></a>

## \_JSON\_parts : <code>object</code>
**Kind**: global typedef <a name="_JSON_parts" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L621"><small>(defined@621)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| glasses | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| breasts | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| eyebrow | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| facialhair | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| hair | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| hat | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| nose | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| base | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| clothes | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| eyes | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 
| mouth | [<code>\_JSON\_Tstring</code>](#_JSON_Tstring) \| [<code>\_JSON\_Tarray</code>](#_JSON_Tarray) \| [<code>\_JSON\_Tobject</code>](#_JSON_Tobject) | 


* * *

<a name="_JSON_config_colors"></a>

## \_JSON\_config\_colors : <code>object</code>
**Kind**: global typedef <a name="_JSON_config_colors" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L636"><small>(defined@636)</small></a>  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [hair] | <code>string</code> | <code>&quot;#d96e27&quot;</code> | 
| [clothes] | <code>string</code> | <code>&quot;#d67070&quot;</code> | 
| [hat] | <code>string</code> | <code>&quot;#5bcaf0&quot;</code> | 
| [mouth] | <code>string</code> | <code>&quot;#dd3e3e&quot;</code> | 
| [skin] | <code>string</code> | <code>&quot;#fdd2b2&quot;</code> | 


* * *

<a name="_JSON_config_parts"></a>

## \_JSON\_config\_parts : <code>object</code>
**Kind**: global typedef <a name="_JSON_config_parts" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L645"><small>(defined@645)</small></a>  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [glasses] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [breasts] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [eyebrow] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [facialhair] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [hair] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [hat] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [nose] | <code>string</code> | <code>&quot;none&quot;</code> | 
| [base] | <code>string</code> | <code>&quot;base&quot;</code> | 
| [clothes] | <code>string</code> | <code>&quot;dressshirt&quot;</code> | 
| [eyes] | <code>string</code> | <code>&quot;narrower&quot;</code> | 
| [mouth] | <code>string</code> | <code>&quot;lips&quot;</code> | 


* * *

<a name="_JSON_safe_layers_nth"></a>

## \_JSON\_safe\_layers\_nth : [<code>Array.&lt;\_JSON\_parts\_keys&gt;</code>](#_JSON_parts_keys)
**Kind**: global typedef <a name="_JSON_safe_layers_nth" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L660"><small>(defined@660)</small></a>  

* * *

<a name="_JSON_safe_layers"></a>

## \_JSON\_safe\_layers : [<code>\_JSON\_safe\_layers\_nth</code>](#_JSON_safe_layers_nth) \| [<code>Array.&lt;\_JSON\_safe\_layers\_nth&gt;</code>](#_JSON_safe_layers_nth)
**Kind**: global typedef <a name="_JSON_safe_layers" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L664"><small>(defined@664)</small></a>  

* * *

<a name="json"></a>

## json : <code>object</code> ℗
**Kind**: global typedef <a name="json" href="https://github.com/IndigoMultimediaTeam/svg-based-bigheads/blob/main/dist/client/bigheads-module.js#L669"><small>(defined@669)</small></a>  
**Access**: private  
**Properties**

| Name | Type |
| --- | --- |
| colors | [<code>\_JSON\_colors</code>](#_JSON_colors) | 
| parts | [<code>\_JSON\_parts</code>](#_JSON_parts) | 
| safe_layers | [<code>\_JSON\_safe\_layers</code>](#_JSON_safe_layers) | 


* * *

