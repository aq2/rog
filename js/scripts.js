//AQ nav

const open = document.getElementById('open')
const close = document.getElementById('close')
const mymain = document.getElementById('mymain')
const circle = document.getElementById('circle')
const nav = document.getElementById('nav')

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

// let w = window.innerWidth
// let h = window.innerHeight

// const imgs = document.getElementById('imgs')
// const img = document.querySelectorAll('#imgs img')

// let idx = 0
// let interval = setInterval(run, 2000)

// function run() {
//   idx++
//   changeImage()
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0
//   } else if (idx < 0) {
//     idx = img.length -1
//   }

//   imgs.style.transform = `translateX(${-idx * 800}px)`
// }

//AQ modal
var modal = document.getElementById('myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption

// put images into an array
// add click handler for each
// on click, get THAT image and alt
// ...and do the do!

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 