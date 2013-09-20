# load-css

[![testling badge](https://ci.testling.com/thlorenz/load-css.png)](https://ci.testling.com/thlorenz/load-css)

Dynamically loads CSS into the document head.

```js
var loadCSS = require('load-css');
var css = [
  'div {'
, ' color: green;'
, '}'
].join('\n')

loadCSS(css);
```

## Installation

    npm install load-css

## API

####*loadCSS(css)*

```
/**
 * Loads the given css string into the document head as an inlined script.
 * 
 * @name loadCSS
 * @function
 * @param css {String} the css to load
 */
```

## Examples

You can run the [examples](https://github.com/thlorenz/load-css/tree/master/examples) via the following commands:

- `npm run demo-string` demonstrates how to load a css string
- `npm run demo-filw` demonstrates how to load a css file using the [brfs](https://github.com/substack/brfs) [browserify](https://github.com/substack/node-browserify) transform

## License

MIT
