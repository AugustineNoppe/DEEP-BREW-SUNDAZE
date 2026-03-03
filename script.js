  function openMobileNav() {
    document.getElementById('mobileNav').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.body.style.overflow = '';
  }

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });

  function openLightbox(el) {
    document.getElementById('lightbox-img').src = el.querySelector('img').src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(e) {
    if (!e || e.target !== document.getElementById('lightbox-img')) {
      document.getElementById('lightbox').classList.remove('open');
      document.body.style.overflow = '';
    }
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeLightbox(); closeMobileNav(); }
  });
