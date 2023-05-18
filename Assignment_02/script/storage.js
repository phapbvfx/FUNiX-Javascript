"use strict";
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key, defaultData) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultData;
}
