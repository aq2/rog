const open = document.getElementById('open')
const close = document.getElementById('close')
// const container = document.querySelector('.container')
const mymain = document.getElementById('mymain')

// open.addEventListener('click', () => container.classList.add('show-nav'))
// close.addEventListener('click', () => container.classList.remove('show-nav'))

open.addEventListener('click', () => {
  mymain.classList.add('show-nav')
})


close.addEventListener('click', () => mymain.classList.remove('show-nav'))