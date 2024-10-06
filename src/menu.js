// src/menu.js

function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
  
    const menuList = document.createElement('ul');
    menuList.style.listStyle = 'none';  // Remove default bullets
    menuList.style.padding = '0';
  
    const items = ['🍕 Pizza', '🍝 Pasta', '🥗 Salad', '🍮 Dessert'];
  
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      listItem.style.fontSize = '24px';
      listItem.style.margin = '10px 0';
      menuList.appendChild(listItem);
    });
  
    content.appendChild(headline);
    content.appendChild(menuList);
  }
  
  export default loadMenu;
  