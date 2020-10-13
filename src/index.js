import router from "./routes";
import menu from "./template-parts/menu";
import BurguerMenu from "./js/BurguerMenu";
import ContactForm from "./js/ContactForm";
import contact from "./pages/contact";
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('hashchange', closeBurguer);
let burguerMenu;

async function loadMenu(){
    const idMenu = document.getElementById('menu');
    const idContact = document.getElementById('contact');

    idMenu.innerHTML = await menu();
    idContact.innerHTML = await contact();

    burguerMenu = new BurguerMenu();
    const contactForm = new ContactForm();
}

function closeBurguer() {
    burguerMenu.closeBurguer();
}

loadMenu();



