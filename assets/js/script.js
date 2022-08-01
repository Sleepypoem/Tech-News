const boton = document.getElementById("button");
const navlist = document.getElementById("nav-list");

boton.addEventListener("click", () => {
    navlist.classList.toggle("show");
});