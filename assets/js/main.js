// === SmartQuail Landing Page — Main JavaScript ===

(function () {
  'use strict';

  // --- DOM Ready ---
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); return; }
    document.addEventListener('DOMContentLoaded', fn);
  }

  // =====================
  // 1. DARK MODE
  // =====================
  function initDarkMode() {
    var toggles = document.querySelectorAll('#dark-toggle, #dark-toggle-mobile');
    var html = document.documentElement;

    function getPref() {
      var stored = localStorage.getItem('sq-theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function apply(mode) {
      if (mode === 'dark') { html.classList.add('dark'); }
      else { html.classList.remove('dark'); }
      localStorage.setItem('sq-theme', mode);
    }

    apply(getPref());

    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var next = html.classList.contains('dark') ? 'light' : 'dark';
        apply(next);
      });
    });
  }

  // =====================
  // 2. YOUTUBE CLICK-TO-PLAY
  // =====================
  function initYouTube() {
    var container = document.getElementById('yt-container');
    var thumb = document.getElementById('yt-thumb');
    var player = document.getElementById('yt-player');
    if (!container || !thumb || !player) return;
    var loaded = false;

    container.addEventListener('click', function () {
      if (loaded) return;
      loaded = true;
      thumb.style.display = 'none';
      player.classList.remove('hidden');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/FjUddvyp5Rs?rel=0&modestbranding=1&playsinline=1';
      iframe.className = 'absolute inset-0 w-full h-full';
      iframe.title = 'Demo SmartQuail';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.border = '0';
      player.appendChild(iframe);
    });
  }

  // =====================
  // 3. MOBILE MENU
  // =====================
  function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu ? menu.querySelectorAll('a') : [];
    const iconOpen = btn ? btn.querySelector('.icon-open') : null;
    const iconClose = btn ? btn.querySelector('.icon-close') : null;

    if (!btn || !menu) return;

    function open() {
      menu.style.display = 'block';
      void menu.offsetHeight;
      menu.classList.add('open');
      if (iconOpen) iconOpen.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    }
    function close() {
      menu.classList.remove('open');
      setTimeout(function() {
        menu.style.display = 'none';
      }, 300);
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }

    btn.addEventListener('click', function () {
      menu.classList.contains('open') ? close() : open();
    });

    links.forEach(function (a) { a.addEventListener('click', close); });
  }

  // =====================
  // 4. SCROLL REVEAL
  // =====================
  function initScrollReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      observer.observe(el);
    });
  }

  // =====================
  // 5. COUNTER ANIMATION (IMPACT SECTION)
  // =====================
  function initCounters() {
    var started = false;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            document.querySelectorAll('.counter-target').forEach(function (el) {
              var target = parseFloat(el.getAttribute('data-target'));
              var duration = 2000;
              var step = target / (duration / 16);
              var current = 0;
              var suffix = el.getAttribute('data-suffix') || '';
              var decimals = (target % 1 !== 0) ? 1 : 0;

              function tick() {
                current += step;
                if (current >= target) { current = target; }
                el.textContent = current.toFixed(decimals) + suffix;
                if (current < target) { requestAnimationFrame(tick); }
              }
              tick();
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    var section = document.getElementById('impact');
    if (section) observer.observe(section);
  }

  // =====================
  // 6. ACTIVE NAV LINK HIGHLIGHT
  // =====================
  function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('active-link');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active-link');
              }
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  // =====================
  // INIT ALL
  // =====================
  ready(function () {
    initDarkMode();
    initYouTube();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initActiveNav();
  });
})();
