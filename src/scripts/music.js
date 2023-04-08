/* Boton Play/Pause */
const musicBtn = document.getElementById("play-piano");
const musicIcon = document.getElementById("music-icon");
const play = 'bx-music';
const pause = 'bx-pause-circle';

let music = document.getElementById("play-piano").children[0];
let isPlaying = false;
music.pause();

function playPause() {
    if (isPlaying) {
        music.pause();
        musicIcon.classList.remove(pause);
        musicIcon.classList.add(play);
    } else {
        music.play();
        musicIcon.classList.remove(play);
        musicIcon.classList.add(pause);
    }
    isPlaying = !isPlaying;
}

musicBtn.addEventListener("click", () => {
    playPause()
})