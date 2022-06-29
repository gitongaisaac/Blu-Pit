//885
const body = document.querySelector("body");
const dropDash = document.querySelector(".drop-dashes");
const dropDown = document.querySelector(".dropdown");
const dropDownCard = document.querySelector(".dropdown.card li");

dropDash.addEventListener("click", (e) => {
  const target = e.target.parentNode;
  console.log(target);
  dropDown.classList.toggle("hide");

  // mouseleave
  document.addEventListener("click", (e) => {
    if (e.target !== dropDash) {
      console.log("The target is not the drop down");
      // dropDown.classList.add("hide");
    }
  });
});
