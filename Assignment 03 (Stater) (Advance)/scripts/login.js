"use strict";

const username = document.getElementById("input-username");
const password = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-submit");

const handleLogin = () => {
  const loginUser = userArr.find((user) => user.username === username.value);
  console.log(loginUser);
  console.log(userArr);
  if (username.value === "") {
    alert("Please enter username");
  }
  if (isObjectEmpty(loginUser)) {
    alert("username not exits");
    return;
  }
  if (!password.value === "") {
    alert("Please enter password");
  }
  if (!(loginUser.password === password.value)) {
    alert("Wrong password");
    return;
  }
  currentUser = loginUser;
  saveToStorage(CURRENT_USER, currentUser);
  window.location.href = "/";
};
btnLogin.addEventListener("click", handleLogin);
