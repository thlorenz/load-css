'use strict';

var browserify = require('browserify');
var fs = require('fs');

browserify()
  .require(require.resolve('./index'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
