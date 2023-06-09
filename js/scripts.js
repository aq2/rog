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

let images = document.querySelectorAll('.gall')

images.forEach(pic => {
  pic.addEventListener('click', () => {
    let modal = document.getElementById('modal')
    let modalImg = document.getElementById("modal-image")
    let captionText = document.getElementById("caption")
  
    modal.style.display = "block"
    modalImg.src = pic.src
    captionText.innerHTML = pic.alt  
  })
})

modal.addEventListener('click', () => {
  modal.style.display = 'none'
})

//end modal

/// audio

let playing = false
let songs = document.querySelectorAll('.song')
let songNames = document.querySelectorAll('span')
let audios = document.getElementsByTagName('audio')
let buttons = document.querySelectorAll('.song button')
let playingIndex = null

songs.forEach(song => {
  song.addEventListener('click', (e) => {
    let name = song.className
    // remove 6 chars 'song s' to get index
    // then subtract 1 as arrays start at 0
    let index = name.substring(6) - 1
    let audio = audios[index]
    let span = songNames[index]
    let btn = buttons[index]

    // check if track already playing
    if (!playing) {
      playingIndex = index
      playAudio(audio)
    } else {
      if (playingIndex == index) {
        audio.pause()
        playing = false
      } else {
        // clicked-on track whilst playing another
        audios[playingIndex].pause()
        playAudio(audio)
        buttons[playingIndex].classList.toggle('playing')
        songNames[playingIndex].classList.toggle('playing')
        playingIndex = index
      }
    }
    btn.classList.toggle('playing')
    span.classList.toggle('playing')
  })
})

function playAudio(audio) {
  audio.currentTime = 0
  audio.play()
  playing = true
}


//end audio