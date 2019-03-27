const audio = document.getElementById("audio");
const video = document.getElementById("video");

function playAudio() {
    audio.play();
    video.play();
}

function pauseAudio() {
    audio.pause();
    video.pause();
}

function setVolume(volume){
    audio.volume = volume
;}
