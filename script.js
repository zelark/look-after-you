const COUNT = 4; // number of tracks


const getRandomInt = max =>
  Math.floor(Math.random() * Math.floor(max)) + 1;


const trackName = n => `tracks/${n}.mp3`;


const howl = track =>
  new Howl({ src: [track], autoplay: false, volume: 0.8 });


let n = getRandomInt(COUNT);
let player = howl(trackName(n));

const play = () => {
  if (player._sounds.length > 0) {
    player.play(player._sounds[0]._id);
  } else {
    player.play();
  }
}

const next = () => {
  player.stop();
  n = getRandomInt(COUNT);
  player = howl(trackName(n));
  play();
  console.log(player._src);
};


const stopTrack = document.getElementById('stop-btn');
const playTrack = document.getElementById('play-btn');
const nextTrack = document.getElementById('next-btn');

stopTrack.addEventListener('click', () => player.stop());
playTrack.addEventListener('click', () => play());
nextTrack.addEventListener('click', () => next());
