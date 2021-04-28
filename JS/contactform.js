const form = document.querySelector(".contactForm");

const fname = document.querySelector("#fullName");
const fnameError = document.querySelector("#fullNameError"); 
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const messageText = document.querySelector("#textarea");
const messageTextError = document.querySelector("#textError");


const button = document.querySelector("#validate-btn");

console.log(button);

console.log(subject);


function validateForm() {
  event.preventDefault()




  if (checkLength(fname.value, 5) === true) {
    fnameError.style.display = "none";
    


  } else {
    fnameError.style.display = "block";


  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";


  }
  if (checkLength(subject.value) === 15) {
    subjectError.style.display = "none";
} else {
    subjectError.style.display = "block";


} 


  if (checkLength(messageText.value, 25) === true) {
    messageTextError.style.display = "none";


  } else {
    messageTextError.style.display = "block";
 
  }
  
 
}


form.addEventListener("submit", validateForm);



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


