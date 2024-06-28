/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //let submitBtn = document.getElementById("formSubmit");
  // submitBtn.addEventListener("click", function(e) {
  // e.preventDefault();
  // });

  console.log("Hello Rigo from the console!");
};
let submitBtn = document.getElementById("formSubmit");
submitBtn.addEventListener("click", checkValid);
function checkValid() {
  let alert = document.getElementById("blankForm");
  let submitBtn = document.getElementById("formSubmit");
  let card = document.querySelector("#cardNum");
  let cvc = document.getElementById("cvcNum");
  let amount = document.getElementById("amount");
  let fn = document.getElementById("fn");
  let ln = document.getElementById("ln");
  let city = document.getElementById("city");
  let states = document.getElementById("stateSelect");
  let zip = document.getElementById("zipCode");
  let message = document.getElementById("message");

  if (card.value != 2) {
    alert.classList.remove("d-none");
  }
}
