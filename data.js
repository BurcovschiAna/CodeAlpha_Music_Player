let songs = [
    {
        name: "Orion",
        path: "./audio/Orion.mp3",
        artist: "Metallica",
        album: "./img/Master Of Puppets.jpeg",
        background: "./img/Metallica orion.jpeg"
    },
    {
        name: "Master Of Puppets",
        path: "./audio/Master Of Puppets.mp3",
        artist: "Metallica",
        album: "./img/Master Of Puppets.jpeg",
        background: "./img/Metallica orion.jpeg"
    },
    {
        name: "Back In Black",
        path: "./audio/Back In Black.mp3",
        artist: "AC/DC",
        album: "./img/Back in Black.jpeg",
        background: "./img/ACDC back in black.jpg"
    },
    {
        name: "The House of The Risung Sun",
        path: "./audio/Animals - The House Of The Rising Sun.mp3",
        artist: "Animals",
        album: "./img/House of the rising sun.jpg",
        background: "./img/Animals.jpeg"
    }, 
    {
        name: "Bad Medicine",
        path: "./audio/Bon Jovi - Bad Medicine.mp3",
        artist: "Bon Jovi",
        album: "./img/Bad medicine.jpg",
        background: "./img/Bon Jovi bad medicine.webp"
    },
    {
        name: "It's My Life",
        path: "./audio/Bon Jovi - It's My Life.mp3",
        artist: "Bon Jovi",
        album: "./img/Its my life.jpg",
        background: "./img/bon jovi its my life.jpg"
    },
    {
        name: "Livin' On A Prayer",
        path: "./audio/Bon Jovi - Livin' On A Prayer.mp3",
        artist: "Bon Jovi",
        album: "./img/Livin' On A Prayer.jpg",
        background: "./img/Bon Jovi Livin' On A Prayer.webp"
    },
    {
        name: " Wanted Dead Or Alive",
        path: "./audio/Bon Jovi - Wanted Dead Or Alive.mp3",
        artist: "Bon Jovi",
        album: "./img/Livin' On A Prayer.jpg",
        background: "./img/Bon Jovi Livin' On A Prayer.webp"
    },
    {
        name: " You Give Love A Bad Name",
        path: "./audio/Bon Jovi - You Give Love A Bad Name.mp3",
        artist: "Bon Jovi",
        album: "./img/Livin' On A Prayer.jpg",
        background: "./img/Bon Jovi Livin' On A Prayer.webp"
    },
    {
        name: "Come as you are",
        path: "./audio/Come As You Are - Nirvana.mp3",
        artist: "Nirvana",
        album: "./img/come as you are.jpg",
        background: "./img/Nirvana come as you are.webp"
    },
    {
        name: "Enter Sandman",
        path: "./audio/Enter Sandman - Metalica.mp3",
        artist: "Metallica",
        album: "./img/Enter Sadman.jpg",
        background: "./img/Metalica enter sadman.webp"
    },
    {
        name: "For Whom The Bell Tolls",
        path: "./audio/For Whom The Bell Tolls - Metalica.mp3",
        artist: "Metallica",
        album: "./img/For whom the bell tolls.jpg",
        background: "./img/Metallica For Whom The Bell Tolls.jpg"
    },
    {
        name: "Heaven's On Fire",
        path: "./audio/Heaven's On Fire - Kiss.mp3",
        artist: "Kiss",
        album: "./img/Heaven's On Fire.jpg",
        background: "./img/Kiss Heaven's On Fire.jpg"
    },
    {
        name: "Highway to Hell",
        path: "./audio/Highway to Hell - ACDC.mp3",
        artist: "AC/DC",
        album: "./img/Highway to Hell.jpg",
        background: "./img/ACDC.webp"
    },

    {
        name: "I Was Made For Lovin' You",
        path: "./audio/I Was Made For Lovin' You - Kiss.mp3",
        artist: "Kiss",
        album: "./img/I Was Made For Lovin' You.jpg",
        background: "./img/Kiss I Was Made For Lovin' You.jpg"
    },
    {
        name: "Knockin' On Heaven's Door",
        path: "./audio/Knockin' On Heaven's Door - Guns n Roses.mp3",
        artist: "Guns N Roses",
        album: "./img/Knockin' On Heaven's Door.jpg",
        background: "./img/Guns n Roses Knockin' On Heaven's Door.jpg"
    },
    {
        name: "Another one bites the dust",
        path: "./audio/Queen - Another one bites the dust.mp3",
        artist: "Queen",
        album: "./img/Another_one_bites_the_dust.jpg",
        background: "./img/Queen Another one bites the dust.webp"
    },
    {
        name: "Bohemian Rhapsody",
        path: "./audio/Queen - Bohemian Rhapsody.mp3",
        artist: "Queen",
        album: "./img/Bohemian Rhapsody.jpg",
        background: "./img/Queen Bohemian Rhapsody.jpg"
    },
    {
        name: "Don't Stop Me Now",
        path: "./audio/Queen - Don't Stop Me Now.mp3",
        artist: "Queen",
        album: "./img/Don't Stop Me Now.jpg",
        background: "./img/Queen Don't Stop Me Now.webp"
    },
    {
        name: "I Want It All",
        path: "./audio/Queen - I Want It All.mp3",
        artist: "Queen",
        album: "./img/I Want It All.jpg",
        background: "./img/Queen I Want It All.webp"
    },
    {
        name: "I Want To Break Free",
        path: "./audio/Queen - I Want To Break Free.mp3",
        artist: "Queen",
        album: "./img/I Want To Break Free.jpg",
        background: "./img/Queen I Want To Break Free.png"
    },
    {
        name: "Killer Queen",
        path: "./audio/Queen - Killer Queen.mp3",
        artist: "Queen",
        album: "./img/Killer Queen.webp",
        background: "./img/Queen Killer Queen.webp"
    },
    {
        name: "Radio Ga Ga",
        path: "./audio/Queen - Radio Ga Ga.mp3",
        artist: "Queen",
        album: "./img/Radio Ga Ga.jpg",
        background: "./img/Queen I Want To Break Free.png"
    },
    {
        name: "The Show Must Go On",
        path: "./audio/Queen - The Show Must Go On.mp3",
        artist: "Queen",
        album: "./img/The Show Must Go On.png",
        background: "./img/Queen The Show Must Go On.jpg"
    },
    {
        name: "Under Pressure",
        path: "./audio/Queen - Under Pressure.mp3",
        artist: "Queen",
        album: "./img/Under Pressure.jpg",
        background: "./img/Queen Under Pressure.webp"
    },
    {
        name: "Rock And Roll All Nite",
        path: "./audio/Rock And Roll All Nite - Kiss.mp3",
        artist: "Kiss",
        album: "./img/Rock And Roll All Nite.jpg",
        background: "./img/Kiss Rock And Roll All Nite.jpg"
    },
    {
        name: "Rock N Roll Train",
        path: "./audio/Rock N Roll Train - ACDC.mp3",
        artist: "AC/DC",
        album: "./img/Rock N Roll Train.jpg",
        background: "./img/AC DC.jpg"
    },
    {
        name: "Smells Like Teen Spirit",
        path: "./audio/Smells Like Teen Spirit -Nirvana.mp3",
        artist: "Nirvana",
        album: "./img/Smells Like Teen Spirit.jpg",
        background: "./img/Nirvana Smells Like Teen Spirit.jpg"
    },
    {
        name: "Sweet Child O' Mine",
        path: "./audio/Sweet Child O' Mine - Guns n Roses.mp3",
        artist: "Guns N Roses",
        album: "./img/Sweet Child O' Mine.png",
        background: "./img/Guns n Roses Sweet Child O' Mine.webp"
    },
    {
        name: "The Unforgiven",
        path: "./audio/The Unforgiven - Metalica.mp3",
        artist: "Metallica",
        album: "./img/Enter Sadman.jpg",
        background: "./img/Metalica enter sadman.webp"
    },
    {
        name: "Thunderstruck",
        path: "./audio/Thunderstruck - ACDC.mp3",
        artist: "AC/DC",
        album: "./img/Thunderstruck.jpg",
        background: "./img/ACDC Thunderstruck.jpg"
    },
    {
        name: "TNT",
        path: "./audio/TNT - ACDC.mp3",
        artist: "AC/DC",
        album: "./img/TNT.jpg",
        background: "./img/ACDC TNT.jpg"
    },
    {
        name: "Welcome To The Jungle",
        path: "./audio/Welcome To The Jungle - Guns n Roses.mp3",
        artist: "Guns N Roses",
        album: "./img/Sweet Child O' Mine.png",
        background: "./img/Guns n Roses Welcome To The Jungle.webp"
    }
];