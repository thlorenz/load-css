'use strict';
/*jshint asi: true */

var test = require('tape')
var loadCSS = require('../')
var getStyleProperty = require('get-style-property')

test('\nloading css applies it to the page', function (t) {
  t.plan(2)

  var div = document.createElement('div')
  document.body.appendChild(div);
  div.setInnerText = 'hello world';

  var fontSize = getStyleProperty(div, 'font-size');
  t.notEqual(parseInt(fontSize, 10), 24, 'initially has smaller font-size')

  loadCSS([
      'div {'
    , '  font-size: 24px;'
    , '}'
    ].join('\n')
  )

  fontSize = getStyleProperty(div, 'font-size');
  t.equal(parseInt(fontSize, 10), 24, 'after loading style it applies larger font-size to element')
})
