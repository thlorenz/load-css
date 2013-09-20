# load-css

Dynamically loads CSS into the document head.

```js
var loadCSS = require('load-css');
var css = [
  'div {'
, ' color: green;'
, '}'
].join('\n')

loadCSS.(css);
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

## License

MIT
