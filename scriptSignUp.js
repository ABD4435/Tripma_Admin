//Password and Confirm Password Validation
let password = document.getElementById("passwordField");
let cnfPassword = document.getElementById("confirmPasswordField");
let errorPasswordMatch = document.getElementById("errorPasswordMatch");

//Validation of Password
function validatePassword(password, cnfPassword, errorPasswordMatch) {
  function checkPasswords() {
      if (password.value === "" && cnfPassword.value === "") {
          errorPasswordMatch.style.display = "none";
      } else if (password.value !== cnfPassword.value) {
          errorPasswordMatch.style.display = "block";
      } else {
          errorPasswordMatch.style.display = "none";
      }
  }

  password.addEventListener("input", checkPasswords);
  cnfPassword.addEventListener("input", checkPasswords);
}

function showPassword(password, confirmPassword) {
  showPasswordBtn.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
  });
}

//Getting Data
let form = document.querySelector("form");
let email = document.getElementById("eMail").value;
let pass = document.getElementById("passwordField").value;

//let errorRequired = document.getElementById("errorRequired");
validatePassword(password, cnfPassword, errorPasswordMatch);

//Show Password
let showPasswordBtn = document.getElementById("showPassword");
showPassword(password, cnfPassword);

/*form.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("eMail").value;
  let pass = document.getElementById("passwordField").value;
  console.log(email,pass);
});*/