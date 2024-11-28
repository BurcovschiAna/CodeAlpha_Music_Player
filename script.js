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

// const menu = document.querySelector("#menu");
// const playlistCovers = document.querySelectorAll(".playlist-cover");




// Add event listeners to existing playlist covers


// menu.addEventListener("click", closePlaylist);

const playlistsContainer = document.querySelector("#playlists-container");
const addPlaylist = document.querySelector("#add-playlist");
const addSong = document.querySelector("#add-song");
const input = document.querySelector("#create-new");
const menu = document.querySelector("#menu");
addPlaylist.addEventListener("click", createPlaylist);
let allPlaylists = [];
let allSongLists = [];
function createPlaylist() {
    const playlistName = input.value.trim(); 

    if (playlistName === "") {
        alert("Please enter a playlist name."); 
        return;
    }

    let newPlaylistCover = document.createElement("div");
    newPlaylistCover.classList.add("flexbox", "playlist-cover");
    newPlaylistCover.innerHTML = `<img src="./img/playlist-default.jpg"> 
    <p>${playlistName}</p>`;

    playlistsContainer.appendChild(newPlaylistCover);

    let newSongList = document.createElement("div");
    newSongList.classList.add("playlist-container");
    newSongList.innerHTML = "This playlist is empty";
    playlistsContainer.appendChild(newSongList);

    allPlaylists.push(newPlaylistCover);
    allSongLists.push(newSongList);
    console.log(allPlaylists);
    console.log(allSongLists);
    
    for(let i = 0; i < allPlaylists.length; i++){
        allPlaylists[i].addEventListener("click", openPlaylist)
    
    }
}



function openPlaylist(){    
    addPlaylist.classList.add("hidden");
    addSong.classList.remove("hidden");
    menu.classList.add("active-menu");
    allPlaylists.forEach((playlist) =>{
        playlist.classList.add("hidden-cover");
        console.log(playlist);
        
    })
    
    this.nextElementSibling.classList.add("active-playlist");
}
menu.addEventListener("click", closePlaylist);

function closePlaylist() {
    if(menu.classList.contains("active-menu")){
        allPlaylists.forEach((playlist) => {
            playlist.classList.remove("hidden-cover");
        })
        allSongLists.forEach((songList) => {
            songList.classList.remove("active-playlist")
        })
        menu.classList.remove("active-menu");
        addPlaylist.classList.remove("hidden");
        addSong.classList.add("hidden");
        
    } else{
       return
        
    }
}