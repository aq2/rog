//AQ nav

const open = document.getElementById('open')
const close = document.getElementById('close')
const mymain = document.getElementById('mymain')
const circle = document.getElementById('circle')
const nav = document.getElementById('nav')

// open.addEventListener('click', () => container.classList.add('show-nav'))
// close.addEventListener('click', () => container.classList.remove('show-nav'))

open.addEventListener('click', () => {
  mymain.classList.add('show-nav')
  circle.classList.add('show-nav')
  nav.classList.add('show-nav')
})


close.addEventListener('click', () => {
  mymain.classList.remove('show-nav')
  circle.classList.remove('show-nav')
  nav.classList.remove('show-nav')
})



// AQ carousel

let w = window.innerWidth
let h = window.innerHeight

const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

// blah 
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length -1
  }

  imgs.style.transform = `translateX(${-idx * 800}px)`
}
