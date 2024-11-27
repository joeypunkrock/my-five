document.querySelectorAll('.media-list-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const videoElement = document.getElementById(targetId);
  
      // Check if the associated video element exists
      if (videoElement) {
        // Toggle visibility of the target video
        if (videoElement.classList.contains('hidden')) {
          videoElement.classList.remove('hidden');
          button.classList.add('active'); // Add 'active' class
  
          // Show the close button for the current item
          const closeButton = button.parentElement.querySelector('.media-list-btn-close');
          if (closeButton) {
            closeButton.classList.remove('hidden');
          }
  
          // Stop all other videos that are currently visible and playing
          document.querySelectorAll('.media-list-video').forEach((video) => {
            if (video !== videoElement && !video.classList.contains('hidden')) {
              const iframe = video.querySelector('iframe');
              if (iframe) {
                // Stop the video completely to prevent multiple session conflict
                iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
              }
            }
          });
  
          // Play the video with autoplay
          const iframe = videoElement.querySelector('iframe');
          if (iframe) {
            let videoSrc = iframe.getAttribute('src');
            if (!videoSrc.includes('autoplay=1')) {
              videoSrc += (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
              iframe.src = videoSrc;
            } else {
              // If iframe is already loaded, send play command
              iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
          }
        } else {
          // If the video element is already open, close it
          videoElement.classList.add('hidden');
          button.classList.remove('active'); // Remove 'active' class
  
          // Hide the close button for this item
          const closeButton = button.parentElement.querySelector('.media-list-btn-close');
          if (closeButton) {
            closeButton.classList.add('hidden');
          }
  
          // Only stop the video if this is the one currently playing
          const iframe = videoElement.querySelector('iframe');
          if (iframe && !videoElement.classList.contains('hidden')) {
            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
          }
        }
      }
    });
  });
  