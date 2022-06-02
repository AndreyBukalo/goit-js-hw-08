const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = 'videoplayer-current-time';

const onPlay = function (data) {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(KEY,dataJson);
    
};

player.on('timeupdate',onPlay);
   





player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
