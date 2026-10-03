(function () {
  // Show / hide answers
  document.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      if (!answer) return;
      const isOpen = answer.classList.contains('open');
      answer.classList.toggle('open', !isOpen);
      btn.classList.toggle('open', !isOpen);
      btn.textContent = isOpen ? 'Show answer' : 'Hide answer';
    });
  });

  const page = document.querySelector('.q-page');
  if (!page) return;

  const header = page.querySelector('.q-header');
  const questions = Array.from(page.querySelectorAll('article.question'));
  if (!header || !questions.length) return;

  // Student tip: try the question first
  if (!header.querySelector('.q-tip')) {
    const tip = document.createElement('div');
    tip.className = 'q-tip';
    tip.innerHTML =
      '<strong>Study tip:</strong> Attempt each question before revealing the answer. Use Easy → Medium → Hard to build confidence.';
    header.appendChild(tip);
  }

  // Difficulty filter
  if (!header.querySelector('.q-filter')) {
    const filter = document.createElement('div');
    filter.className = 'q-filter';
    filter.setAttribute('role', 'group');
    filter.setAttribute('aria-label', 'Filter by difficulty');
    filter.innerHTML =
      '<button type="button" class="q-filter-btn active" data-diff="all">All</button>' +
      '<button type="button" class="q-filter-btn" data-diff="easy">Easy</button>' +
      '<button type="button" class="q-filter-btn" data-diff="medium">Medium</button>' +
      '<button type="button" class="q-filter-btn" data-diff="hard">Hard</button>';
    header.appendChild(filter);

    filter.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-diff]');
      if (!btn) return;
      filter.querySelectorAll('.q-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const diff = btn.getAttribute('data-diff');
      questions.forEach((q) => {
        const qDiff = (q.getAttribute('data-diff') || '').toLowerCase();
        const show = diff === 'all' || qDiff === diff;
        q.hidden = !show;
      });
    });
  }
})();
