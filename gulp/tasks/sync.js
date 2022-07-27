import browserSync from 'browser-sync'

export const sync = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    notify: false,
  })
}
