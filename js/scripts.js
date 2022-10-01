///  nav

const main = document.getElementById('main')
const circle = document.getElementById('circle')
const nav = document.getElementById('nav')

circle.addEventListener('click', () => {
  main.classList.toggle('show-nav')
  circle.classList.toggle('show-nav')
  nav.classList.toggle('show-nav')
})

//end nav

/// modal

let images = document.getElementsByClassName('gall')
for (let pic of images) {
  pic.addEventListener('click', () => {
    let modal = document.getElementById('modal')
    let modalImg = document.getElementById("modal-image")
    let captionText = document.getElementById("caption")
  
    modal.style.display = "block"
    modalImg.src = pic.src
    captionText.innerHTML = pic.alt  
  })
}

modal.onclick = function() {
  modal.style.display = "none"
}

//end modal

/// audio

let playing = false
let songs = document.querySelectorAll('.song')
let songNames = document.querySelectorAll('span')
let audios = document.getElementsByTagName('audio')
let buttons = document.querySelectorAll('.song button')

// should really check if clicked on playing song...
for (let song of songs) {
  song.addEventListener('click', (e) => {
    let name = song.className
    // remove 6 chars 'song s' to get index
    // then subtract 1 as arrays start at 0
    let index = name.substring(6) - 1
    let audio = audios[index]
    let span = songNames[index]
    let btn = buttons[index]

    if (!playing) {
      audio.play()
      playing = true
      // let playingIndex = index
    } else {
      audio.pause()
      playing = false
    }
    btn.classList.toggle('playing')
    span.classList.toggle('playing')
  })
}


//end audio