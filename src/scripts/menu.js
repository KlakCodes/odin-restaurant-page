function menuPage() {
    const content = document.querySelector('#content');

    const testMenu = document.createElement('h1');
    testMenu.textContent = 'Menu';
    content.appendChild(testMenu);
}

export default menuPage;