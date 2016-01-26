var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
//var concat = require('gulp-concat');

// bundle
gulp.task('bundle', function() {
    return  gulp.src([ 'src/index.less' ])
    .pipe(less())
    .pipe(cssnano())
    .pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
    .pipe(rename('./formal.min.css'))
    .pipe(gulp.dest('build/'));
});

// standalone modules
gulp.task('modules', function() {
    return  gulp.src([ 'src/*.less', '!src/index.less' ])
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('lib/'));
});
