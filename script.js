const COUNT = 4; // number of tracks

function get_random_int(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const n      = (get_random_int(COUNT) + 1).toString();
const track  = "tracks/" + n.padStart(2, "0") + ".mp3";

var player = new Howl({
  src: [track],
  autoplay: true,
  volume: 0.8
});

function play() {
  return player.playing() ? player.pause() : player.play();
}
