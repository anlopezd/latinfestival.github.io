
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    header.classList.toggle("down", window.scrollY >= 600)
})
