document.addEventListener('DOMContentLoaded', () => {
  const toggleLink = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  // Check system preference and set initial theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark && !html.hasAttribute('data-theme')) {
    html.setAttribute('data-theme', 'dark');
    toggleLink.textContent = '☀️'; // 亮模式
  } else {
    toggleLink.textContent = '🌙'; // 暗模式
  }

  // Toggle theme on link click
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
      toggleLink.textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      toggleLink.textContent = '☀️';
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!html.hasAttribute('data-theme') || html.getAttribute('data-theme') === '') {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      toggleLink.textContent = e.matches ? '☀️' : '🌙';
    }
  });
});
