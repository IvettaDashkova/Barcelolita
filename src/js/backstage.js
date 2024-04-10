import { fetchVideo } from './API';
import { formVideoURL } from './helpers';

document.addEventListener('DOMContentLoaded', async function () {
  const videoContainer = document.querySelector('.video-container');
  const video = document.getElementById('video');
  const videoThumbnail = document.getElementById('video-thumbnail');
  const playButton = document.getElementById('play-button');
  let isPlaying = false;

  const videoURL = await fetchVideo();

  video.innerHTML = ` <source src=${formVideoURL(videoURL)} type="video/mp4">
                Your browser does not support the video tag or the file format of this video.`;

  playButton.addEventListener('click', function () {
    if (!isPlaying) {
      playVideo();
    }
  });

  video.addEventListener('click', function () {
    if (isPlaying) {
      pauseVideo();
    }
  });

  function playVideo() {
    video.play();
    isPlaying = true;
    video.style.display = 'block';
    videoThumbnail.style.display = 'none';
    playButton.style.display = 'none';
  }

  function pauseVideo() {
    video.pause();
    isPlaying = false;
    video.currentTime = 0;
    videoThumbnail.style.display = 'block';
    playButton.style.display = 'block';
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        if (isPlaying) {
          pauseVideo();
        }
      }
    });
  });

  observer.observe(videoContainer);

  videoThumbnail.style.display = 'block';
  playButton.style.display = 'block';
});
