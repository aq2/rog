let w = window.innerWidth
let h = window.innerHeight

let carouselWidth = 1920

if (w < 2000) {
  carouselWidth = 1200
  
}
if (w < 1300) {
  carouselWidth = 1000
}
if (w < 1100) {
  carouselWidth = 800
}
if (w < 900) {
  carouselWidth = 600
}
if (w < 700) {
  carouselWidth = 500
}
if (w < 600) {
  carouselWidth = 350
}


const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
  idx++
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length -1
  }
  
  // imgs.style.transform = `translateX(${-idx * 800}px)`
  imgs.style.transform = `translateX(${-idx * carouselWidth}px)`
}
