let w = window.innerWidth
let h = window.innerHeight

//AQ carousel could go as wide as 1920!
let carouselWidth = 800

if (w < 900) {
  carouselWidth = 700
}
if (w < 700) {
  carouselWidth = 600
}
if (w < 600) {
  carouselWidth = 500
}

// set image and carousel width here, rather than meeja queeries?

console.log(carouselWidth)

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
