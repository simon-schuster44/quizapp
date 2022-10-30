import { cards } from "../database.js";
import { addCards } from "../database.js";

const overlay = document.querySelector('[data-js="overlay"]');
const form = document.querySelector('[data-js="form"]');
const inputQ = document.querySelector("#question");
const answerbuttons = document.querySelector('[data-js="answer-button"]');

function showOverlay() {
  overlay.classList.add("animate");
  setTimeout(hideOverlay, 3000);
}

function hideOverlay() {
  overlay.classList.remove("animate");
  //inputQ.focus();
}
addCards();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const newQuestion = Object.assign(
    {
      number: cards.length,
    },
    data,
    { isBookmarked: false }
  );
  cards.push(newQuestion);
  form.reset();
  addCards();
  showOverlay();
});
