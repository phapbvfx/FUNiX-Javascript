"use strict";
// html selector
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-submit");

const handleLogin = () => {
  const loginUser = userArr.find((user) => user.username === username.value);

  // Validate username
  if (username.value === "") {
    alert("Please enter username");
    return;
  }
  // Check user exits
  if (!loginUser) {
    alert("username not exits");
    return;
  }
  // Validate password
  if (!password.value === "") {
    alert("Please enter password");
    return;
  }
  // check password
  if (!(loginUser.password === password.value)) {
    alert("Wrong password");
    return;
  }
  currentUser = loginUser;
  saveToStorage(CURRENT_USER, currentUser);
  window.location.href = "/";
};
btnLogin.addEventListener("click", handleLogin);
