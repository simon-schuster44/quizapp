/* bookmark switch picture */
const buttonBookmark = document.querySelector('[data-js=""]');

buttonBookmark.addEventListener('click', function() {
    if(buttonBookmark.src != "urspruenglichesBild") {
        buttonBookmark.src = "neuesBild";
    } else {
        buttonBookmark.src = "urspruenglichesBild";
    }
})