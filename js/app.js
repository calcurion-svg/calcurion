// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const saved = localStorage.getItem('calcurion-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initial);

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('calcurion-theme', next);
});

// Mobile nav menu
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav') || document.querySelector('.header .nav');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.contains('is-open');
    if (open) closeNav();
    else openNav();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNav());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    closeNav();
  });
})();

// Module pills
document.querySelectorAll('.pill-tabs').forEach(group => {
  const pills = group.querySelectorAll('.pill');
  const section = group.closest('.section');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const module = pill.dataset.module;
      section.querySelectorAll('.module-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const target = section.querySelector(`#panel-${module}`);
      if (target) target.classList.add('active');
    });
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Jump links that switch module tabs (e.g. Pure 2)
document.querySelectorAll('[data-jump]').forEach(link => {
  link.addEventListener('click', () => {
    const mod = link.getAttribute('data-jump');
    const section = document.getElementById('maths') || document.getElementById('further') || document.getElementById('gcse');
    if (!section || !mod) return;
    const pill = section.querySelector(`.pill[data-module="${mod}"]`);
    if (pill) pill.click();
  });
});

// Site visit counter (once per browser session)
// Uses countapi.mileshilliard.com (free drop-in replacement for the retired countapi.xyz)
(function () {
  const el = document.getElementById('visitCount');
  const SESSION_KEY = 'calcurion-visit-counted';
  const COUNTER_KEY = 'calcurion-site-visits';
  const BASE = 'https://countapi.mileshilliard.com/api/v1';
  const already = sessionStorage.getItem(SESSION_KEY);

  function format(n) {
    const num = Number(n);
    if (!Number.isFinite(num)) return '';
    return num.toLocaleString('en-GB') + ' visits';
  }

  function show(n) {
    if (!el) return;
    const text = format(n);
    if (text) el.textContent = text;
  }

  function parseValue(data) {
    if (!data || data.value == null) return null;
    const n = Number(data.value);
    return Number.isFinite(n) ? n : null;
  }

  if (already) {
    // Same session — only fetch the current total (do not increment again)
    fetch(BASE + '/get/' + COUNTER_KEY)
      .then((r) => r.json())
      .then((data) => {
        const n = parseValue(data);
        if (n != null) show(n);
      })
      .catch(() => {});
    return;
  }

  // First page view this session — increment and show
  fetch(BASE + '/hit/' + COUNTER_KEY)
    .then((r) => r.json())
    .then((data) => {
      const n = parseValue(data);
      if (n != null) {
        show(n);
        sessionStorage.setItem(SESSION_KEY, '1');
      }
    })
    .catch(() => {
      if (el) el.textContent = '';
    });
})();
