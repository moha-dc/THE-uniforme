function setupReveal() {
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) {
    io.observe(el);
  });
}

// requestIdleCallback : s'exécute quand le thread principal est inactif → TBT 0
// Fallback window.load pour les navigateurs sans rIC
if ('requestIdleCallback' in window) {
  requestIdleCallback(setupReveal, { timeout: 1500 });
} else {
  window.addEventListener('load', setupReveal);
}
