# load-css

[![testling badge](https://ci.testling.com/thlorenz/load-css.png)](https://ci.testling.com/thlorenz/load-css)

Dynamically loads CSS into the document head.

# Deprecated

This was published after I searched for another module that solves this problem, but didn't find one. However afterwards
I found two!!! Please use those instead:

- [insert-css](https://github.com/substack/insert-css) exact same thing
- [cssify2](https://github.com/trxcllnt/cssify2) transform that supports `require`ing css files

Therefore **this module has been unpublished to avoid duplication**.

```js
var loadCSS = require('load-css');
var css = [
  'div {'
, ' color: green;'
, '}'
].join('\n')

loadCSS(css);
```

#### With browserify and brfs you can even load a css file

```js
var fs = require('fs')
var loadCSS = require('load-css');

// the brfs transform will inline the index.css content for us when generating the bundle
// make sure to include it as a transform: browserify -t brfs index.js
var css = fs.readFileSync(__dirname + '/index.css');

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
- `npm run demo-file` demonstrates how to load a css file using the [brfs](https://github.com/substack/brfs) [browserify](https://github.com/substack/node-browserify) transform

## License

MIT
