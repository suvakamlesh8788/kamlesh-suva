// Get the button and text elements by their ID
const button = document.getElementById('changeTextButton');
const text = document.getElementById('text');

// Define a function to change the text
function changeText() {
  text.textContent = "You clicked the button! The text has changed.";
}

// Add an event listener to the button to call the changeText function when clicked
button.addEventListener('click', changeText);
