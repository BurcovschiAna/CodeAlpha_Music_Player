# CodeAlpha_Music_Player
<img src="./assets/img/Music player.png" style="width:100%;">
<h3>Introduction</h3>
<p>This project is a simple yet functional music player application built using HTML, CSS, and jQuery. It allows users to play, pause, and navigate through a playlist of songs while providing an intuitive user interface.</p>
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
        jQuery: To handle interactivity, song management, and playback controls.
    </li>
</ul>
<h4>jQuery Functionality</h4>
<h2>Key Features</h2>
    <ul>
        <li><strong>Display Songs:</strong> Renders a list of songs dynamically based on user input or selection.</li>
        <li><strong>Search Functionality:</strong> Allows users to search for songs by name or artist using autocomplete.</li>
        <li><strong>Volume Control:</strong> Users can adjust the volume and mute the audio.</li>
        <li><strong>Song Progress:</strong> Displays the current playback time and allows users to seek through the song.</li>
        <li><strong>Skip Previous/Next:</strong> Users can skip to the previous or next song in the playlist.</li>
    </ul>
    <h2>Code Explanation</h2>
    <h3>Initialization</h3>
    <pre><code>$(document).ready(function () { ... });</code></pre>
    <p>The code is wrapped in a jQuery document ready function to ensure that the DOM is fully loaded before executing any JavaScript.</p>
    <h3>Global Variables</h3>
    <pre><code>let musicIndex = 0;
    let displayedSongs;</code></pre>
    <p>These variables keep track of the current song index and the currently displayed songs.</p>
    <h3>Display Songs Function</h3>
    <pre><code>function displaySongs(source) { ... }</code></pre>
    <p>This function takes an array of songs as input and renders them in the playlist container. It also sets up click events for each song to play the selected track.</p>
    <h3>Autocomplete Functionality</h3>
    <pre><code>$("#search").autocomplete({ ... });</code></pre>
    <p>Utilizes jQuery UI's autocomplete feature to suggest song names or artists as the user types in the search box.</p>
    <h3>Volume Control</h3>
    <pre><code>$("#volume").on("input", function () { ... });</code></pre>
    <p>Adjusts the volume of the audio element based on user input and changes the volume icon accordingly.</p>
    <h3>Song Playback</h3>
    <pre><code>function setSong(i) { ... }</code></pre>
    <p>Loads the selected song's metadata (name, artist, album cover) and sets up the audio source for playback.</p>
    <h3>Next and Previous Song Functionality</h3>
    <pre><code>$("#skip-prev").on("click", function () { ... });$("#skip-next").on("click", skipNextSong);</code></pre>
    <p>These functions allow users to skip to the previous or next song in the currently displayed list of songs.</p>
    <h3>Song Progress</h3>
    <pre><code>$("#song-progress").on("input", function () { ... });</code></pre>
    <p>Allows users to seek through the song by adjusting a progress bar.</p>
    <h3>Play/Pause Functionality</h3>
    <pre><code>$("#play-btn").on("click", playPause);</code></pre>
    <p>Toggles between playing and pausing the current song when the play button is clicked.</p>
    <h2>Conclusion</h2>
    <p>This music player application combines various features to provide a simple yet effective way to play and manage music tracks. The use of jQuery simplifies DOM manipulation and event handling, making the code more concise and easier to manage.</p>
