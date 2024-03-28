document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');
  const videoThumbnail = document.getElementById('video-thumbnail');
  const playButton = document.getElementById('play-button');
  let isPlaying = false;

  playButton.addEventListener('click', function () {
    if (isPlaying) {
      video.pause();
      isPlaying = false;
      videoThumbnail.style.display = 'block';
      playButton.style.display = 'block';
    } else {
      video.play();
      isPlaying = true;
      video.style.display = 'block';
      videoThumbnail.style.display = 'none';
      playButton.style.display = 'none';
    }
  });

  video.addEventListener('click', function () {
    if (isPlaying) {
      video.pause();
      isPlaying = false;
      videoThumbnail.style.display = 'block';
      playButton.style.display = 'block';
    } else {
      video.play();
      isPlaying = true;
      video.style.display = 'block';
      videoThumbnail.style.display = 'none';
      playButton.style.display = 'none';
    }
  });

  videoThumbnail.style.display = 'block';
  playButton.style.display = 'block';
});
