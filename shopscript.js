const storedUsername = sessionStorage.getItem('username');

if (storedUsername) {
    console.log('Welcome back, ' + storedUsername + '!');
} else {
    console.log('User not logged in.');
}

const storedId = sessionStorage.getItem('objectId');

if (storedId) {
    console.log(storedId);
} else {
    console.log('User not logged in.');
}
const storedPoints = sessionStorage.getItem('points');

if (storedPoints) {
    console.log(storedPoints);
} else {
    console.log('User no points.');
}
//remove above lines before submitting

// Fetch data from session storage
const username = sessionStorage.getItem('username');
const objectId = sessionStorage.getItem('objectId');
const points = sessionStorage.getItem('points');

// Display points on the page
document.getElementById('points-display').innerText = `Points: ${points}`;

// Initialize the cart array
let cart = [];

// Add item to the cart
function addToCart(itemId, itemName, itemCost) {
  cart.push({ id: itemId, name: itemName, cost: itemCost });
  console.log('Item added to cart:', cart);
}

// Redirect to the overview/checkout page with cart data
function viewCart() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}

// Display cart items on the overview page
function displayCart() {
  const cartItems = JSON.parse(sessionStorage.getItem('cart'));
  const cartContainer = document.getElementById('cart-items');

  if (cartItems && cartItems.length > 0) {
    cartItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerText = `${item.name} - ${item.cost}`;
      cartContainer.appendChild(itemDiv);
    });
  } else {
    cartContainer.innerText = 'Your cart is empty.';
  }
}

// Handle checkout logic
function checkout() {
  const cartItems = JSON.parse(sessionStorage.getItem('cart'));

  if (cartItems && cartItems.length > 0) {
    const totalCost = cartItems.reduce((total, item) => total + item.cost, 0);
    const currentPoints = parseInt(sessionStorage.getItem('points')) || 0;

    if (currentPoints < totalCost) {
      alert('Insufficient points. Add more points before checking out.');
      return;
    }

    const updatedPoints = Math.max(currentPoints - totalCost, 0);

    // Update points and redeemed items in restdb
    const apiUrl = `https://ipdatabase-b530.restdb.io/rest/userdatabase/${objectId}`;
    const redeemedItems = cartItems.map(item => item.name);

    const data = {
      points: updatedPoints,
      items: redeemedItems,
    };

    fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '65b74f425a960f46217795a7',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);

        // Optionally, reset the cart and update points in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify([]));
        sessionStorage.setItem('points', updatedPoints);

        // Display a success message
        alert(`Checkout successful! Points remaining: ${updatedPoints}`);
      })
      .catch(error => {
        console.error('Error during checkout:', error);
        alert('Error during checkout. Please try again.');
      });
  } else {
    alert('Your cart is empty. Add items before checking out.');
  }
}

// Call displayCart when the overview page loads
displayCart();

