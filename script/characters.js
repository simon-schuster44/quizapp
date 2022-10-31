const questionElement = document.querySelector('[data-js="questionInput"]');
const answerElement = document.querySelector('[data-js="answerInput"]');

export const questionAmountLeft = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
export const answerAmountLeft = document.querySelector(
  '[data-js="answerAmountLeft"]'
);
export const questionMaxLength = questionElement.getAttribute("maxlength");
export const answerMaxLength = answerElement.getAttribute("maxlength");

const updateQuestionAmountLeft = (value) => {
  questionAmountLeft.innerText = value;
};
const updateAnswerAmountLeft = (value) => {
  answerAmountLeft.innerText = value;
};

updateQuestionAmountLeft(questionMaxLength);
updateAnswerAmountLeft(answerMaxLength);

questionElement.addEventListener("input", () => {
  updateQuestionAmountLeft(questionMaxLength - questionElement.value.length);
});
answerElement.addEventListener("input", () => {
  updateAnswerAmountLeft(answerMaxLength - answerElement.value.length);
});
// html für den Text unter dem Input Form

// <small class="form__character-count"
// >(<span data-js="amountLeft"></span> characters left)
// </small>
