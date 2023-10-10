const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = () => {
    fetch(url)
        .then(response => response.json())  // Corrected the arrow function
        .then(data => {
            jokeContainer.textContent = data.joke;  // Fixed interpolation syntax
        })
        .catch(error => console.error("Error fetching joke:", error));  // Added error handling
}

btn.addEventListener("click", getJoke);
getJoke();  // Fetch joke on page load

