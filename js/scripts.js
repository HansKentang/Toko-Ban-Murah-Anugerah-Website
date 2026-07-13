/* ============================================
   Toko Ban Murah Anugerah - Shared Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Navigation Drawer ---
  const drawerToggle = document.getElementById('drawer-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const drawer = document.getElementById('drawer');
  const drawerContent = document.getElementById('drawer-content');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      if (drawerContent) drawerContent.classList.remove('-translate-x-full');
    }, 10);
  }

  function closeDrawer() {
    if (!drawer) return;
    if (drawerContent) drawerContent.classList.add('-translate-x-full');
    setTimeout(function () {
      drawer.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }

  if (drawerToggle) drawerToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --- Open/Close Status Badges ---
  function updateStatusBadges() {
    var now = new Date();
    var hour = now.getHours();
    var isOpen = hour >= 8 && hour < 17;

    document.querySelectorAll('.status-badge').forEach(function (badge) {
      if (isOpen) {
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>Buka';
        badge.className = badge.className.replace(/status-badge.*/, 'status-badge inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-[11px] font-[600] px-2.5 py-1 rounded-full');
      } else {
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>Tutup';
        badge.className = badge.className.replace(/status-badge.*/, 'status-badge inline-flex items-center gap-1.5 bg-red-500/20 backdrop-blur-sm text-red-200 text-[11px] font-[600] px-2.5 py-1 rounded-full');
      }
    });
  }

  updateStatusBadges();
  setInterval(updateStatusBadges, 60000);

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = this.nextElementSibling;
      var chevron = this.querySelector('.faq-chevron');
      var isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close all
      document.querySelectorAll('.faq-content').forEach(function (c) {
        c.style.maxHeight = '0px';
      });
      document.querySelectorAll('.faq-chevron').forEach(function (ch) {
        ch.classList.remove('rotate-180');
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (chevron) chevron.classList.add('rotate-180');
      }
    });
  });

  // --- Countdown Timer ---
  function initCountdown(elId, daysId, hoursId, minutesId, secondsId) {
    var el = document.getElementById(elId);
    if (!el) return;

    var totalSeconds = 2 * 86400 + 14 * 3600 + 45 * 60 + 22; // 2d 14h 45m 22s
    var dEl = document.getElementById(daysId);
    var hEl = document.getElementById(hoursId);
    var mEl = document.getElementById(minutesId);
    var sEl = secondsId ? document.getElementById(secondsId) : null;

    var t = totalSeconds;
    setInterval(function () {
      if (t <= 0) return;
      t--;
      var d = Math.floor(t / 86400);
      var h = Math.floor((t % 86400) / 3600);
      var m = Math.floor((t % 3600) / 60);
      if (dEl) dEl.textContent = String(d).padStart(2, '0');
      if (hEl) hEl.textContent = String(h).padStart(2, '0');
      if (mEl) mEl.textContent = String(m).padStart(2, '0');
      if (sEl) sEl.textContent = String(t % 60).padStart(2, '0');
    }, 1000);
  }

  initCountdown('countdown-simple', 'cd-days', 'cd-hours', 'cd-mins');
  initCountdown('countdown-full', 'cd2-days', 'cd2-hours', 'cd2-mins', 'cd2-secs');

  // --- Button Micro-interactions ---
  document.querySelectorAll('.btn-press').forEach(function (btn) {
    btn.addEventListener('mousedown', function () { this.style.transform = 'scale(0.96)'; });
    btn.addEventListener('mouseup', function () { this.style.transform = ''; });
    btn.addEventListener('mouseleave', function () { this.style.transform = ''; });
  });

  // --- Form Handling ---
  document.querySelectorAll('.contact-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = this.querySelector('button[type="submit"]');
      var originalContent = btn.innerHTML;

      btn.innerHTML = 'Mengirim... <span class="material-symbols-outlined">sync</span>';
      btn.disabled = true;
      btn.classList.add('opacity-80');

      setTimeout(function () {
        btn.innerHTML = 'Terkirim! <span class="material-symbols-outlined">check_circle</span>';
        btn.classList.remove('bg-secondary-fixed-dim', 'text-on-secondary-fixed');
        btn.classList.add('bg-green-600', 'text-white');

        if (form) form.reset();

        setTimeout(function () {
          btn.innerHTML = originalContent;
          btn.classList.remove('bg-green-600', 'text-white', 'opacity-80');
          btn.classList.add('bg-secondary-fixed-dim', 'text-on-secondary-fixed');
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Animated Counter (Stats Section) ---
  var statSection = document.getElementById('stats-section');
  var statCounters = document.querySelectorAll('.stat-counter');

  if (statSection && statCounters.length > 0) {
    var countersAnimated = false;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-target')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1800;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var easedProgress = easeOutCubic(progress);
        var current = Math.round(easedProgress * target);
        el.textContent = current + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      window.requestAnimationFrame(step);
    }

    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          statCounters.forEach(function (counter) {
            animateCounter(counter);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statSection);
  }

  // --- Hero Parallax Scroll Effect ---
  var heroParallaxImg = document.querySelector('.hero-parallax-img');
  if (heroParallaxImg) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          var maxScroll = 600;
          var progress = Math.min(scrollY / maxScroll, 1);
          var translateY = progress * 40;
          heroParallaxImg.style.transform = 'translateY(' + translateY + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Hero Staggered Entrance ---
  var heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    // Trigger entrance animation after a brief delay (to ensure layout is ready)
    setTimeout(function () {
      heroSection.classList.add('hero-loaded');
    }, 100);
  }
});
