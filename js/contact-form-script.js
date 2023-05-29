function login() {
    // Get the values from the username and password input fieldswwedxz       
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
      window.location.href= "/Users/archfarahmacbook/Downloads/SFR-team-/currency-exchange/goto.html";
      }
      else if(username === "sama" && password === "sama"){
        console.log("sama");
        window.location.href= "/Users/archfarahmacbook/Downloads/SFR-team-/currency-exchange/admin.html";
        }
      else if(username === "farah" && password === "rotana"){
          console.log("sama");
          window.location.href= "/Users/archfarahmacbook/Downloads/SFR-team-/currency-exchange/banker.html"
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
  // Get the form element
var accountForm = document.getElementById('accountForm');

// Listen for form submission event
accountForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered account number
  var accountNumber = document.getElementById('accountNumber').value;

  // Call a function to fetch and display transactions based on the account number
  fetchTransactions(accountNumber);
});

// Function to fetch and display transactions
function fetchTransactions(accountNumber) {
  // Perform API request or database query to fetch transactions based on the account number

  // Simulating API request with sample transactions
  var transactions = [
    { id: 1, date: '2023-05-01', description: 'Deposit', amount: 1000 },
    { id: 2, date: '2023-05-02', description: 'Withdrawal', amount: -500 },
    { id: 3, date: '2023-05-05', description: 'Online Payment', amount: -200 },
    // Add more transactions as needed
  ];

  // Get the transaction list container
  var transactionList = document.getElementById('transactionList');

  // Clear previous transactions
  transactionList.innerHTML = '';

  // Create and append transaction elements to the list
  transactions.forEach(function(transaction) {
    var transactionItem = document.createElement('div');
    transactionItem.innerHTML = `
      <p><strong>Transaction ID:</strong> ${transaction.id}</p>
      <p><strong>Date:</strong> ${transaction.date}</p>
      <p><strong>Description:</strong> ${transaction.description}</p>
      <p><strong>Amount:</strong> ${transaction.amount}</p>
      <hr>
    `;
    transactionList.appendChild(transactionItem);
  });
}


  
  

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
function loanaccepted(){
  alert("accepted successfully!");
}

function loanrejected(){
  alert("rejected successfully!");
}
function confirmTransfer() {
  var confirmed = confirm("Are you sure you want to transfer the amount?");
  
  if (confirmed) {
    alert("Amount has been transferred!");
  }
}
function showConfirmationModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "block";
}

function closeModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  var successModal = document.getElementById("successModal");
  confirmationModal.style.display = "none";
  successModal.style.display = "none";
}

function transferAmount() {
  var successModal = document.getElementById("successModal");
  successModal.style.display = "block";
}
function toggleTransactions() {
  var transactionList = document.getElementById("transactionList");
  if (transactionList.style.display === "none") {
    // Show the transaction list
    transactionList.style.display = "block";
    // Generate or update the transaction items
    generateTransactionItems();
  } else {
    // Hide the transaction list
    transactionList.style.display = "none";
  }
}

function generateTransactionItems() {
  var transactionList = document.getElementById("transactionList");
  // Clear any existing transaction items
  transactionList.innerHTML = "";

  // Simulate fetching transaction data from an API or database
  var transactions = [
    { date: "May 25, 2023", merchant: "Online Store", amount: "$10.00", cardNumber: "XXXX-XXXX-XXXX-1234" },
    { date: "May 25, 2023", merchant: "Online Store", amount: "$50.00", cardNumber: "XXXX-XXXX-XXXX-1234" },
    { date: "May 25, 2023", merchant: "Online Store", amount: "$50.00", cardNumber: "XXXX-XXXX-XXXX-1234" },
    { date: "May 22, 2023", merchant: "ZARA", amount: "$60.00", cardNumber: "XXXX-XXXX-XXXX-1234" }
  ];

  // Generate the transaction items and append them to the list
  transactions.forEach(function(transaction) {
    var listItem = document.createElement("li");
    listItem.textContent = `Date: ${transaction.date}, Merchant: ${transaction.merchant}, Amount: ${transaction.amount}, Card Number: ${transaction.cardNumber}`;
    transactionList.appendChild(listItem);
  });
}
renderCalendar(year, month);

  setReminderBtn.addEventListener("click", function() {
    var reminderDateInput = document.getElementById("reminder-date");
    var reminderTimeInput = document.getElementById("reminder-time");

    var reminderDate = new Date(reminderDateInput.value);
    var reminderTime = new Date(reminderTimeInput.value);

    var reminderYear = reminderDate.getFullYear();
    var reminderMonth = reminderDate.getMonth();
    var reminderDay = reminderDate.getDate();
    var reminderHour = reminderTime.getHours();
    var reminderMinute = reminderTime.getMinutes();

    // Perform any actions with the reminder values (e.g., store in a database, show a notification, etc.)
    console.log("Reminder Set:");
    console.log("Year: ", reminderYear);
    console.log("Month: ", reminderMonth);
    console.log("Day: ", reminderDay);
    console.log("Hour: ", reminderHour);
    console.log("Minute: ", reminderMinute);
  });

  function renderCalendar(year, month) {
    // Calendar rendering code remains the same
    // ...
  }


document.addEventListener("DOMContentLoaded", function() {
  var setReminderBtn = document.getElementById("set-reminder-btn");

  setReminderBtn.addEventListener("click", function() {
    // Show an alert message
    alert("Reminder set!"); 
  });
});
function show(){
  alert("Reminder set!");
}
function confirmTransfer2() {
  var confirmed = confirm("Log Out?");
  
  
}
function showConfirmationModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "block";
}

function closeModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  var successModal = document.getElementById("successModal");
  confirmationModal.style.display = "none";
  successModal.style.display = "none";
}
function alertcheck() {
  // Get the value from the input field
  var announcement = document.getElementById("announcements").value;

  // Redirect to the same page
  window.location.href = window.location.href;

  // Display an alert message
  alert("Announcement posted: ");
}