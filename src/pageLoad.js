// src/pageLoad.js

function loadHomePage() {
    const content = document.getElementById('content');
  
    // Create a headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to My Awesome Restaurant!';
  
    // Create an image
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/500'; // Placeholder image
    img.alt = 'Restaurant Image';
  
    // Create a paragraph for description
    const description = document.createElement('p');
    description.textContent = 'Come and enjoy the best food in town! Our restaurant offers a variety of delicious dishes, cozy atmosphere, and excellent customer service. You won’t be disappointed!';
  
    // Append everything to the content div
    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(description);
  }
  
  export default loadHomePage;
  