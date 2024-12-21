"use strict";

// storing elements to use them later
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// when we do it like we used to do we only get the first class of the element we select
// const btnsOpenModal = document.querySelector(".show-modal");
// here's the similar one but not so different but it selects all element and it returns us the nodelist
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

// lets loop through the btnsOpenModal to demonstrate how it works and they work as if they re stored in array nodelists are similar to a array but not exactly
// for(let i = 0; i < btnsOpenModal.length; i++){
//   console.log(btnsOpenModal[i].textContent);
// }

// now attaching a event handler

// close modal related funnction
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// open modal
const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", modalOpen);
  // console.log("Button Clicked");
  // using new method called classList and for the record u can pass in multiple classes to the argument with commas and u do not use dot .
}
// DRY principle
btnCloseModal.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

// implementing esc keydown event
// testing our event
document.addEventListener("keydown", function (e) {
  // console.log("a key was pressed");
  // console.log(e);

  // testing to see if escape key works
  // if(e.key === "Escape") console.log("Esc was pressed down");
  // main functionality of implementing the esc logic
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
