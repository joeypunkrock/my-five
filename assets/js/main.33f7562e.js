(self["webpackChunk"] = self["webpackChunk"] || []).push([[1],{

/***/ 7:
/***/ (function() {

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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(7));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uMzNmNzU2MmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYW5kbGUgbWVkaWEgbGlzdCB0b2dnbGVcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lZGlhLWxpc3QtYnRuJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgY29uc3QgbWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xyXG4gICAgaWYgKCFtZWRpYUVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpYS1saXN0LWJ0bi1jbG9zZScpO1xyXG4gICAgY29uc3QgaWZyYW1lID0gbWVkaWFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG4gICAgY29uc3QgdmlkZW8gPSBtZWRpYUVsZW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcclxuICAgIGNvbnN0IGluZm9FbGVtZW50ID0gbWVkaWFFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGlhLWxpc3QtaW5mbycpO1xyXG4gICAgY29uc3QgaXNIaWRkZW4gPSBtZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKTtcclxuXHJcbiAgICBpZiAoaXNIaWRkZW4pIHtcclxuICAgICAgLy8gU2hvdyBzZWxlY3RlZCBtZWRpYVxyXG4gICAgICBtZWRpYUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgaWYgKGNsb3NlQnV0dG9uKSBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgaWYgKGluZm9FbGVtZW50KSBpbmZvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIC8vIFN0b3Agb3RoZXIgbWVkaWFcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lZGlhLWxpc3QtdmlkZW86bm90KC5oaWRkZW4pJykuZm9yRWFjaCgobWVkaWEpID0+IHtcclxuICAgICAgICBpZiAobWVkaWEgIT09IG1lZGlhRWxlbWVudCkge1xyXG4gICAgICAgICAgY29uc3Qgb3RoZXJJZnJhbWUgPSBtZWRpYS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcclxuICAgICAgICAgIGNvbnN0IG90aGVyVmlkZW8gPSBtZWRpYS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG5cclxuICAgICAgICAgIGlmIChvdGhlcklmcmFtZSAmJiBvdGhlcklmcmFtZS5zcmMuaW5jbHVkZXMoJ3Nwb3RpZnkuY29tJykpIHtcclxuICAgICAgICAgICAgb3RoZXJJZnJhbWUuc3JjID0gb3RoZXJJZnJhbWUuc3JjOyAvLyBSZXNldCBTcG90aWZ5XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG90aGVyVmlkZW8pIHtcclxuICAgICAgICAgICAgb3RoZXJWaWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICBvdGhlclZpZGVvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQXV0b3BsYXkgY3VycmVudCB2aWRlb1xyXG4gICAgICBpZiAodmlkZW8pIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGlkZSBtZWRpYVxyXG4gICAgICBtZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgaWYgKGNsb3NlQnV0dG9uKSBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgaWYgKGluZm9FbGVtZW50KSBpbmZvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChpZnJhbWUgJiYgaWZyYW1lLnNyYy5pbmNsdWRlcygnc3BvdGlmeS5jb20nKSkge1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSBpZnJhbWUuc3JjOyAvLyBSZXNldCBTcG90aWZ5XHJcbiAgICAgIH0gZWxzZSBpZiAodmlkZW8pIHtcclxuICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIOKchSBBZGQgY2xpY2stdG8tdG9nZ2xlIHBsYXkvcGF1c2Ugb24gdGhlIHZpZGVvIGl0c2VsZlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVkaWEtaHRtbDUtdmlkZW8nKS5mb3JFYWNoKCh2aWRlbykgPT4ge1xyXG4gIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHByZXZlbnQgYnViYmxpbmcgdG8gcGFyZW50XHJcbiAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=