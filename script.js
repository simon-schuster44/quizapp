const home = document.querySelector('[data-js="home"]');


home.addEventListener('mousedown', ()=>{
    home.style.backgroundColor = "red";
});

home.addEventListener('mouseup', ()=>{
    home.style.backgroundColor = "";
});