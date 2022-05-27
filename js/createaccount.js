const loginFacebook = document.querySelector(".login-fb");
const formAccount = document.querySelector(".form-account");

const inputEmail = document.querySelector("#accountEmail");
const emailError = document.querySelector("#loginEmailError");

const passwordGuide = document.querySelector("#accountPassword");
const length = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");

const loginBtn = document.querySelector("#loginSubmit");
const loginModal = document.querySelector("#loginModal");

formAccount.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();

  if (validEmail(inputEmail.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function validEmail(inputEmail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(inputEmail);
  return patternMatches;
}

passwordGuide.onkeyup = function () {
  if (passwordGuide.value.length >= 6 && passwordGuide.value.length <= 20) {
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
  }

  const lowerCaseLetters = /[a-z]/g;
  if (passwordGuide.value.match(lowerCaseLetters)) {
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
  }

  const upperCaseLetters = /[A-Z]/g;
  if (passwordGuide.value.match(upperCaseLetters)) {
    uppercase.classList.add("valid");
  } else {
    uppercase.classList.remove("valid");
  }

  const numbers = /[0-9]/g;
  if (passwordGuide.value.match(numbers)) {
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
  }
};

// loginBtn.onclick = function () {
//   loginModal.style.display = "block";
// };

// loginFacebook.onclick = function () {
//   loginModal.style.display = "block";
// };

// window.onclick = function () {
//   if (event.target === loginModal) {
//     loginModal.style.display = "none";
//   }
// };
