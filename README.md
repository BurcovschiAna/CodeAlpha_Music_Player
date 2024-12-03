# CodeAlpha_Music_Player
<img src="./img/Music player.png" style="width:100%;">
<h3>Introduction</h3>
<p>This project is a simple yet functional music player application built using HTML, CSS, and JavaScript. It allows users to play, pause, and navigate through a playlist of songs while providing an intuitive user interface.</p>
<h4>Features:</h4>
<ul>
    <li>
        Responsive Design: Utilizes CSS Flexbox to create a layout that adapts to various screen sizes.
    </li>
    <li>
        Dynamic Playlist: Users can view and interact with a list of songs.
    </li>
    <li>
        Search Functionality: Quickly find songs by typing in the search bar.
    </li>
    <li>
        Playback Controls: Play, pause, and skip songs easily.
    </li>
    <li>
        Custom Scrollbars: Enhanced visual appearance of scrollbar elements
    </li>
</ul>
<h4>Technologies Used</h4>
<ul>
    <li>
        HTML: For structuring the application layout.
    </li>
    <li>
        CSS: For styling, including custom variables and responsive design.
    </li>
    <li>
        JavaScript: To handle interactivity, song management, and playback controls.
    </li>
</ul>
<h4>JavaScript Functionality</h4>
<ol>
    <li>
    Song Data Management: An array holds the song data, including details such as title, artist, and audio file path. This array is used to populate the playlist dynamically.
    </li>
    <li>
        Displaying Songs: The displayAllSongs function dynamically generates song elements based on the song data. It updates the playlist container whenever songs are added or filtered through the search functionality.
    </li>
    <li>
         <h5>Playback Control:</h5> 
         <ul>
            <li>
                The playPause function toggles between playing and pausing the current song. It updates the UI accordingly.
            </li>
            <li>
                Functions like skipNextSong and skipPreviousSong change the current song index and update the player to play the new song.
            </li>
         </ul>
    </li>
    <li>
        Search Functionality: The search feature allows users to filter songs based on their input. The autocomplete function listens for changes in the search input and updates the displayed song list accordingly.
    </li>
</ol>
