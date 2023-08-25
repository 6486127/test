//submit form by hitting Enter
const handleEnterClick = () => {
  const btn = document.querySelector('.submit-btn')
  btn.addEventListener('keydown', (e) => {
    if (e.keyCode === '13') {
      btn.click()
    }
  })
}