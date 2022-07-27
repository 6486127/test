import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'

export const babelTask = () => {
  return app.gulp
    .src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('main.min.js'))
    .pipe(uglify())

    .pipe(sourcemaps.write('/sourcemap'))
    .pipe(app.gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
}
