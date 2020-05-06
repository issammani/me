const gulp = require('gulp');

const pug = require('gulp-pug');

const htmlmin = require('gulp-htmlmin');

const minifyJS = require('gulp-minify');

const concatJS = require('gulp-concat');

const concatCss = require('gulp-concat-css');

const purgeCss = require('gulp-purgecss');

const minifyCss = require('gulp-clean-css');

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');

const imagemin = require('gulp-imagemin');

const webp = require('gulp-webp');

const del = require('del');

const rename = require('gulp-rename');

const config = require('./config');

const pxtorem = require('gulp-pxtorem');

// ------ Dev mode tasks
gulp.task('dev-sass', ()=> {
    del('dev/css/*.css');
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dev/css/'));
});

gulp.task('dev-styles', ()=>
    gulp.src('dev/css/*.css')
    .pipe(concatCss('styles.min.css'))
    .pipe(pxtorem())
    .pipe(gulp.dest('dev/css/'))
);

gulp.task('dev-js', ()=> 
    gulp.src('js/*.js')
    .pipe(gulp.dest('dev/js/'))
);

gulp.task('dev-images', ()=>
    gulp.src('images/*.{jpeg,jpg,gif,svg,png,webp,ico}')
    .pipe(gulp.dest('dev/images/'))
)

gulp.task('dev-pug', ()=> 
  gulp.src('pages/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('dev'))
);



// Watchers
gulp.task('watch', () => {
    gulp.watch('scss/*.scss', gulp.series(['dev-sass','dev-styles']));
    
    gulp.watch('pages/**/*.pug',gulp.series(['dev-pug']));
    
    gulp.watch('js/*.js',gulp.series(['dev-js']));
})

gulp.task('dev-clean', () => 
    del('dev')
);

gulp.task('dev', gulp.series(['dev-clean','dev-sass', 'dev-styles', 'dev-js', 'dev-pug','dev-images', 'dev-router']));

