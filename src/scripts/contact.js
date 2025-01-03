import '../styles/contact.css';

function contactPage() {
    const content = document.querySelector('#content');

    const testContact = document.createElement('h1');
    testContact.textContent = 'Contact Information';
    content.appendChild(testContact);
}

export default contactPage;