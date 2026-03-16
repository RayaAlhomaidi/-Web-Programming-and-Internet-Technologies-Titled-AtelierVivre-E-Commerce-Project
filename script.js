// Show the login form when the "Log In" link is clicked
document.getElementById('login-link').addEventListener('click', function () {
    document.getElementById('login-section').style.display = 'block';
  });
  
  // Close the login form
  function closeLoginForm() {
    document.getElementById('login-section').style.display = 'none';
  }
  
  // Handle login process
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const validUsername = 'user123';
    const validPassword = 'password123';
  
    if (username === validUsername && password === validPassword) {
      alert('Login successful!');
      localStorage.setItem('username', username);
      window.location.href = 'index.html';
    } else {
      document.getElementById('error-message').style.display = 'block';
    }
  });
  
  // Add to cart functionality
  function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
  
    document.getElementById('cart-icon').textContent ='🛒 (${cartCount})';
  }
  
  // Add to favorites functionality
  function addToFavorites() {
    let favoritesCount = parseInt(localStorage.getItem('favoritesCount') || '0');
    favoritesCount++;
    localStorage.setItem('favoritesCount', favoritesCount);
  
    document.getElementById('favorites-icon').textContent ='❤ (${favoritesCount})';
  }
  
  // Update cart and favorites on page load
  window.addEventListener('load', () => {
    const cartCount = parseInt(localStorage.getItem('cartCount') || '0');
    const favoritesCount = parseInt(localStorage.getItem('favoritesCount') || '0');
  
    document.getElementById('cart-icon').textContent =' 🛒 (${cartCount})';
    document.getElementById('favorites-icon').textContent = '❤ (${favoritesCount})';
  
    const username = localStorage.getItem('username');
    if (username) {
      // Use template literals for the welcome message
      document.getElementById('welcome-message').textContent = 'Welcome back, ${username}!';
      document.getElementById('welcome-container').style.display = 'block';
    }
  });
  
  // Log out functionality
  document.getElementById('logout-button').addEventListener('click', function () {
    localStorage.removeItem('username');
    window.location.href = 'login.html';
  });

  