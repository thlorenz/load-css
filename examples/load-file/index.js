'use strict';

var fs = require('fs')
var loadCSS = require('../../');

// the brfs transform will inline the index.css content for us when generating the bundle
// see: build.js
var css = fs.readFileSync(__dirname + '/index.css');

setTimeout(loadCSS.bind(null, css), 1000);
