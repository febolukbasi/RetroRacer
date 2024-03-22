document.addEventListener('DOMContentLoaded', () => {

  const player = document.getElementById('player')
  const playButton = document.getElementById('playButton')
  const gameScreen =document.getElementById('gameScreen')

  
  let currentLane = 1
  let obstacles = []
  let gameInterval
  let obstacleSpawnInterval
  let obstacleSpeed = 2
  
  
  const lanes = [200, 250, 300]

/// Audio dingen ///
////////////////////////////////////////////////////////////////////////////////////////
let audioSoundtrack = new Audio("audios/robot_city_8bit_soundtrack.mp3")
// bron = https://www.youtube.com/watch?v=NAKj3HJX_tM&list=PLwJjxqYuirCLkq42mGw4XKGQlpZSfxsYd&index=21

document.addEventListener('DOMContentLoaded', function() {
  audioSoundtrack.play()
})
audioSoundtrack.loop = true

const volumeControl = document.getElementById('volumeControl')

volumeControl.addEventListener('input', function() {
  const volume = volumeControl.value / 100
  audioSoundtrack.volume = volume
})

pauseButton.addEventListener('click', function() {
  if (audioSoundtrack.paused) {
      audioSoundtrack.play()
      pauseButton.textContent = 'Pause'
  } else {
      audioSoundtrack.pause()
      pauseButton.textContent = 'Play'
  }
})

////////////////////////////////////////////////////////////////////////////////////////
  
/// Game dingen ///
////////////////////////////////////////////////////////////////////////////////////////

playButton.addEventListener('click', () => {
homeScreen.style.display = 'none'
    gameScreen.style.display = 'flex'
    startGame()
})

})