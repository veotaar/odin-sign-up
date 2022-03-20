const passwordInputField = document.querySelector("#password");
const confirmPasswordField = document.querySelector('#confirm-password');
const passwordMatchText = document.querySelector("#password + span");

confirmPasswordField.addEventListener("keyup", function(e) {
  const pass = passwordInputField.value;
  const confirm = e.target.value;
  if (pass !== "" && confirm !== "" && pass === confirm) passwordMatchText.textContent = String.fromCharCode(160);
  else passwordMatchText.textContent = "* Paswords do not match";
})
