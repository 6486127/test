//emersion animation
const emersion = () => {
  const fields = document.querySelectorAll('.col')
  for (let i = 0; i < fields.length; i++) {
    setTimeout(() => {
      fields[i].classList.add('emersion')
      fields[i].style.opacity = 1
    }, 350 * i)
  }
}

window.addEventListener('load', emersion)