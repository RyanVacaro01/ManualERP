/* UX progressivo do Manual MODUM ERP (skill: design-motion-principles).
   Roda fresco a cada navegação (MPA): sem estado entre páginas,
   sem re-init. Respeita `prefers-reduced-motion` (sai cedo). */
(() => {
  'use strict';

  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sinaliza que o script carregou.
  docEl.classList.add('ux-ready');
  // Movimento reduzido: CSS já força tudo visível e estático.
  if (reduceMotion) return;

  /* ---------- Barra de progresso de leitura (rAF + transform) ---------- */
  var progress = document.createElement('div');
  progress.id = 'ux-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  var ticking = false;
  function updateProgress() {
    ticking = false;
    var max = docEl.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = 'scaleX(' + p + ')';
  }
  function requestProgress() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    }
  }
  window.addEventListener('scroll', requestProgress, { passive: true });
  window.addEventListener('resize', requestProgress);
  updateProgress();

  /* ---------- Imagens do conteúdo: lazy + fade-in (só opacity) ---------- */
  var imgs = document.querySelectorAll('.sl-markdown-content img');
  Array.prototype.forEach.call(imgs, function (img, i) {
    // A primeira imagem tende a estar acima da dobra: carrega eager.
    if (i > 0) img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    function loaded() {
      img.classList.add('ux-loaded');
    }
    if (img.complete && img.naturalWidth > 0) {
      loaded();
    } else {
      img.classList.add('ux-img');
      img.addEventListener('load', loaded, { once: true });
      img.addEventListener('error', loaded, { once: true });
    }
  });

  /* ---------- Reveal on scroll (transições = interrompíveis) ----------
     `.ux-rv` escondido só é aplicado aqui em runtime: sem JS,
     tudo nasce visível. Stagger curto com teto (30ms × índice,
     máx 300ms). */
  var items = document.querySelectorAll(
    '.sl-markdown-content > *:not(.module-grid):not(.card-grid), .module-card, sl-card'
  );

  function revealAll() {
    Array.prototype.forEach.call(items, function (el) {
      el.classList.add('ux-visible');
    });
  }

  if (!('IntersectionObserver' in window) || items.length === 0) {
    revealAll();
    return;
  }

  Array.prototype.forEach.call(items, function (el, i) {
    el.classList.add('ux-rv');
    el.style.setProperty('--ux-delay', Math.min(i * 30, 300) + 'ms');
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ux-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
  );

  Array.prototype.forEach.call(items, function (el) {
    io.observe(el);
  });
})();
