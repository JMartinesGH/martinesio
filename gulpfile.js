var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');


gulp.task('sass', function () {
    return gulp.src('./scss/styles.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./assets/css'));
});


gulp.task('sass:watch',function() {
  gulp.watch('scss/styles.scss', gulp.series('sass'));
});
