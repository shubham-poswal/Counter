// Get the elements from the DOM
const countElement = document.getElementById('count');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

// Initialize the counter value
let count = 0;

// Function to update the count
function updateCount() {
    countElement.textContent = count;
}

// Event listeners for the buttons
decreaseButton.addEventListener('click', () => {
    count--;
    updateCount();
});

increaseButton.addEventListener('click', () => {
    count++;
    updateCount();
});
