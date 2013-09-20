'use strict';

var loadCSS = require('../../');
var css = [
  'div {'
, ' color: green;'
, '}'
].join('\n')

setTimeout(loadCSS.bind(null, css), 1000);
