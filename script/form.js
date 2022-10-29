const overlay = document.querySelector('[data-js="overlay"]');
const form = document.querySelector('[data-js="form"]');
const button = document.querySelector('[data-js="button"]');
const inputQ = document.querySelector("#question");
const questionCards = [];

function showOverlay() {
  overlay.classList.add("animate");
  setTimeout(hideOverlay, 3000);
}

function hideOverlay() {
  overlay.classList.remove("animate");
  inputQ.focus();
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const newQuestion = Object.assign(
    {
      number: questionCards.length,
    },
    data,
    { isBookmarked: false }
  );
  questionCards.push(newQuestion);
  console.log(questionCards);
  showOverlay();

  for (const quest in questionCards) {
    console.log(questionCards[quest].question);
    let card = document.createElement("div");
    card.classList.add("card");
    card.textContent = questionCards[quest].question;
    document.body.appendChild(card);
  }
});
