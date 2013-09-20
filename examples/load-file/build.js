'use strict';

var browserify = require('browserify');
var fs = require('fs');

browserify()
  .require(require.resolve('./index'), { entry: true })
  // this transform inlines the index.css content
  .transform('brfs')
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
