var browserSync         = require('browser-sync')
var gulp                = require('gulp')
var plugins             = require('gulp-load-plugins')()
var config              = require('../config/fonts')

// Images
var fontsTask = function() {
  return gulp.src(config.source)
    .pipe(gulp.dest(config.dest))

}
gulp.task('fonts', fontsTask)
module.exports = fontsTask
