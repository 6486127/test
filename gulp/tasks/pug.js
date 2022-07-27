import pug from 'gulp-pug'
import browserSync from 'browser-sync'
export const pugToHtml = () => {
  return app.gulp
    .src('src/*.pug')
    .pipe(pug())
    .pipe(app.gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }))
}
