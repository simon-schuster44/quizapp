import { cards } from "../database.js";
const questionCounter = document.querySelector('[data-js="question-counter"]');
questionCounter.textContent = cards.length;
