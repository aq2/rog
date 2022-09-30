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
let buttons = document.querySelectorAll('.song button')
let songNames = document.querySelectorAll('span')
let audios = document.getElementsByTagName('audio')
let songs = document.querySelectorAll('.song')

for (let btn of buttons) {
  btn.addEventListener(('click'), (e) => {
    let indexName = e.target.className
    let audio = document.getElementsByClassName('toon ' + indexName)[0]
    let songName = document.getElementsByClassName('toon ' + indexName)[0]
    
    if (!playing) {
      audio.play()
      playing = true
      btn.style.backgroundImage = 'url(imgs/pause.png)'
      // change text colour to hilite playing toon?
    }
    else {
      audio.pause()
      playing = false
      btn.style.backgroundImage = 'url(imgs/play.png)'
    }
  })
}


// should really check if clicked on playing song...
for (let song of songs) {
  song.addEventListener(('click'), (e) => {
    let name = song.className
    // remove 6 chars 'song a' to get index
    // then subtract 1 as arrays start at 0
    let index = name.substring(6) - 1
    let audio = audios[index]
    let span = songNames[index]
    let btn = buttons[index]

    if (!playing) {
      audio.play()
      playing = true
      // should style these as classes, then toggle...
      btn.style.backgroundImage = 'url(imgs/pause-blue.png)'
      // span.style.color = 'blue'
    } else {
      audio.pause()
      playing = false
      btn.style.backgroundImage = 'url(imgs/play.png)'
      // span.style.color = 'white'
    }
    span.classList.toggle('playing')


  })
}


//end audio