// instanciando módulos
var gulp = require('gulp');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function() {
    return gulp.src('../_html/assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', notify.onError(function(error) {
            return 'Erro ao compilar CSS: ' + error.message;
        })))
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../_html/build/css'))
        .pipe(notify({ message: 'CSS concluído', onLast: true }));
});


gulp.task('babel', function() {
    return gulp.src([
        '../_html/assets/js/jquery-1.12.4.min.js',
        '../_html/assets/js/popper.js',
        '../_html/assets/js/owl.carousel.min.js',
        '../_html/assets/js/bootstrap.min.js',
        '../_html/assets/js/site.js'
    ])


        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../_html/build/js'))
        .pipe(notify({ message: 'Scripts concluídos', onLast: true }));
});


gulp.task('images', function() {
    return gulp.src('../_html/assets/images/**')
        .pipe(changed('../_html/build/images'))
        .pipe(gulp.dest('../_html/build/images'))
});


gulp.task('watch', ['sass', 'babel', 'images'], function() {
    gulp.watch('../_html/assets/sass/**/*.scss', ['sass']);
    gulp.watch('../_html/assets/js/**/*.js', ['babel']);
    gulp.watch('../_html/assets/images/*', ['images']);
});

gulp.task('default', ['sass', 'babel', 'images', 'watch']);
