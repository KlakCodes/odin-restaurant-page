import '../styles/menu.css';

function menuPage() {
    const content = document.querySelector('#content');

    // Menu - Header
    const header = document.createElement('div');
    header.classList.toggle('menu-header');
    const headerTitle = document.createElement('h1')
    headerTitle.textContent = 'Menu';
    header.appendChild(headerTitle);

    content.appendChild(header);

    // Menu - Items
    const menuContainer = document.createElement('div');
    menuContainer.classList.toggle('menu-container');

    content.appendChild(menuContainer);

    const menuItems = ["Latte","Americano","Cappuccino","Macchiato","Flat White","Espresso", "Mocha", "Hot Chocolate"];
    menuItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.toggle('menu-item');
        itemCard.textContent = item;
        
        menuContainer.appendChild(itemCard);
    })
}

export default menuPage;