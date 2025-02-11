$(document).ready(function () {
    let musicIndex = 0;
    let displayedSongs; 
    function displaySongs(source) {
       displayedSongs = source; 
        $("#playlist-container").html(""); 
        source.forEach((song, index) => { 
            let a = index + 1; 
            if (a < 10) {
                a = "0" + a; 
            }
            let card = $('<div class="flexbox song"></div>').attr("data-index", song.dataIndex); 
            let cardContent = `
            <span>${a}</span>
            <img src="${song.album}" class="playlist-album-cover"> 
            <div class="playlist-song-details">
                <p>${song.name}</p> 
                <p>${song.artist}</p>
            </div>
            <div class="flexbox">
                <div class="playin-song hidden flexbox">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src="./assets/svg/play.svg" alt="" class="play-song">
            </div>`;
            card.html(cardContent);
            $("#playlist-container").append(card); 
        });
        $(".song").on("click", function () {
            playingSong($(this))
            setSong($(this).attr("data-index"));            
            playMusic(); 
        });
    }
    displaySongs(songs);

    function playingSong(index) {
        $(".play-song").removeClass("hidden");
        $(".playin-song").addClass("hidden");
        $(index).find(".play-song").addClass("hidden");
        $(index).find(".playin-song").removeClass("hidden");       
    }

// ! autocomplete
    let mySet = new Set();
    songs.forEach(song => {
        mySet.add(song.name);
        mySet.add(song.artist);
    });
    let allSongs = Array.from(mySet);

    $("#search").autocomplete({
        source: allSongs,
        classes: {
            "ui-autocomplete": "autocomplete",
        },
        select: function(event, ui) {
            const filteredSongs = songs.filter(song => song.name === ui.item.value || song.artist === ui.item.value);
            displaySongs(filteredSongs);
        }
    });
    $("#search").on("input", function() {
        if ($(this).val() === "") {
            displaySongs(songs);
        }
    });
    
// ! volume
    $("#volume").on("input", function () {
        $("#song")[0].volume = $(this).val() / 100;
        if($(this).val() >= 75){
            $("#volume-img").attr("src", "./assets/svg/volume-3.svg");
        } else if($(this).val() < 75 && $(this).val() >= 50){
            $("#volume-img").attr("src", "./assets/svg/volume-2.svg");
        }
        else if($(this).val() < 50 && $(this).val() >= 20){
            $("#volume-img").attr("src", "./assets/svg/volume-1.svg");
        }
        else if($(this).val() < 20){
            $("#volume-img").attr("src" ,"./assets/svg/volume-0.svg");
        }
    });

    $("#volume-img").on("click", function () {
        $("#song")[0].volume = 0;
        $("#volume").val(0);
        $("#volume-img").attr("src" ,"./assets/svg/volume-0.svg");
    });
// ! the first song
    function setSong(i) {
        $("#song-progress").val(0)
        let oneSong = songs[i];
        $("#song").attr("src", oneSong.path);
        $("#song-name").text(oneSong.name);
        $("#song-artist").text(oneSong.artist)
        $("#song-img").attr("src", oneSong.album);
        $("#current-time").text("00:00");
        $("#player-img").attr("src", oneSong.background);
        setInterval(() => {
            $("#song-duration").text(formatTime($("#song")[0].duration)); 
        }, 300);
        if (+i + 1 < songs.length) {
            $("#next-song").html(`<span>Next:</span> <span class="next-name">${songs[+i + 1].artist} - ${songs[+i + 1].name}</span>`);
        } else {
            $("#next-song").html("")
        }
        
        
    }
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
    setSong(musicIndex)

    $("#song").on("timeupdate", function () {
        $("#song-progress").attr("max", $("#song")[0].duration);
        $("#song-progress").val($("#song")[0].currentTime);
        setInterval(() => {
            $("#current-time").text(formatTime($("#song")[0].currentTime));
            if (Math.floor($("#song")[0].currentTime) == Math.floor($("#song-progress").attr("max"))) {
                skipNextSong(); 
            }
        }, 1000)
    });
//! next prev song
    $("#skip-prev").on("click", function () {
        if (displayedSongs.length === 0) return; 
        musicIndex = (musicIndex <= 0) ? displayedSongs.length - 1 : musicIndex - 1; 
        playingSong($(`.song[data-index="${displayedSongs[musicIndex].dataIndex}"]`));
        setSong(displayedSongs[musicIndex].dataIndex); 
        playMusic(); 
    });

//! Skip Next Button
    $("#skip-next").on("click", skipNextSong);
    function skipNextSong() {
        if (displayedSongs.length === 0) return; 
        musicIndex = (musicIndex >= displayedSongs.length - 1) ? 0 : musicIndex + 1; 
        playingSong($(`.song[data-index="${displayedSongs[musicIndex].dataIndex}"]`));
        setSong(displayedSongs[musicIndex].dataIndex); 
        playMusic(); 
    }

//! song progress
    $("#song-progress").on("input", function (){
        playMusic();
        $("#song")[0].currentTime = $(this).val();
    })
//! play song
    $("#play-btn").on("click", playPause);
    function playPause() {
        if ($("#play-btn").hasClass("paused")) {
            playMusic();
            playingSong($(`.song[data-index="${musicIndex}"]`))
        } else {
            $("#song")[0].pause(); 
            $("#play-btn").addClass("paused"); 
        }
    }
    function playMusic() { 
        $("#song")[0].play();
        $("#play-btn").removeClass("paused");
    }
});
