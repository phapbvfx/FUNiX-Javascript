"use strict";
const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");
const comfirmPassword = document.getElementById("input-password-confirm");

const btnSubmit = document.getElementById("btn-submit");

const hanleRegister = () => {
  const user = new User(
    firstName.value,
    lastName.value,
    username.value,
    password.value
  );
  const isValid = validateData(user);
  if (isValid) {
    userArr.push(parseUser(user));
    saveToStorage(KEY, userArr);
    clearInput();
    window.location.href = "../pages/login.html";
  }
};
btnSubmit.addEventListener("click", hanleRegister);
const parseUser = (userData) => {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );
  return user;
};

const clearInput = () => {
  firstName.value = "";
  lastName.value = "";
  username.value = "";
  password.value = "";
  comfirmPassword.value = "";
};
const validateData = (newUser) => {
  //Check empty and send an alert to customer
  for (const key in newUser) {
    if (newUser[key] === "") {
      alert(`Please input ${key}`);
      return false;
    }
  }

  //validate unique username
  if (userArr.some((user) => user.username === newUser.username)) {
    alert("Username must be unique!");
    return false;
  }
  //validate confirm password
  if (!(newUser.password.length > 8)) {
    alert("Password length must greater then 8");
    return false;
  }
  //validate confirm password
  if (!(newUser.password === comfirmPassword.value)) {
    alert("Wrong password confirm");
    return false;
  }

  return true;
};
