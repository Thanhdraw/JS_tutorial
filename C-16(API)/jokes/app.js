// https://icanhazdadjoke.com/

const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const endPoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endPoint);
  const data = await response.json();
}
