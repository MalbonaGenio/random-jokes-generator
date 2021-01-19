//get the elemetnts we are going to use
const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

punchlineBtn.addEventListener("click", getPunchLine);

//event listener to show the punchline. Also toogle the classes in the buttons so we see the new joke one.
function getPunchLine() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add("bubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

newJokeBtn.addEventListener("click", getJoke);

//fecth data from the jokes API
async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();
  // Get the setup from the joke and insert it into the  element. We only have one object in the array so we access by just [0]
  setupDiv.innerHTML = joke[0].setup;
  punchline = joke[0].punchline;

  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("bubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
