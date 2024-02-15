function registerUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Save registration data (you might want to use a backend for this in a real-world scenario)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    // Show login form and hide registration form
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
  
  function loginUser() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
  
    // Retrieve registration data
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    // Check if login credentials match registration data
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      // Display success message
      document.getElementById("login-form").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
      document.getElementById("message").innerText = "Login successful! Welcome, " + loginUsername + "!";
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  }
  