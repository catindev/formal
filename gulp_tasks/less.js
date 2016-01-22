var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

// all-in css
gulp.task('build-less', function() {
    return  gulp.src([ 'src/styles/index.less' ])
    .pipe(less())
    .pipe(cssnano())
    .pipe(rename('./elements.css'))
    .pipe(gulp.dest('build/'));
});
