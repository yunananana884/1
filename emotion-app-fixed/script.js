
window.addEventListener('load', () => {
  const video = document.getElementById('bg-video');
  const audio = document.getElementById('bg-audio');

  // 0.5배속 영상
  video.playbackRate = 0.5;

  // 자동 재생 보완
  audio.play().catch(() => {
    document.body.addEventListener('click', () => {
      audio.play();
    });
  });
});
