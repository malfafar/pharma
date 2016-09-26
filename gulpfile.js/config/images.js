var config = require('./')
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

module.exports = {
  source: config.assetsPath+'img/**/*',
  dest: config.buildPath+'assets/img/',
  imagemin: {
    optimizationLevel: 3,
    progressive: true,
    interlaced: true,
    use: [imageminPngquant({quality: '65-80'}), imageminJpegRecompress({loops: 3})]
  }
}
