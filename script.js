//885
const body = document.querySelector("body");
const dropDash = document.querySelector(".drop-dashes");
const dropDown = document.querySelector(".dropdown");
const dropDownCard = document.querySelector(".dropdown.card li");
const links = document.querySelectorAll(".dropdown li");
// console.log(links);

dropDash.addEventListener("click", (e) => {
  const target = e.target.parentNode;
  dropDown.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (dropDown.classList.contains("hide")) {
    console.log("The dropdown is hidden");
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
  // if (
  //   e.target.classList.contains("item") ||
  //   e.target.classList.contains("item-link") ||
  //   e.target.classList.contains("dropdown")
  // ) {
  //   console.log("The dropdown");
  //   dropDown.classList.add("hide");
  // } else {
  //   console.log("Not the dropdown");
  //   dropDown.classList.remove("hide");
  // }
});
