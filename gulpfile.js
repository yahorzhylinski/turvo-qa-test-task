
/*jshint node: true, camelcase: false*/
/*global require: true*/

'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task
gulp.task('protractor', function(callback) {
    gulp
        .src(['tests/**/*Spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});