//885
const body = document.querySelector("body");
const dropDash = document.querySelector(".drop-dashes");
const dropDown = document.querySelector(".dropdown");
const dropDownCard = document.querySelector(".dropdown.card li");
const links = document.querySelectorAll(".dropdown li");
const login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up-form");
const loginForm = document.querySelector(".login-form");
const sign_up = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const logIn = document.querySelector(".log-in");

dropDash.addEventListener("click", (e) => {
  const target = e.target.parentNode;
  dropDown.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  if (dropDown.classList.contains("hide")) {
    // console.log("The dropdown is hidden");
  } else {
    if (
      e.target.classList.contains("item") ||
      e.target.classList.contains("item-link") ||
      e.target.classList.contains("dropdown")
    ) {
      dropDown.classList.add("hide");
    } else {
      dropDown.classList.remove("hide");
    }
  }

  // if (!login.classList.contains("hide")) {
  //   login.classList.add("hide");
  // }
});

login.addEventListener("click", (e) => {
  if (e.target.classList.contains("sign-up")) {
    signUp.classList.remove("hide");
    loginForm.classList.add("hide");
    sign_up.style.borderBottom = "2px solid var(--primary-500)";
    signIn.style.borderBottom = "none";
  } else if (e.target.classList.contains("sign-in")) {
    signUp.classList.add("hide");
    loginForm.classList.remove("hide");
    signIn.style.borderBottom = "2px solid var(--primary-500)";
    sign_up.style.borderBottom = "none";
  }

  if (e.target.classList.contains("close")) {
    login.classList.add("hide");
  }
});

logIn.addEventListener("click", (e) => {
  login.classList.toggle("hide");
});
