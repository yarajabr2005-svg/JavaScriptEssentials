const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', function(event) {
    console.log(`Key pressed down: ${event.key}`);
});

keyInput.addEventListener('keyup', function(event) {
    console.log(`Key released: ${event.key}`);
});

const pressInput = document.getElementById('pressInput');
pressInput.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});