function login() {
    // Get the values from the username and password input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("Password").value;
  
    // Predefined correct username and password
   console.log(username);
   console.log(password);

   var correctUsername = "admin";
  var correctPassword = "password123";
    // Check if both username and password are not empty and match the correct credentials
    if (username === "" && password === "" ){
        console.log("farah");
      alert("Invalid username or password. Please try again.");
    
  }
    else if(username !== correctUsername && password !== correctPassword) {
        console.log("roro");
      alert("Invalid username or password. Please try again.");
      
      }
      else if(username === correctUsername && password === correctPassword){
      console.log("sama");
      window.location.href= "/Users/samasamy/Desktop/currency-exchange/home.html";
      }
}