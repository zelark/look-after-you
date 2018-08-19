const COUNT = 4; // number of tracks


const getRandomInt = max =>
  Math.floor(Math.random() * Math.floor(max));


const trackName = n => `tracks/${n}.mp3`;


const howl = track =>
  new Howl({ src: [track], autoplay: true, volume: 0.8 });


const next = (rand) => {
  let n = rand();
  let player = howl(trackName(n));

  return () => {
    player.stop();
    n = rand();
    player = howl(trackName(n));
    console.log(player._src);
  };
};


const button = document.getElementById('button');
button.addEventListener('click', next(() => getRandomInt(COUNT) + 1));
