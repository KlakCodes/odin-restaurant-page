import '../styles/contact.css';

function contactPage() {
    const content = document.querySelector('#content');

    // Contact - Header
    const header = document.createElement('div');
    header.classList.toggle('contact-header');
    const headerTitle = document.createElement('h1')
    headerTitle.textContent = 'Contact Information';
    header.appendChild(headerTitle);

    content.appendChild(header);

    // Contact - Telephone
    const telHeader = document.createElement('h2');
    telHeader.classList.toggle('contact-subHeader');
    telHeader.textContent = 'Telephone'
    
    const telephone = document.createElement('p');
    telephone.textContent = 'Coming soon!';

    content.appendChild(telHeader);
    content.appendChild(telephone);

    // Contact - Email
    const emailHeader = document.createElement('h2');
    emailHeader.classList.toggle('contact-subHeader;');
    emailHeader.textContent = 'Email';

    const email = document.createElement('p');
    email.textContent = 'norse.roast@norsemail.com';

    content.appendChild(emailHeader);
    content.appendChild(email);
}

export default contactPage;