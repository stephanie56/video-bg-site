var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('html', function(){
  // do something here
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  }); // watch html
  watch('./app/assets/**/*.css', function(){
    gulp.start('styles');
  }); // watch styles
});
