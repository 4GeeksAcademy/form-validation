/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let submitBtn = document.getElementById("formSubmit");
window.onload = function() {
  console.log("Hello Rigo from the console!");
  submitBtn.addEventListener("click", checkValid);
};
function checkValid() {
  let alert = document.getElementById("blankForm");
  let card = document.getElementById("cardNum");

  if (card.value != 16) {
    alert.classList.remove("d-none");
  }
}
