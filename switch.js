const toggleInput = document.getElementById('js-switch');
const body = document.body;

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
body.classList.add('dark-mode');
toggleInput.checked = true;
}

// Toggle event
toggleInput.addEventListener('change', () => {
body.classList.toggle('dark-mode');
const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
localStorage.setItem('theme', theme);
});