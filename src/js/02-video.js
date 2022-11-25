const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const currentTime = evt => {
  localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
};

const setTimePlayback = () => {
  const currentLocalTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (currentLocalTime !== null) {
    player.setCurrentTime(currentLocalTime);
  }
};

player.on('timeupdate', throttle(currentTime, 1000));

player.on('play', setTimePlayback);
