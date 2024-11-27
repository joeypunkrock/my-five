document.querySelectorAll('.media-list-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const videoElement = document.getElementById(targetId);
  
      if (!videoElement) return;
  
      // Cache frequently used elements
      const closeButton = button.parentElement.querySelector('.media-list-btn-close');
      const iframe = videoElement.querySelector('iframe');
      const infoElement = videoElement.parentElement.querySelector('.media-list-info');
  
      // Toggle visibility of the target video and the media info
      const isHidden = videoElement.classList.contains('hidden');
      
      if (isHidden) {
        videoElement.classList.remove('hidden');
        button.classList.add('active'); // Add 'active' class
        if (closeButton) closeButton.classList.remove('hidden');
        if (infoElement) infoElement.classList.remove('hidden');
  
        // Stop all other videos that are currently visible and playing
        document.querySelectorAll('.media-list-video:not(.hidden)').forEach((video) => {
          if (video !== videoElement) {
            const otherIframe = video.querySelector('iframe');
            if (otherIframe) {
              otherIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
          }
        });
  
        // Play the video with autoplay
        if (iframe) {
          const videoSrc = iframe.getAttribute('src');
          if (!videoSrc.includes('autoplay=1')) {
            iframe.src = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
          } else {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        }
      } else {
        // If the video element is already open, close it
        videoElement.classList.add('hidden');
        button.classList.remove('active'); // Remove 'active' class
        if (closeButton) closeButton.classList.add('hidden');
        if (infoElement) infoElement.classList.add('hidden');
  
        // Stop the video completely when the list item is closed
        if (iframe) {
          iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
      }
    });
  });
  