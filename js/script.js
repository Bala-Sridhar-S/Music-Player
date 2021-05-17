const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const repeatBtn = document.querySelector('#repeat')
const shuffleBtn = document.querySelector('#shuffle')
const repeatInfo = document.querySelector('#repeat-info')
const shuffleInfo = document.querySelector('#shuffle-info')
const audio = document.querySelector('#audio')
const cover = document.querySelector('#cover')
const title = document.querySelector('#title')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const volume = document.querySelector('#volume')
const volProgress = document.querySelector('.vol-progress')
const volProgressContainer = document.querySelector('.vol-progress-container')

// Song Titles
const songs = ['Adbhutam', 'Bangaru', 'Inayae', 'Samajavaragamana']

// Initialising the values
let songIndex = Math.floor(Math.random() * songs.length)
let isShuffled = false
let isRepeat = false
let isMuted = false
let vol = 1

// Colors for the bars
const selected = '#a39da5'
const unselected = '#dfdbdf'
const disabled = '#ecebeb'
const slider = '#fe8daa'