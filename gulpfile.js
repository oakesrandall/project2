const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('default', function() {
    //console.log('Gulp is working');
    gulp.watch('public/sass/**/*.scss', ['styles']);
    gulp.watch('models/**/*.js', ['scripts']);
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
    return gulp.src('models/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});