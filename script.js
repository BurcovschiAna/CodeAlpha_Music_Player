const progress = document.querySelector("#song-progress");
const song = document.querySelector("#song");
const playBtn = document.querySelector("#play");
const skipPrev = document.querySelector("#skip-prev");
const skipNext = document.querySelector("#skip-next");

song.addEventListener("loadedmetadata", playSong);
song.addEventListener("durationchange", () => {
    playSong()
});

function playSong() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
setInterval(() => {
     if (!song.paused) {
        playSong()
    }
}, 500);

progress.addEventListener("input", progressSong); 
function progressSong() {
    song.play();
    song.currentTime = progress.value;
    playBtn.src = "./svg/pause.svg"; 
}


playBtn.addEventListener("click", playPause);

function playPause() {

    if (this.src.includes("/svg/play.svg")) {
        song.play();
        this.src = "./svg/pause.svg"; 
    } else {
        song.pause();
        this.src = "./svg/play.svg"; 
    }
}
