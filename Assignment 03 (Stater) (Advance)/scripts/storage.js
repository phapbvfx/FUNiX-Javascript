"use strict";

const fakeUserArr = [
  {
    firstName: "Hoang",
    lastName: "Dung",
    username: "Hoang Dung",
    password: "1234",
  },
  {
    firstName: "Quach",
    lastName: "Tinh",
    username: "Quach Tinh",
    password: "1234",
  },
  {
    firstName: "Luu",
    lastName: "Dung",
    username: "Te Tuong",
    password: "1234",
  },
  {
    firstName: "Hoang",
    lastName: "Thuong",
    username: "King",
    password: "1234",
  },
];

const settingOptions = [
  { label: "General", value: "general" },
  { label: "Technology", value: "technology" },
  { label: "Science", value: "science" },
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Sports", value: "sports" },
];

const KEY = "USER_ARRAY";
const CURRENT_USER = "currentUser";
const TODO_ARRAY = "todoArr";
const USER_SETTING = "userSetting";

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key, defaultData) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultData;
}

function removeItem(key) {
  localStorage.removeItem(key);
}

let userArr = getFromStorage(KEY, []);

let currentUser = getFromStorage(CURRENT_USER, {});

let todoArr = getFromStorage(TODO_ARRAY, []);

let userSetting = getFromStorage(USER_SETTING, {
  pageSize: 5,
  category: "general",
});

const isObjectEmpty = function (object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
};
