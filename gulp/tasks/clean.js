import del from 'del'

export const clean = () => {
  return del('dist')
}
