const ValidateEmail = require("../../../../common/login/ValidateEmail");
const Message = require("../../../../common/messages/Message");

let emailField = document.getElementById("email-field");
let forgotButton = document.getElementById("forgot-button");

forgotButton.setAttribute("disabled", "true");

emailField.addEventListener("focusout", (ev) => {
  if (ValidateEmail(emailField.value)) {
    emailField.classList.remove("is-danger");
    forgotButton.removeAttribute("disabled");
  } else {
    Message("danger", "You must type your email.");
    emailField.classList.add("is-danger");
  }
});

forgotButton.addEventListener("click", async (ev) => {
  let userData = {};
  userData.email = emailField.value;
  emailField.value = "";
  let res = await fetch("/api/users/forgot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
  if (res.ok) {
    Message("success", "You'll receive a reset link in your email.");
  } else {
    Message("danger", "Email not found. Please try again.");
  }
  setTimeout(() => { window.location.href = "/"; }, 4000);
});
