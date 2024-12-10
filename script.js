// Function to show a message when the "Click Me for a Message" button is clicked
function showMessage() {
    alert("Hello! This is a simple JavaScript message.");
}

// Function to change the background color when the "Change Background Color" button is clicked
function changeBackgroundColor() {
    // Get the current background color
    const currentColor = document.body.style.backgroundColor;

    // Set a new background color
    if (currentColor === 'rgb(248, 248, 248)') { // if current color is light gray
        document.body.style.backgroundColor = "#E0FFFF"; // Change to light cyan
    } else {
        document.body.style.backgroundColor = "#F8F8F8"; // Change back to light gray
    }
}

// Function to generate a random joke when the "Get a Joke" button is clicked
function getJoke() {
    // Array of jokes
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you get when you cross a snowman and a vampire? Frostbite.",
        "Why don’t oysters donate to charity? Because they are shellfish!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised."
    ];

    // Get a random joke from the array
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke in the paragraph with id "jokeOutput"
    document.getElementById("jokeOutput").textContent = randomJoke;
}
