const toggleInput = document.querySelector('#js-switch input');
const body = document.body;

// Set default class for correct icon display
body.classList.add(localStorage.getItem('theme') === 'dark' ? 'dark-mode' : 'light-mode');
toggleInput.checked = localStorage.getItem('theme') === 'dark';

// Event listener
toggleInput.addEventListener('change', () => {
  const isDark = toggleInput.checked;

  body.classList.toggle('dark-mode', isDark);
  body.classList.toggle('light-mode', !isDark);

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});