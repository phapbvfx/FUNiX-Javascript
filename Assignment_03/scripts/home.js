"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");

const wcMsg = document.getElementById("welcome-message");

const btnLogout = document.getElementById("btn-logout");

const initPage = function () {
  // Check user isLogin and display html
  if (!isLogin(currentUser)) {
    mainContent.classList.remove("d-none");
    wcMsg.textContent = `Welcome, ${currentUser.firstName}`;
    loginModal.classList.add("d-none");
  } else {
    mainContent.classList.add("d-none");
    loginModal.classList.remove("d-none");
  }
  btnLogout.addEventListener("click", () => {
    removeItem(CURRENT_USER);
    window.location.href = "../pages/login.html";
  });
};

const isLogin = function (currentUser) {
  return isObjectEmpty(currentUser);
};

initPage();
