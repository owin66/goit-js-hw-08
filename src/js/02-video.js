// В HTML есть < iframe > с видео для Vimeo плеера.Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище
// и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPause(data) {
  const usersTime = data.seconds;
  localStorage.setItem('video-current-time', JSON.stringify(usersTime));
}

player.on('pause', throttle(onPause, 1000));

try {
  const lastUsersTime = localStorage.getItem('video-current-time');
  const parsedLastUsersTime = JSON.parse(lastUsersTime);

  if (parsedLastUsersTime) {
    player.setCurrentTime(parsedLastUsersTime);
  }
} catch (error) {
  console.log(parsedUsersTime);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
