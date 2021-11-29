import countdown from "./time.js"
import intervalo from "./fondos.js"

window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    header.classList.toggle("down", window.scrollY >= 600)
})


let nav = document.getElementById("header");

document.getElementById("menu-container").addEventListener("click", () => {
    nav.classList.toggle("prueba2");
})

nav.addEventListener("click", () => {
    nav.classList.remove("prueba2")
    let menubarra = document.getElementById("menu-container")
    menubarra.classList.remove("upclose")
})


document.getElementById("menu-container").addEventListener("click", function() {
     let menubarra = document.getElementById("menu-container")
    menubarra.classList.toggle("upclose")
})

window.addEventListener("scroll", function() {
    let menu = document.getElementById("menu-container");
    menu.classList.toggle("convertir", window.scrollY >= 509)
})

window.addEventListener("scroll", function() {
    let menu = document.getElementById("menu-container");
    menu.classList.toggle("fondoblanco", window.scrollY >= 4919)
})



window.sr = ScrollReveal();

sr.reveal('#about', {
    duration: 2000,
    origin: "right",
    distance: "-100%"
})

window.addEventListener("load", intervalo)