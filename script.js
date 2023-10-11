// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// const getJoke = () => {
//     fetch(url)
//         .then(response => response.json())  // Corrected the arrow function
//         .then(data => {
//             jokeContainer.textContent = data.joke;  // Fixed interpolation syntax
//         })
//         .catch(error => console.error("Error fetching joke:", error));  // Added error handling
// }

// btn.addEventListener("click", getJoke);
// getJoke();  // Fetch joke on page load

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

const url = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8639ad3483msh20a98731b0df228p122e30jsn407fab6cd286',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
};

const replacePronounsAndNameInJoke = (joke, name) => {
  // Replace "he" with "she", "his" with "her", and "Chuck Norris" with the given name
  return joke.replace(/\bhe\b/g, 'she')
             .replace(/\bhis\b/g, 'her')
             .replace(/Chuck Norris/g, name);
}

const getChuckNorrisJoke = () => {
  const yourName = "Central--cee";  // Replace this with your actual name
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const modifiedJoke = replacePronounsAndNameInJoke(data.value, yourName);
      jokeContainer.textContent = modifiedJoke;
    })
    .catch(error => console.error("Error fetching Chuck Norris joke:", error));
}

btn.addEventListener("click", getChuckNorrisJoke);
getChuckNorrisJoke(); // Display joke on page load








