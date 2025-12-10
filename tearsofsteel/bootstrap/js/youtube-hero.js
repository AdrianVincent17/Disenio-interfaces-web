// Control del reproductor YouTube en el hero y botón mute/unmute
let heroPlayer;
let heroInitiallyMuted = true;

function onYouTubeIframeAPIReady() {
  heroPlayer = new YT.Player('hero-player', {
    videoId: '8HPbWqImeDk',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: '8HPbWqImeDk',
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      disablekb: 1,
      fs: 0
    },
    events: {
      onReady: function (e) {
        try { e.target.mute(); e.target.playVideo(); } catch (err) {}
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hero-mute-btn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    if (!heroPlayer || !heroPlayer.getPlayerState) return;
    // Toggle mute using API
    if (heroPlayer.isMuted && heroPlayer.isMuted()) {
      heroPlayer.unMute();
      heroInitiallyMuted = false;
      btn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
      btn.setAttribute('aria-pressed', 'false');
    } else {
      heroPlayer.mute();
      heroInitiallyMuted = true;
      btn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
      btn.setAttribute('aria-pressed', 'true');
    }
  });

  // Pause hero video when the main movie modal opens
  const movieModal = document.getElementById('modal-movie');
  if (movieModal) {
    movieModal.addEventListener('show.bs.modal', function () {
      try { if (heroPlayer && heroPlayer.pauseVideo) heroPlayer.pauseVideo(); } catch (e) {}
    });
    movieModal.addEventListener('hidden.bs.modal', function () {
      try {
        if (heroPlayer && heroPlayer.playVideo) {
          // resume only if autoplay allowed (muted)
          if (heroInitiallyMuted) heroPlayer.playVideo();
        }
      } catch (e) {}
    });
  }
});

// Load YouTube Iframe API script dynamically in case it's not already loaded
(function loadYT(){
  if (window.YT && window.YT.Player) {
    // API already present
    if (typeof onYouTubeIframeAPIReady === 'function') onYouTubeIframeAPIReady();
    return;
  }
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();
