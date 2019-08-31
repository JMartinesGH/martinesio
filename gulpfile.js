var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('sass:watch',function() {
    gulp.watch('scss/styles.scss', gulp.series('sass'));
});
