import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'

const sass = gulpSass(dartSass)

export const style = () => {
  return app.gulp
    .src('src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({}))
    .pipe(sourcemaps.write('/sourcemap'))
    .pipe(app.gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}
