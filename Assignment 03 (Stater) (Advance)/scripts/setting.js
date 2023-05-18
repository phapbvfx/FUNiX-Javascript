"use strict";

const selectOptEl = document.getElementById("input-category");
const inputPageSize = document.getElementById("input-page-size");

const submitSetting = document.getElementById("btn-submit");

selectOptEl.innerHTML += settingOptions
  .map((op) => `<option value="${op.value}">${op.label}</option>`)
  .join("");

submitSetting.addEventListener("click", () => {
  const newSetting = {
    pageSize: inputPageSize.value,
    category: selectOptEl.value,
  };
  userSetting = newSetting;
  saveToStorage(USER_SETTING, userSetting);
  window.location.href = "../pages/news.html";
});
