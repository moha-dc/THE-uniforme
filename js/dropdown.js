document.querySelectorAll('.ep-toggle').forEach(function(btn) {
  var target = document.querySelector(btn.getAttribute('data-target'));
  if (!target) return;

  btn.addEventListener('click', function() {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    target.classList.toggle('open', !isOpen);

    // Déclenche le stagger reveal quand on ouvre
    if (!isOpen) {
      var stagger = target.querySelector('.reveal-stagger');
      if (stagger) {
        setTimeout(function() { stagger.classList.add('in'); }, 80);
      }
    }
  });
});
