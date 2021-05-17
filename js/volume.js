//Mute the volume of the song
const muteVol = () => {
    isMuted = (isMuted === true) ? false : true
    
    if(isMuted){
        volume.querySelector('i.fas').classList.remove('fa-volume-up')
        volume.querySelector('i.fas').classList.add('fa-volume-mute')
        volume.style.color = selected
        audio.volume = 0
        volProgress.style.backgroundColor= disabled
    } else {
        volume.querySelector('i.fas').classList.add('fa-volume-up')
        volume.querySelector('i.fas').classList.remove('fa-volume-mute')
        volume.style.color = "#dfdbdf"
        audio.volume = vol
        volProgress.style.backgroundColor= slider
    }
}

// Update the volume seeker based on the value selected
const updateVolume = () => {
    const volProgressPercent = (vol / 1) * 100
    volProgress.style.width = `${ volProgressPercent }%`
}

// Update the sound based on the seeker
const setVolume = e => {
    const width = volProgressContainer.clientWidth
    const clickX = e.offsetX

    vol = clickX / width
    audio.volume = vol
    updateVolume()
}