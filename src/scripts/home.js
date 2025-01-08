import '../styles/home.css';

function homePage() {
    const content = document.querySelector('#content');

    // Home - Header
    const header = document.createElement('div');
    header.classList.toggle('home-header');
    const headerTitle = document.createElement('h1')
    headerTitle.textContent = 'Norse Roast';
    header.appendChild(headerTitle);

    content.appendChild(header);

    // Home - About
    const about = document.createElement('div');
    about.classList.toggle('home-about');
    about.textContent = 'Welcome to Norse Roast - Home to the best coffee in the nine realms!';

    content.appendChild(about);

    // Divider
    const divider1 = document.createElement('hr');
    content.appendChild(divider1);

    // Home - Opening Hours
    const openingHours = document.createElement('div');
    openingHours.classList.toggle('home-hours');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Opening Hours';
    openingHours.appendChild(hoursTitle);

    const hoursList = document.createElement('ul');
    const mon = document.createElement('li');
    mon.textContent = 'Monday: 8:00am - 8:00pm';
    hoursList.appendChild(mon);

    const tue = document.createElement('li');
    tue.textContent = 'Tuesday: 8:00am - 8:00pm';
    hoursList.appendChild(tue);

    const wed = document.createElement('li');
    wed.textContent = 'Wednesday: 8:00am - 8:00pm';
    hoursList.appendChild(wed);

    const thu = document.createElement('li');
    thu.textContent = 'Thursday: 8:00am - 8:00pm';
    hoursList.appendChild(thu);

    const fri = document.createElement('li');
    fri.textContent = 'Friday: 8:00am - 8:00pm';
    hoursList.appendChild(fri);

    const sat = document.createElement('li');
    sat.textContent = 'Saturday: 8:00am - 10:00pm';
    hoursList.appendChild(sat);

    const sun = document.createElement('li');
    sun.textContent = 'Sunday: 10:00am - 4:30pm';
    hoursList.appendChild(sun);

    openingHours.appendChild(hoursList);

    content.appendChild(openingHours);
    
    // Divider
    const divider2 = document.createElement('hr');
    content.appendChild(divider2);

    // Home - Location
    const location = document.createElement('div');
    location.classList.toggle('home-location');
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    location.appendChild(locationTitle);
    const locationAddress = document.createElement('p');
    locationAddress.textContent = 'Address 1, Address 2, Adress 3, Address 4';
    location.appendChild(locationAddress);

    content.appendChild(location);

    // Divider
    const divider3 = document.createElement('hr');
    content.appendChild(divider3);

    // Home - Footer
    const footer = document.createElement('div');
    footer.classList.toggle('home-footer');
    const bean = document.createElement('image');
    bean.classList.toggle('bean');
    footer.appendChild(bean);

    content.appendChild(footer);
}

export default homePage;