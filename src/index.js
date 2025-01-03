import "./styles.css";
import homePage from './scripts/home';
import menuPage from './scripts/menu';
import contactPage from './scripts/contact';

homePage();

const homeNav = document.querySelector('#homeNav');
const menuNav = document.querySelector('#menuNav');
const contactNav = document.querySelector('#contactNav');

homeNav.addEventListener('click', () => {
    clearContent();
    homePage();
})

menuNav.addEventListener('click', () => {
    clearContent();
    menuPage();
})

contactNav.addEventListener('click', () => {
    clearContent();
    contactPage();
})

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}
