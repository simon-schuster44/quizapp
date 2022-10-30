const cards = [
  {
    number: 1,
    question: "What is the color of grass?",
    answer: "Green",
    isBookmarked: false,
  },
  {
    number: 2,
    question: "What is the color of a banana?",
    answer: "Yellow",
    isBookmarked: false,
  },
  {
    number: 3,
    question: "What is the color of a red apple?",
    answer: "Red",
    isBookmarked: false,
  },
];

const queryMain = document.body.querySelector("main");
let counter = 0;

cards.forEach(element => {
  // create Elements
  function addOneCard() {
  const addDiv = document.createElement("div");
  const addh2 = document.createElement('h2');
  const addbutton = document.createElement('button');
  const addh3 = document.createElement('h3');
  const addI = document.createElement('i');
  const addUl = document.createElement('ul');
  const addLi1 = document.createElement('li');
  const addLi2 = document.createElement('li');
  const addLi3 = document.createElement('li');

  // add classes & js data
  addDiv.classList.add("card");
  addh2.classList.add("question");
  addbutton.classList.add("answer-button");
  addbutton.dataset.js = 'answer-button';
  addh3.classList.add("answer");
  // addh3.classList.add("hide");
  addh3.dataset.js = 'answer';
  addI.classList.add("fa-regular");
  addI.classList.add("fa-bookmark");
  addI.classList.add("fa-4x");
  addI.classList.add("bookmark");
  addI.dataset.js = 'bookmark';
  addUl.classList.add("categories");

  // set static text content
  addbutton.textContent = 'Show Answer';

  // set text content from object
  addh2.textContent = cards[counter].question;
  addh3.textContent = cards[counter].answer;

  // increase counter for array index
  counter = counter + 1;

  // add to HTML
  queryMain.append(addDiv);
  addDiv.append(addh2);
  addDiv.append(addbutton);
  addDiv.append(addh3);
  addDiv.append(addI);
  addDiv.append(addUl);
  addUl.append(addLi1);
  addUl.append(addLi2);
  addUl.append(addLi3);
  }

  addOneCard();


});
