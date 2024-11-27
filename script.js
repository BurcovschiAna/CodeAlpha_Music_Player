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

const menu = document.querySelector("#menu");
const playlist = document.querySelectorAll(".playlist-cover");
const playlistContainer = document.querySelector("#cover-container");
const songLists = document.querySelectorAll(".playlist-container")

// menu.addEventListener("click", openPlaylist);
playlist.forEach(cover => {
    cover.addEventListener("click", openPlaylist);
});
function openPlaylist() {
    
    menu.classList.add("active-menu");
    
    // Get the id of the clicked playlist cover
    let dataName = this.getAttribute("data-name");

    // Loop through all song lists to find the matching one
    songLists.forEach(songList => {
        let id = songList.getAttribute("id");
        
        // If the id matches the data-name, show the corresponding playlist
        if (id === dataName) { 
            playlistContainer.classList.add("hidden-cover");
                     
            songList.classList.add("active-playlist"); // Add class to show the playlist
        } else {
            return;
        }
    });
}

menu.addEventListener("click", closePlaylist);
function closePlaylist(){
    if(menu.classList.contains("active-menu")){
        songLists.forEach(songList => {
            songList.classList.remove("active-playlist"); 
            }
        );
        playlistContainer.classList.remove("hidden-cover");
        
        
    } else{
        return;
        
    }
}