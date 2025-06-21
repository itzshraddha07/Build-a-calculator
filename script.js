const display = document.getElementById('display');
const toggleMode = document.getElementById('toggle-mode');
const modeLabel = document.getElementById('mode-label');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard input
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/().".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// Theme Toggle
toggleMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  modeLabel.textContent = document.body.classList.contains('dark') ? 'Dark Mode' : 'Light Mode';
});
