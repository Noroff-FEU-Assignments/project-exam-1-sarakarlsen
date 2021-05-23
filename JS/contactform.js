const form = document.querySelector(".contactForm");

const fname = document.querySelector("#fullName");
const fnameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messageText = document.querySelector("#textarea");
const messageTextError = document.querySelector("#textError");

const button = document.querySelector("button");

console.log(button);

console.log(subject);

let isFormValid = false;

function validateForm() {
  if (checkLength(fname.value, 5) === true) {
    fnameError.style.display = "none";
    isFormValid = true;
  } else {
    fnameError.style.display = "block";
    isFormValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    isFormValid = true;
  } else {
    emailError.style.display = "block";
    isFormValid = false;
  }
  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
    isFormValid = true;
  } else {
    subjectError.style.display = "block";
    isFormValid = false;
  }

  if (checkLength(messageText.value, 25) === true) {
    messageTextError.style.display = "none";
    isFormValid = true;
  } else {
    messageTextError.style.display = "block";
    isFormValid = false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  console.log("submit");
  if (isFormValid) {
    form.innerHTML = `<div class="container white-box"><h5>Thank you!</h5> Thank you for your message. We will get back to you as soon as possible.</div> `;
  }
});

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const someSigns = /\S+@\S+\.\S+/;
  const emailMatches = someSigns.test(email);
  return emailMatches;
}
