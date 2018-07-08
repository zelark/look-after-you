const COUNT = 4; // number of tracks

function get_random_int(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const n      = (get_random_int(COUNT) + 1).toString();
const track  = "tracks/" + n.padStart(2, "0") + ".mp3";
const player = document.getElementById("player");

player.innerHTML = '<source src="' + track + '" type="audio/mpeg"></source>';

function play() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

window.onload = function () {
}