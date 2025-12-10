// Pausar y reiniciar el vídeo cuando se cierra el modal
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modal-movie');
  var video = document.getElementById('video-movie');
  if (!modal || !video) return;
  modal.addEventListener('hidden.bs.modal', function () {
    try {
      if (!video.paused) video.pause();
      video.currentTime = 0;
    } catch (e) {
      // ignore
    }
  });
});
