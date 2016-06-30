var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps');
    uglifycss = require('gulp-uglifycss');



gulp.task('compile-change:scss', function() {
  gulp.watch('assets/sass/**/*.scss', ['sass:dev', 'check:sass']);
});

// to check sass for any wrong coding conventions
gulp.task('check:sass', function(){
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sassLint(
    {
      rules: {
        "single-line-per-selector" : 0,
        "indentation": 0,
        "clean-import-paths" : 0,
        "leading-zero": 0,
        "no-trailing-zero": 0,
        "no-color-literals": 0,
        "nesting-depth": 3
      }
    }
  ))
  .pipe(sassLint.format())
})

// compile sass for production
gulp.task('sass', function() {
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sassLint(
    {
      rules: {
        "single-line-per-selector" : 0,
        "indentation": 0,
        "clean-import-paths" : 0,
        "leading-zero": 0
      }
    }
  ))
  .pipe(sassLint.format())
  .pipe(sourcemaps.init())
  .pipe(concat('index.scss'))
  .pipe(sass().on('error', function(){
    gutil.log(gutil.colors.bgBlue.red('ERROR : SCSS COMPILATION FAILED'));
  }))
  .pipe(uglifycss())
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('dist/css'))
});


// compile sass for development
gulp.task('sass:dev', function() {
  return gulp.src(['assets/sass/**/*.scss'])
  .pipe(sourcemaps.init())
  .pipe(concat('index.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('assets/css'))
});


// watcher for any change
gulp.task('watch:style', [
  'compile-change:scss',
  'check:sass',
  'sass:dev'
]);
