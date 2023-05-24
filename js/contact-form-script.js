function login() {
    // Get the values from the username and password input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Predefined correct username and password
   console.log(username);
   console.log(password);

   var correctUsername = "admin";
  var correctPassword = "admin";
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
      window.location.href= "/Users/samasamy/Desktop/currency-exchange/goto.html";
      }
}

function apply(){
    alert("Saved!");

}
function handleOptionChange() {
  var selectElement = document.getElementById("dropdown");
  var selectedOption = selectElement.value;
  
  // Clear previous content in the option-details div
  var optionDetailsDiv = document.getElementById("option-details");
  optionDetailsDiv.innerHTML = "";

  // Display different content based on the selected option
  switch (selectedOption) {
    case "Water":
      optionDetailsDiv.innerHTML = `
        <p>Option 1 selected. Enter Account Number and Amount:</p>
        <div class="form-do">
          <label for="account-number">Account Number</label>
          <input type="text" id="account-number" placeholder="Enter account number">
        </div>
        <div class="form-do">
          <label for="amount">Amount</label>
          <input type="text" id="amount" placeholder="Enter amount">
        </div>
        <button onclick="submitOption1()">Submit</button>
      `;
      break;
    case "Gas":
      optionDetailsDiv.innerHTML = "<p>Option 2 selected. Displaying content for Option 2.</p>";
      break;
    case "Electricity":
      optionDetailsDiv.innerHTML = "<p>Option 3 selected. Displaying content for Option 3.</p>";
      break;
    case "Telephone bills":
      optionDetailsDiv.innerHTML = "<p>Option 4 selected. Displaying content for Option 4.</p>";
      break;
    default:
      optionDetailsDiv.innerHTML = "<p>No option selected.</p>";
  }
}

function submitOption1() {
  var accountNumber = document.getElementById("account-number").value;
  var amount = document.getElementById("amount").value;

  // Perform actions with the entered account number and amount
  console.log("Account Number:", accountNumber);
  console.log("Amount:", amount);
}
