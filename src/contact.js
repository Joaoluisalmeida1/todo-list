// src/contact.js

function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const phone = document.createElement('p');
    phone.innerHTML = '📞 <span class="gold-text">Phone:</span> +1 (123) 456-7890';
  
    const address = document.createElement('p');
    address.innerHTML = '🏠 <span class="gold-text">Address:</span> 1234 Food Street, Flavor Town, USA';
  
    content.appendChild(headline);
    content.appendChild(phone);
    content.appendChild(address);
  }
  
  export default loadContact;
  