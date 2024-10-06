// src/home.js

function loadHome() {
    const content = document.getElementById('content');
  
    // Clear any existing content
    content.textContent = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Not just food, but an experience.';
  
    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1672636402078-4b957a572e4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Placeholder image
    img.alt = 'Restaurant Image';
  
    const description = document.createElement('p');
    description.textContent = 'Come and enjoy the best food in town! Our restaurant offers a variety of delicious dishes, cozy atmosphere, and excellent customer service. You won’t be disappointed!';
  
    // Append to content
    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(description);
  }
  
  export default loadHome;
  