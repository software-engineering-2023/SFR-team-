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
  
      else if(username === correctUsername && password === correctPassword){
      console.log("sama");
      window.location.href= "/Users/samasamy/Desktop/git/SFR-team-/currency-exchange/goto.html";
      }
      else if(username === "sama" && password === "sama"){
        console.log("sama");
        window.location.href= "/Users/samasamy/Desktop/git/SFR-team-/currency-exchange/admin.html";
        }
      else if(username === "farah" && password === "rotana"){
          console.log("sama");
          window.location.href= "/Users/samasamy/Desktop/git/SFR-team-/currency-exchange/banker.html";
        }
        else  {
          console.log("roro");
        alert("Invalid username or password. Please try again.");
        
        }
}

function apply(){
    alert("Saved!");

}
function handleOptionChange() {
  var selectElement = document.getElementById("dropdown");
  var selectedOption = selectElement.value;
  
  // Clear previous content in the content div
  var contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Display different content based on the selected option
  switch (selectedOption) {
    case "option1":
      contentDiv.innerHTML = `
        <p> Enter Account Number and Amount:</p>
        <div class="form-do">
          <label for="account-number">Account Number</label>
          <input type="text" id="account-number" placeholder="Enter account number">
        </div>
        <div class="form-do">
        <label for="amount">Amount to be Paid</label>
        <input type="text" id="amount" placeholder="2000 EGP" readonly>
        </div>
        <button onclick="submitOption1()">Submit</button>`;
      break;
    case "option2":
      contentDiv.innerHTML = `
      <p>Enter Account Number:</p>
      <div class="form-do">
        <label for="account-number">Account Number</label>
        <input type="text" id="account-number" placeholder="Enter account number">
      </div>
      <div class="form-do">
        <label for="amount">Amount to be Paid</label>
        <input type="text" id="amount" placeholder="2000 EGP" readonly>
      </div>
      <button onclick="submitOption2()">Submit</button>`;
    break;
    case "option3":
      contentDiv.innerHTML = `
      <p>Enter Account Number:</p>
      <div class="form-do">
        <label for="account-number">Account Number</label>
        <input type="text" id="account-number" placeholder="Enter account number">
      </div>
      <div class="form-do">
        <label for="amount">Amount to be Paid</label>
        <input type="text" id="amount" placeholder="2000 EGP" readonly>
      </div>
      <button onclick="submitOption3()">Submit</button>`;
    break;
    case "option4":
      case "option4":
  contentDiv.innerHTML = `
    <p>Enter Telephone Number and Bank Account:</p>
    <div class="form-do">
      <label for="telephone-number">Telephone Number</label>
      <input type="text" id="telephone-number" placeholder="Enter telephone number">
    </div>
    <div class="form-do">
      <label for="bank-account">Bank Account</label>
      <input type="text" id="bank-account" placeholder="Enter bank account">
    </div>
    <div class="form-do">
      <label for="amount">Amount to be Paid</label>
      <input type="text" id="amount" placeholder="Enter amount">
    </div>
    <div class="form-do">
      <label for="telephone-company">Telephone Company</label>
      <select id="telephone-company">
        <option value="" disabled selected>Select a company</option>
        <option value="company1">Vodafone</option>
        <option value="company2">Etisilat</option>
        <option value="company3">Orange</option>
        <option value="company4">WE</option>
      </select>
    </div>
    <button onclick="submitOption4()">Submit</button>`;
  break;

    default:
      contentDiv.innerHTML = "<p>No option selected.</p>";
      break;
  }
}

function submitOption1() {
 
  alert("Water bill payed successfully!");
}
function submitOption2() {
 
  alert("Gas bill payed successfully!");
}
function submitOption3() {
 
  alert("Electricity bill payed successfully!");
}
function submitOption4() {
 
  alert("Telephone bill payed successfully!");
} 
function handleButtonClick() {
  var message = "Don't Forget your loan due date on 1/6/2023\nDon't forget your credit card payment\nDon't forget your credit card payment\nDon't forget your credit card payment\nDon't forget your credit card payment ";

  var transactions = message.split("\n\n");

  var popup = document.createElement("div");
  popup.classList.add("popup-message");

  var contentContainer = document.createElement("div");
  contentContainer.classList.add("popup-content");

  var closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", function() {
    popup.remove();
  });

  transactions.forEach(function(transaction) {
    var lines = transaction.split("\n");

    var transactionDetails = document.createElement("div");
    transactionDetails.classList.add("transaction-details");

    lines.forEach(function(line) {
      var lineElement = document.createElement("div");
      lineElement.textContent = line.replace(/:\s*/, ":\n");
      transactionDetails.appendChild(lineElement);
    });

    contentContainer.appendChild(transactionDetails);
  });

  popup.appendChild(contentContainer);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);
}

  // Your JavaScript code here
  
  

function toggleNotifications() {
  var dropdown = document.getElementById("notification-dropdown");
  dropdown.classList.toggle("show");
}
function toggleReminder() {
  var dropdown = document.getElementById("reminder-dropdown");
  dropdown.classList.toggle("show");
}
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  
  setTimeout(function() {
    closePopup();
  }, 5000); // Hide the popup after 5 seconds (adjust the duration as needed)
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
