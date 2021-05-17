//Loading the song to be updated in the DOM
const loadSong = song => {
    title.innerText = song
    audio.src = `./music/${ song }.mp3`
    cover.src = `./images/${ song }.jpg`
}

// Start to Play the current song that is loaded
const playSong = () => {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

// Pause the current song that is playing
const pauseSong = () => {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

// Go to the previous song
const prevSong = () => {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

// Go to the next song
const nextSong = () => {
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

// Update the playhead seeker based on the value selected
const updateProgress = e => {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${ progressPercent }%`
}

// Update the track based on the seeker
const setProgress = e => {
    const width = progressContainer.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX / width) * duration
}

// Shuffle the songs in the list
const shuffleSongs = () => {
    isShuffled = (isShuffled === true) ? false : true
    
    if(isShuffled){
        shuffleBtn.style.color = selected
        isRepeat = false
        repeatBtn.style.color = unselected
        shuffleInfo.innerText = "On"
        repeatInfo.innerText = "Off"
    } else {
        shuffleBtn.style.color = unselected
        shuffleInfo.innerText = "Off"
    }
}

// Repeat the current song
const repeatSong = () => {
    isRepeat = (isRepeat === true) ? false : true
    
    if(isRepeat){
        repeatBtn.style.color = selected
        isShuffled = false
        shuffleBtn.style.color = unselected
        repeatInfo.innerText = "On"
        shuffleInfo.innerText = "Off"
    } else {
        repeatBtn.style.color = unselected
        repeatInfo.innerText = "Off"
    }
}

