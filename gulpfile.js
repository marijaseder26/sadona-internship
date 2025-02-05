const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Paths for source and destination files
const paths = {
    scss: 'assets/scss/style.scss',
    css: 'assets/css'
};

// Task to compile SCSS to CSS
function compileSass() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
}

// Task to watch SCSS file for changes
function watchFiles() {
    gulp.watch(paths.scss, compileSass);
}

// Default task to run the watch task
exports.default = gulp.series(compileSass, watchFiles);
