var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

let lastUserEmail = "";
let _password = ""; 

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}



function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var lastUserEmail = localStorage.getItem("lastEmail") || "No user yet!!"
  var _password = localStorage.getItem("lastPassword") || "No user yet!!"
  userEmailSpan.textContent = lastUserEmail
  userPasswordSpan.textContent = _password

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user

  localStorage.setItem("lastEmail", "lastUserEmail");
  localStorage.setItem("lastPassword", "_password");
  }
});
