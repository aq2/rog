///  nav

const open = document.getElementById('open')
const close = document.getElementById('close')
const main = document.getElementById('main')
const circle = document.getElementById('circle')
const nav = document.getElementById('nav')

open.addEventListener('click', () => {
  main.classList.add('show-nav')
  circle.classList.add('show-nav')
  nav.classList.add('show-nav')
})

close.addEventListener('click', () => {
  main.classList.remove('show-nav')
  circle.classList.remove('show-nav')
  nav.classList.remove('show-nav')
})

//end nav

/// modal

var modal = document.getElementById('modal')
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
  
  modal.style.display = "block"
  modalImg.src = pic.src
  captionText.innerHTML = pic.alt  
}

//end modal

/// audio

let playing = false
let buttons = document.getElementsByTagName('button')

for (let btn of buttons) {
  btn.addEventListener(('click'), (e) => {
    let indexName = e.target.className
    let audio = document.getElementsByClassName('toon ' + indexName)[0]
    if (!playing) {
      audio.play()
      playing = true
      btn.style.backgroundImage = 'url(imgs/pause.png)'
    }
    else {
      audio.pause()
      playing = false
      btn.style.backgroundImage = 'url(imgs/play.png)'
    }
  })
}


//end audio