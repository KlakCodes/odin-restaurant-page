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

    // Divider
    const divider1 = document.createElement('hr');
    content.appendChild(divider1);

    // Contact - Telephone
    const telHeader = document.createElement('h2');
    telHeader.classList.toggle('contact-subHeader');
    telHeader.textContent = 'Telephone'
    
    const telephone = document.createElement('p');
    telephone.classList.toggle('contact-telephone');
    telephone.textContent = 'Coming soon!';

    content.appendChild(telHeader);
    content.appendChild(telephone);

    // Contact - Email
    const emailHeader = document.createElement('h2');
    emailHeader.classList.toggle('contact-subHeader;');
    emailHeader.textContent = 'Email';

    const email = document.createElement('p');
    email.classList.toggle('contact-email');
    email.textContent = 'norse.roast@norsemail.com';

    content.appendChild(emailHeader);
    content.appendChild(email);

    // Divider
    const divider2 = document.createElement('hr');
    content.appendChild(divider2);

    // Contact - Footer
    const footer = document.createElement('div');
    footer.classList.toggle('contact-footer');
    const bean = document.createElement('image');
    bean.classList.toggle('bean');
    footer.appendChild(bean);

    content.appendChild(footer);
}

export default contactPage;