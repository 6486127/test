export const copy = () => {
  return app.gulp.src('src/assets/**/*.*').pipe(app.gulp.dest('dist/assets/'))
}
