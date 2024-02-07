function revealJoke() {
    var jokeContainer = document.getElementById('joke-container');
    var jokeText = document.getElementById('joke');

    // Array of jokes
    var jokes = [
        "Why did the JavaScript developer go broke? Because he lost all his cache!",
        "How do you comfort a JavaScript bug? You console it!",
        "Why do programmers prefer dark mode? Because light attracts bugs!"
    ];

    // Randomly select a joke
    var randomIndex = Math.floor(Math.random() * jokes.length);
    var randomJoke = jokes[randomIndex];

    // Display the joke
    jokeText.textContent = randomJoke;
    jokeContainer.removeChild(jokeButton); // Remove the button after revealing the joke
    jokeText.style.display = 'block';
}