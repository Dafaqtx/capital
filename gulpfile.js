const gulp   = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('compress', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});