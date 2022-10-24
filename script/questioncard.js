const answerButton = document.querySelector("[data-js='answer-button']");
const answer = document.querySelector("[data-js='answer']");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hide");
});
