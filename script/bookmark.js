/* bookmark switch picture */
const buttonBookmark = document.querySelector('[data-js="bookmark"]');

buttonBookmark.addEventListener("click", function () {
  if (buttonBookmark.classList.contains("fa-regular") == true) {
    buttonBookmark.classList.remove("fa-regular");
    buttonBookmark.classList.add("fa-solid");
  } else {
    buttonBookmark.classList.remove("fa-solid");
    buttonBookmark.classList.add("fa-regular");
  }
});

//Habe hier zwei Zeilen Code hinzugefügt. Die Cards werden später wahrscheinlich wie
//Objekte gehandhabt, sodass wir hier mit den Keys und Values arbeiten können.
//Folglich sollte es ausreichen, wenn wir den Button klicken und das solid
//Symbol gesetzt wird, dass im gleichen Zuge auch der Value isBookmarked auf true
//gesetzt wird und beim erneuten clicken auf false?

/*/* bookmark switch picture */
/*
const buttonBookmark = document.querySelector('[data-js="bookmark"]');
const card = document.querySelector('[data-js=card]');


buttonBookmark.addEventListener('click', function() {

if(buttonBookmark.classList.contains("fa-regular") == true) {
    buttonBookmark.classList.remove("fa-regular");
    buttonBookmark.classList.add("fa-solid");
    card.isBookmarked = true;

} else {
    buttonBookmark.classList.remove("fa-solid");
    buttonBookmark.classList.add("fa-regular");
    card.isBookmarked = false;
}
})
*/
