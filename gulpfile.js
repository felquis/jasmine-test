var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');

gulp.task('spec', function() {
  gulp
    .src(['./src/**/*.js', './spec/**/*.spec.js'])
    .pipe(jasmine({
      integration: true,
      jasmineVersion: '2.3'
    }));
});
