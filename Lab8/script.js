"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

let l = btnsOpenModal.length;

for (let i = 0; i < l; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", handleCloseModal);

overlay.addEventListener("click", handleCloseModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    handleCloseModal();
  }
});

function handleCloseModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
