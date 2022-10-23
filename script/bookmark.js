/* bookmark switch picture */
const buttonBookmark = document.querySelector('[data-js="bookmark"]');


buttonBookmark.addEventListener('click', function() {

if(buttonBookmark.classList.contains("fa-regular") == true) {
    buttonBookmark.classList.remove("fa-regular");
    buttonBookmark.classList.add("fa-solid");
} else {
    buttonBookmark.classList.remove("fa-solid");
    buttonBookmark.classList.add("fa-regular");
}
})



