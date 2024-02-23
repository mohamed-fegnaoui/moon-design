// SELECT ELEMENTS 
let stars = document.getElementById("stars") 
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");


// add event to the window 
window.addEventListener("scroll", function () {
    let value = scrollY;
    stars.style.left = `${value}px`;
    moon.style.top = `${value * 4}px`;
    mountain3.style.top = `${value * 1.5}px`;
    mountain4.style.top = `${value * 2}px`;
    river.style.top = `${value * 3}px`;
    boat.style.top = value + "px";
    boat.style.left = `${value * 3}px`;
    nouvil.style.fontSize = value + "px";
    if (scrollY >= 67) {
        nouvil.style.fontSize = 67 + "px";
    }
})





































    





















   


























