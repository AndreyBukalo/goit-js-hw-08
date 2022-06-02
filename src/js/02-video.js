import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = 'videoplayer-current-time';
const playTime = localStorage.getItem(KEY);

function onPlay(event) {
  const time = event.seconds;
  localStorage.setItem(KEY, time);
}

if (playTime) {
  player.setCurrentTime(playTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
