const form = document.querySelector(".login-form");

function checkOnSubmit(event) {
  event.preventDefault();

  const {elements: {email, password}} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields need to be completed before you submit that form");
  }

  const resultOnSubmit = { email: email.value, password: password.value };
  console.log(resultOnSubmit);
  event.currentTarget.reset();
}
form.addEventListener("submit", checkOnSubmit);