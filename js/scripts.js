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



//AQ modal
var modal = document.getElementById('myModal')
modal.onclick = function() {
  modal.style.display = "none"
}

let images = document.getElementsByClassName('gall')
for (let pic of images) {
  pic.addEventListener(('click'), () => {
    doModal(pic)
  })
}

function doModal(pic) {
  var modalImg = document.getElementById("modal-image")
  var captionText = document.getElementById("caption")
  
  //TODO need tp resize images!

  modal.style.display = "block"
  modalImg.src = pic.src
  captionText.innerHTML = pic.alt
  
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 