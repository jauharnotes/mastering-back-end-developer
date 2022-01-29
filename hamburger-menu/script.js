const humbergerButtonMenu = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

humbergerButtonMenu.addEventListener("click", (event) => {
    drawerElement.classList.toggle("open");
    event.stopPropagation()
});


mainElement.addEventListener("click", (event) => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});