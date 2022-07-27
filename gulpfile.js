import gulp from 'gulp'

global.app = {
  gulp,
}

import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { style } from './gulp/tasks/style.js'
import { sync } from './gulp/tasks/sync.js'
import { pugToHtml } from './gulp/tasks/pug.js'
import { babelTask } from './gulp/tasks/babel.js'

function watcher() {
  gulp.watch('src/assets', copy)
  gulp.watch('src/sass/*.sass', style)
  gulp.watch('src/**/*.pug', pugToHtml)
  gulp.watch('src/js/*.js', babelTask)
}

const dev = gulp.series(
  clean,
  copy,
  style,
  pugToHtml,
  babelTask,
  gulp.parallel(sync, watcher)
)

gulp.task('default', dev)
