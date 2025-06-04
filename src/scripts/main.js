// Handle media list toggle
document.querySelectorAll('.media-list-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const mediaElement = document.getElementById(targetId);
    if (!mediaElement) return;

    const closeButton = button.parentElement.querySelector('.media-list-btn-close');
    const iframe = mediaElement.querySelector('iframe');
    const video = mediaElement.querySelector('video');
    const infoElement = mediaElement.parentElement.querySelector('.media-list-info');
    const isHidden = mediaElement.classList.contains('hidden');

    if (isHidden) {
      // Show selected media
      mediaElement.classList.remove('hidden');
      button.classList.add('active');
      if (closeButton) closeButton.classList.remove('hidden');
      if (infoElement) infoElement.classList.remove('hidden');

      // Stop other media
      document.querySelectorAll('.media-list-video:not(.hidden)').forEach((media) => {
        if (media !== mediaElement) {
          const otherIframe = media.querySelector('iframe');
          const otherVideo = media.querySelector('video');

          if (otherIframe && otherIframe.src.includes('spotify.com')) {
            otherIframe.src = otherIframe.src; // Reset Spotify
          } else if (otherVideo) {
            otherVideo.pause();
            otherVideo.currentTime = 0;
          }
        }
      });

      // Autoplay current video
      if (video) {
        requestAnimationFrame(() => {
          video.play();
        });
      }

    } else {
      // Hide media
      mediaElement.classList.add('hidden');
      button.classList.remove('active');
      if (closeButton) closeButton.classList.add('hidden');
      if (infoElement) infoElement.classList.add('hidden');

      if (iframe && iframe.src.includes('spotify.com')) {
        iframe.src = iframe.src; // Reset Spotify
      } else if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  });
});

// ✅ Add click-to-toggle play/pause on the video itself
document.querySelectorAll('.media-html5-video').forEach((video) => {
  video.addEventListener('pointerdown', (e) => {
    e.stopPropagation(); // prevent bubbling to parent
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
