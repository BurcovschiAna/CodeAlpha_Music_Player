// Select DOM elements for controlling the music player
const progress = document.querySelector("#song-progress");
const player = document.querySelector("#player-img");
const music = document.querySelector("#song");
const songName = document.querySelector("#song-name");
const songArtist = document.querySelector("#song-artist");
const songImg = document.querySelector("#song-img");
const songCurrentTime = document.querySelector("#current-time");
const songDuration = document.querySelector("#song-duration");
const volume = document.querySelector("#volume");
const volumeImg = document.querySelector("#volume-img");
const playBtn = document.querySelector("#play-btn");
const skipPrevBtn = document.querySelector("#skip-prev");
const skipNextBtn = document.querySelector("#skip-next");

// Initialize the music index and playlist container
let musicIndex = 0;
const playlistContainer = document.querySelector("#playlist-container");

// Display all songs in the playlist
displayAllSongs(songs);

// Set up search functionality
const search = document.querySelector("#search");
let mySet = new Set();
for (let i = 0; i < songs.length; i++) {
    mySet.add(songs[i].name);
    mySet.add(songs[i].artist);
}

// Convert the Set to an Array for easier manipulation
let allSongs = Array.from(mySet);

// Add event listener for the search input
search.addEventListener("keyup", autocomplete);

// Set up event listeners for music metadata and controls
music.addEventListener("loadedmetadata", playSong);
music.addEventListener("durationchange", () => {
    playSong();
});
progress.addEventListener("input", progressSong);
playBtn.addEventListener("click", playPause);
skipNextBtn.addEventListener("click", skipNextSong);
skipPrevBtn.addEventListener("click", skipPrevSong);
volumeImg.addEventListener("click", muteVolume);
volume.addEventListener("input", songVolume);

// Function to display all songs in the playlist
function displayAllSongs(songsToDisplay) {
    playlistContainer.innerHTML = ""; // Clear the playlist container
    for (let i = 0; i < songsToDisplay.length; i++) {
        let a = i + 1;
        if (a < 10) {
            a = "0" + a; // Format index to two digits
        }
        let songElement = document.createElement("div"); // Create a new song element
        songElement.classList.add("song", "flexbox");
        songElement.setAttribute("data-index", songsToDisplay[i].dataIndex);
        playlistContainer.appendChild(songElement); // Append song element to the container
        songElement.innerHTML += `<span>${a}</span>
            <img src="${songsToDisplay[i].album}" class="playlist-album-cover">
            <div class="playlist-song-details">
                <p>${songsToDisplay[i].name}</p> 
                <p>${songsToDisplay[i].artist}</p>
            </div>
            <div class="flexbox">
                <div class="playin-song hidden flexbox">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src="./svg/play.svg" alt="" class="play-song">
            </div>`;
    }
    // Add click event to each song element
    const songElements = document.querySelectorAll(".song");
    songElements.forEach(song => {
        
        song.addEventListener("click", selectSong);
    });
}
const songElements = document.querySelectorAll(".song");
// Function to set the current song based on index
function setSong(i) {
    progress.value = 0; // Reset progress
    let song = songs[i]; // Get the song object
    musicIndex = i; // Update the current music index
    music.src = song.path; // Set the music source
    songName.innerHTML = song.name; // Display song name
    songArtist.innerHTML = song.artist; // Display artist name
    songImg.src = song.album; // Set album cover
    songCurrentTime.innerHTML = "00:00"; // Reset current time display
    player.src = song.background; // Set background image
    setInterval(() => {
        songDuration.innerHTML = formatTime(music.duration); // Update song duration
    }, 300);    
    // playState(songElements[i]); // Update play state UI
}
setSong(musicIndex)
// Function to format time in mm:ss
function formatTime(time) {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

// Function to play the song and update the progress
function playSong() {
    progress.max = music.duration; // Set the maximum value of progress
    progress.value = music.currentTime; // Update progress value
    setInterval(() => {
        if (!music.paused) {
            playSong(); // Recursively call playSong if music is playing
        }
        songCurrentTime.innerHTML = formatTime(music.currentTime); // Update current time
        if (Math.floor(music.currentTime) == Math.floor(progress.max)) {
            skipNextSong(); // Skip to the next song when current time reaches max
        }
    }, 1000);
}

// Function to update song progress based on user input
function progressSong() {
    music.play(); // Play music
    music.currentTime = progress.value; // Set current time based on progress input
    playBtn.classList.remove("paused"); // Update play button state
}

// Function to toggle play/pause state
function playPause() {
    if (this.classList.contains("paused")) {
        playMusic(); // Play music if paused
    } else {
        music.pause(); // Pause music if playing
        this.classList.add("paused"); // Update play button state
    }
}

// Function to skip to the next song
function skipNextSong() {
    if (musicIndex >= songs.length - 1) {
        musicIndex = 0; // Loop back to the first song
    } else {
        musicIndex++; // Move to the next song
    }
    setSong(musicIndex); // Set the new song
    playMusic(); // Play the new song
}

// Function to skip to the previous song
function skipPrevSong() {
    if (musicIndex <= 0) {
        musicIndex = songs.length - 1; // Loop to the last song
    } else {
        musicIndex--; // Move to the previous song
    }
    setSong(musicIndex); // Set the new song
    playMusic(); // Play the new song
}

// Function to play music
function playMusic() {
    console.log(songElements[musicIndex]);
    playState(songElements[musicIndex]); // Update play state UI
    music.play(); // Play the music
    playBtn.classList.remove("paused"); // Update play button state
}

// Function to adjust the volume
function songVolume() {
    music.volume = volume.value / 100; // Set music volume
    // Update volume icon based on volume level
    if (volume.value >= 75) {
        volumeImg.src = "./svg/volume-3.svg";
    } else if (volume.value < 75 && volume.value >= 50) {
        volumeImg.src = "./svg/volume-2.svg";
    } else if (volume.value < 50 && volume.value >= 20) {
        volumeImg.src = "./svg/volume-1.svg";
    } else if (volume.value < 20) {
        volumeImg.src = "./svg/volume-0.svg";
    }
}

// Function to mute the volume
function muteVolume() {
    music.volume = 0; // Mute music
    volume.value = 0; // Reset volume slider
    volumeImg.src = "./svg/volume-0.svg"; // Update volume icon
}

// Function for autocomplete search feature
function autocomplete() {
    let value = search.value.trim().toLowerCase(); // Get the search input
    if (value) {
        // Filter songs based on search input
        let filteredSongs = songs.filter(function(song) {
            return song.name.toLowerCase().indexOf(value) === 0 || 
                   song.artist.toLowerCase().indexOf(value) === 0;
        });
        displayAllSongs(filteredSongs); // Display filtered songs
    } else {
        displayAllSongs(songs); // Display all songs if no input
    }
}

// Function to select a song from the playlist
function selectSong() { 
    let index = parseInt(this.getAttribute("data-index")); // Get the index of the selected song
    setSong(index); // Set the selected song
    playMusic(); // Play the selected song
}

// Function to update the play state UI
function playState(parent) {   
    // Reset play button visibility for all songs
    document.querySelectorAll(".play-song").forEach(element => {
        element.classList.remove("hidden");
    });
    // Hide the play animation for all songs
    document.querySelectorAll(".playin-song").forEach(element => {
        element.classList.add("hidden");
    });
    // Show the play animation for the currently playing song
    const playBtn = parent.querySelector(".play-song"); 
    const playAnimation = parent.querySelector(".playin-song"); 
    playBtn.classList.add("hidden"); // Hide play button
    playAnimation.classList.remove("hidden"); // Show play animation
}
