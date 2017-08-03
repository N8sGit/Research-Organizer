var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
    gulp.watch(['*.*', './src/**'], ['build']);
});
    // set up the browserify instance on a task basis
var reactEasy = require('gulp-react-easy');
 
gulp.task('build', function() {
    
  return reactEasy({
      file: 'src/app.jsx',
      debug: true // optional, false by default 
    })
    .to('bundle.js')
    .pipe(gulp.dest('./build/'));
    
});


