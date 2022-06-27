# elucidate
Simple, light syntax highlighter for the web.

## Installation
Get the library from NPM
```
npm install @kyleplo/elucidate
```

Or download and host `bundle.min.js`

## Usage
Import the library as an ES6 module
```js
import elucidate from "./elucidate"
```

Get syntax highlighting HTML
```js
elucidate(`
  alert("hello world");
`, "javascript");
// <span class=elucidate-default...
```
The language argument is optional, if ommitted a language-agnostic mode will be used.

The HTML includes 6 classes for various syntax features
- `elucidate-default` - basic content
- `elucidate-symbol` - symbols
- `elucidate-keyword` - keywords
- `elucidate-string` - strings
- `elucidate-number` - numbers
- `elucidate-comment` - comment

CSS for these classes is not included

## Language Support
Elucidate supports the following programming languages
- `actionscript` - ActionScript
- `c` - C
- `c#`/`cs`/`csharp` - C#
- `c++`/`cpp` - C++
- `coffeescript` - CoffeeScript
- `css` - CSS
- `csv` - CSV
- `golang`/`go` - Golang
- `html`/`htm` - HTML
- `java` - Java
- `javascript`/`js`/`jsx` - JavaScript
- `json` - JSON
- `lua` - Lua
- `markdown`/`md` - Markdown
- `php` - PHP
- `python`/`py` - Python
- `ruby` - Ruby
- `scss`/`sass` - SCSS
- `tsv` - TSV
- `typescript`/`ts` - TypeScript
- `xml` - XML
- `yaml`/`yml` - YAML


## Adding a Language
Languages are added in the `languages.js` file and can be submitted via a pull request

Each language has the following properties
- `extend` - Another language string on the list for this language to inherit properties from - if omitted, inherits from the `default` language - note that inherited arrays are not appended - the newer array replaces the old one
- `strings` - Array of strings that delimit strings
- `escape` - Array of strings that when placed before a string delimiter, cause the delimiter to be ignored
- `symbols` - Array of strings used as symbols - case insensitive
- `keywords` - Array of strings used as keywords - case insensitive - will only be detected when surrounded by not-letter characters
- `multiLineComment` - Array of two strings that mark the beginning and end of a segment to be ignored by the parser, or an empty array
- `singleLineComment` - String placed at the beginning of a line causing the parser to ignore the remainder of the line