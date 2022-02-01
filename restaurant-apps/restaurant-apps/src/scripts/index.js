import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');


const hamburgerMenu = document.querySelector("#hamburger-icon");

hamburgerMenu.addEventListener("click", (event) => {
    hamburgerMenu.classList.toggle("open")
})
