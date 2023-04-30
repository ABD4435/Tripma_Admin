let showPasswordBtn = document.getElementById("showPassword")
let password = document.getElementById("passwordField");
showPasswordBtn.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});