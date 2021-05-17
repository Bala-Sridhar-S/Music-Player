// Event Listeners for tracks
// Initially load the song to the DOM
loadSong(songs[songIndex])

// Play the song indicated by the songIndex
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying){
        pauseSong()
    } else {
        playSong()
    }
})

// function to check shuffle and repeat
const check = (func) => {
    if(isShuffled){
        const index = Math.floor(Math.random() * songs.length)
        songIndex = index
        loadSong(songs[songIndex])
        playSong()
    } else if(isRepeat){
        loadSong(songs[songIndex])
        playSong()
    } else {
        func()
    }
}

// Change to the previous song
prevBtn.addEventListener('click', () => check(prevSong))

// Change to the next song
nextBtn.addEventListener('click', () => check(nextSong))

// Changing songs when the current song has ended
audio.addEventListener('ended', () => check(nextSong))

// Toggle shuffle and repeat modes
shuffleBtn.addEventListener('click', shuffleSongs)
repeatBtn.addEventListener('click', repeatSong)

// Update the seeker based on the track
audio.addEventListener('timeupdate', updateProgress)

// Update the track based on the seeker
progressContainer.addEventListener('click', setProgress)

// Event Handlers for volume
// Mute or unmute the song
volume.addEventListener('click', muteVol)

// Update the volume based on the seeker
volProgressContainer.addEventListener('click', setVolume)