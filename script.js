const playBtn = document.getElementById('playBtn');
const displayInput = document.getElementById('displayInput');

displayInput.addEventListener("input", function() {
    // Convert the input value to uppercase and assign it back to the input
    displayInput.value = displayInput.value.toUpperCase();
});