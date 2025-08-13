const toggleInputs = document.querySelectorAll('.js-switch input');
const body = document.body;

// Set default class for correct icon display
body.classList.add(localStorage.getItem('theme') === 'dark' ? 'dark-mode' : 'light-mode');

// Synchronize all switches
toggleInputs.forEach(input => {
  input.checked = localStorage.getItem('theme') === 'dark';
});

// Event listener for all switches
toggleInputs.forEach(toggleInput => {
  toggleInput.addEventListener('change', () => {
    const isDark = toggleInput.checked;

    // Update body class
    body.classList.toggle('dark-mode', isDark);
    body.classList.toggle('light-mode', !isDark);

    // Save theme to local storage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Synchronize other switches
    toggleInputs.forEach(input => {
      if (input !== toggleInput) {
        input.checked = isDark;
      }
    });
  });
});