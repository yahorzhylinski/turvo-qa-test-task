'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

var TESTS_PATHS = ['tests/**/*Spec.js'],
    CONFIG_OPTIONS = {
      'configFile': 'protractor.conf.js',
      'debug': false,
      'autoStartStopServer': true
    }
  
gulp.task('protractor', function(callback) {
  gulp
    .src(TESTS_PATHS)
    .pipe(gulpProtractorAngular(CONFIG_OPTIONS))
    .on('error', function(e) {
      console.log(e);
    })
    .on('end', callback);
});