const overlay = document.querySelector('[data-js="overlay"]');
const form = document.querySelector('[data-js="form"]');
const button = document.querySelector('[data-js="button"]');
const inputQ = document.querySelector("#question");

function showOverlay() {
  overlay.classList.add("animate");
  setTimeout(hideOverlay, 3000);
}

function hideOverlay() {
  overlay.classList.remove("animate");
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  questions.push(data);
  console.log(questions);
  showOverlay();
  inputQ.focus();
});

const questions = [];
