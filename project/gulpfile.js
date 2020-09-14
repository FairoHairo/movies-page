var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-compile', () => {
    return gulp.src('./sass/style.scss')
           .pipe(sourcemaps.init())
           .pipe(sass().on('error', sass.logError))
           .pipe(sourcemaps.write('./'))
           .pipe(gulp.dest('./css'));
});