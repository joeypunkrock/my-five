document.querySelectorAll('.media-list-info').forEach((el) => {
  if (!el.textContent.trim()) {
      el.style.display = 'none';
  }
});

document.querySelectorAll('.media-list-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const mediaElement = document.getElementById(targetId);
  
      if (!mediaElement) return;
  
      // Cache frequently used elements
      const closeButton = button.parentElement.querySelector('.media-list-btn-close');
      const iframe = mediaElement.querySelector('iframe');
      const infoElement = mediaElement.parentElement.querySelector('.media-list-info');
  
      // Toggle visibility of the target video and the media info
      const isHidden = mediaElement.classList.contains('hidden');
  
      if (isHidden) {
        mediaElement.classList.remove('hidden');
        button.classList.add('active'); // Add 'active' class
        if (closeButton) closeButton.classList.remove('hidden');
        if (infoElement) infoElement.classList.remove('hidden');
  
        // Stop all other media elements that are currently visible and playing
        document.querySelectorAll('.media-list-video:not(.hidden)').forEach((media) => {
          if (media !== mediaElement) {
            const otherIframe = media.querySelector('iframe');
            if (otherIframe) {
              // Stop YouTube video if applicable
              if (otherIframe.src.includes('youtube.com')) {
                otherIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
              }
              // For Spotify, we just reload the iframe to stop playback
              else if (otherIframe.src.includes('spotify.com')) {
                const originalSrc = otherIframe.src;
                otherIframe.src = originalSrc; // Reload to stop Spotify player
              }
            }
          }
        });
  
        // Play the video with autoplay (if applicable)
        if (iframe) {
          if (iframe.src.includes('youtube.com')) {
            const videoSrc = iframe.getAttribute('src');
            if (!videoSrc.includes('autoplay=1')) {
              iframe.src = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
            } else {
              iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
          }
          // Spotify embed simply becomes visible; it will autoplay if configured
        }
      } else {
        // If the media element is already open, close it
        mediaElement.classList.add('hidden');
        button.classList.remove('active'); // Remove 'active' class
        if (closeButton) closeButton.classList.add('hidden');
        if (infoElement) infoElement.classList.add('hidden');
  
        // Stop the media completely
        if (iframe) {
          if (iframe.src.includes('youtube.com')) {
            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
          } else if (iframe.src.includes('spotify.com')) {
            const originalSrc = iframe.src;
            iframe.src = originalSrc; // Reload to stop Spotify player
          }
        }
      }
    });
  });
  