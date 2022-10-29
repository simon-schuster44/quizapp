// Zusätzlich benötigt der Button data-js=answerbutton
// und das Antwrotendiv data-js=answer
// Wir benötigen für das Antworten DIV noch eine weitere Klasse "hide".
// .hide {
//    display: none;
//}

const answerbutton = document.querySelector('[data-js="answerbutton"]');
const answer = document.querySelector('[data-js="answer"]');

answerbutton.addEventListener("click", () => {
  answer.classList.toggle("hide");
});
