const progress = document.querySelector("#song-progress");
const player = document.querySelector("#player-img")

const music = document.querySelector("#song");
const songName = document.querySelector("#song-name");
const songArtist = document.querySelector("#song-artist");
const songImg = document.querySelector("#song-img")
const songCurrentTime = document.querySelector("#current-time");
const songDuration = document.querySelector("#song-duration");

const volume = document.querySelector("#volume");
const volumeImg = document.querySelector("#volume-img");

const playBtn = document.querySelector("#play-btn");
const skipPrevBtn = document.querySelector("#skip-prev");
const skipNextBtn = document.querySelector("#skip-next");

let musicIndex = 0;

function setSong(i){
    progress.value = 0;
    let song = songs[i];
    musicIndex = i;
    music.src = song.path;
    songName.innerHTML = song.name;
    songArtist.innerHTML = song.artist;
    songImg.src = song.album;
    songCurrentTime.innerHTML = "00:00";
    player.src = song.background;
    setInterval(() => {
        songDuration.innerHTML = formatTime(music.duration);
    }, 300)
}
setSong(0)

function formatTime(time){
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    } 
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

music.addEventListener("loadedmetadata", playSong);
music.addEventListener("durationchange", () => {
    playSong()
});

function playSong() {
    progress.max = music.duration;
    progress.value = music.currentTime;
    setInterval(() => {
     if (!music.paused) {
        playSong()
    }
    songCurrentTime.innerHTML = formatTime(music.currentTime)
    if(Math.floor(music.currentTime) == Math.floor(progress.max)){
        skipNextSong();
    }
}, 1000);
}


progress.addEventListener("input", progressSong); 
function progressSong() {
    music.play();
    music.currentTime = progress.value;
    playBtn.classList.remove("paused"); 
}


playBtn.addEventListener("click", playPause);

function playPause() {

    if (this.classList.contains("paused")) {
        playMusic()
    } else {
        music.pause();
        this.classList.add("paused");; 
    }
}

skipNextBtn.addEventListener("click", skipNextSong);
skipPrevBtn.addEventListener("click", skipPrevSong);
 
function skipNextSong(){
    if(musicIndex >= songs.length - 1){
        musicIndex = 0;
    } else{
        musicIndex++
    }
    setSong(musicIndex);
    playMusic();
}

function skipPrevSong() {
    if(musicIndex <= 0){
        musicIndex = songs.length - 1;
    } else{
        musicIndex--
    }
    setSong(musicIndex);
    playMusic();
}
function playMusic(){
    music.play();
    playBtn.classList.remove("paused"); 
}
volumeImg.addEventListener("click", muteVolume);
volume.addEventListener("input", songVolume);

function songVolume(){
    music.volume = volume.value / 100;
    if(volume.value >= 75){
        volumeImg.src = "./svg/volume-3.svg";
    } else if(volume.value < 75 && volume.value >= 50){
        volumeImg.src = "./svg/volume-2.svg";
    } else if(volume.value < 50 && volume.value >= 20){
        volumeImg.src = "./svg/volume-1.svg";
    } else if(volume.value < 20){
        volumeImg.src = "./svg/volume-0.svg";
    }
}
function muteVolume(){
    music.volume = 0;
    volume.value = 0;
    volumeImg.src = "./svg/volume-0.svg";
}

const playlistContainer = document.querySelector("#playlist-container");



function displayAllSongs() {
    for(let i = 0; i < songs.length; i++){
        let a = i + 1;
        if(a < 10){
            a = "0" + a;
        }
        playlistContainer.innerHTML += `
        <div class="song flexbox">
            <span>${a}</span>
            <img src="${songs[i].album}" class="playlist-album-cover">
            <div class="playlist-song-details">
                <p>${songs[i].name}</p> 
                <p>${songs[i].artist}</p>
            </div>
            <div id="play-song" class="flexbox">
                <img src="./svg/play.svg" alt="">
            </div>
        </div>
         `
    }
  }
  displayAllSongs()