import { cards } from "../database.js";
const questionCounter = document.querySelector('[data-js="question-counter"]');
const bookmarkCounter = document.querySelector('[data-js="bookmark-counter"]');

questionCounter.textContent = cards.length;

bookmarkCounter.textContent = cards.filter((card) => {
  console.log(card.isBookmarked);
  return card.isBookmarked;
}).length;
