const gulp = require('gulp')
const sass = require('gulp-sass')
const minifycss = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const packageImporter = require('node-sass-package-importer')

// Sass
gulp.task('sass', function() {
  gulp.src('./assets/sass/**/!(_)*scss')
      .pipe(plumber())
      .pipe(sass({
          outputStyle: 'expanded'
      }))
      // ベンダープレフィックス自動付加
      .pipe(autoprefixer({
          browsers: ['last 2 version', 'iOS >= 8', 'Android >= 4.1'],
          cascade: false
      }))
      .pipe(gulp.dest('./assets/css'))
})

// Browser Sync
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: '../intensive_comparison',
      index: 'index.html'
    }
  })
  gulp.watch('**/*.html', ['reload'])
  gulp.watch('**/*.css', ['reload'])
  gulp.watch('**/*.js', ['reload'])
})

gulp.task('reload', () => {
  browserSync.reload()
})

gulp.task('watch', () => {
  gulp.watch('./assets/**/*.scss', ['sass'])
  gulp.watch(['./assets/js/**/*.js', './assets/css/**/*.css', './*.html'], ['reload']);
})

gulp.task('default', ['sass', 'browser-sync', 'watch'])
