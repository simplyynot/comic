'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
	gulp.src('./css/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./css/style.scss', ['sass']);
});