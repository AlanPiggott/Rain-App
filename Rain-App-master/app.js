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
/*
[].forEach.call(document.getElementsByClassName('btn'),
function(btn) {
  btn.addEventListener('click', function(e) {

    switch (e.target.id) {
      case "btn3":
        video.src = "./video/rain2.mp4";
        video.play();
        break;
      case "btn4":
        video.src = "./video/rain1.mp4";
        video.play();
        break;
      case "btn5":
        audio.src = "./audio/rain.mp4";
        audio.play();
        break;
      case "btn6":
        audio.src = "./audio/rain2.mp4";
        audio.play();
        break;
    }
  })
})
*/
document.getElementById("btn").addEventListener("click", function(e) {
  var tgt = e.target;
  if (tgt.tagName == "SPAN") {
    var id = tgt.closest("button").id;
    console.log(id)
    switch (id) {
      case "btn3":
        video.src = "./video/rain2.mp4";
        video.play();
        break;
      case "btn4":
        video.src = "./video/rain1.mp4";
        video.play();
        break;
      case "btn5":
        audio.src = "./audio/rain.mp4";
        audio.play();
        break;
      case "btn6":
        audio.src = "./audio/rain2.mp4";
        audio.play();
        break;
    }
  }
})
