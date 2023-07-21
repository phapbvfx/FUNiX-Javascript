"use strict";

// fake data
const fakeUserArr = [
  {
    firstName: "Hoang",
    lastName: "Dung",
    username: "HoangDung",
    password: "1234",
  },
  {
    firstName: "Quach",
    lastName: "Tinh",
    username: "QuachTinh",
    password: "1234",
  },
  {
    firstName: "Luu",
    lastName: "Dung",
    username: "TeTuong",
    password: "1234",
  },
  {
    firstName: "Hoang",
    lastName: "Thuong",
    username: "King",
    password: "1234",
  },
];

// setting option
const settingOptions = [
  { label: "General", value: "general" },
  { label: "Technology", value: "technology" },
  { label: "Science", value: "science" },
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Sports", value: "sports" },
];

// constant
const KEY = "USER_ARRAY";
const CURRENT_USER = "currentUser";
const TODO_ARRAY = "todoArr";
const USER_SETTING = "userSetting";

// Save an item to local storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get an item from local storage
function getFromStorage(key, defaultData) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultData;
}
// Remove item in local storage by key
function removeItem(key) {
  localStorage.removeItem(key);
}

// default user
let userArr = getFromStorage(KEY, []);

// default current user
let currentUser = getFromStorage(CURRENT_USER, {});

// default todo
let todoArr = getFromStorage(TODO_ARRAY, []);

// default setting
let userSetting = getFromStorage(USER_SETTING, {
  pageSize: 5,
  category: "general",
});

// Check an object empty
const isObjectEmpty = function (object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

// Handle next page
const handleNextPage = (currentPage, callback, pageNum) => {
  currentPage++;
  callback(currentPage);
  pageNum.innerText = currentPage;
};
// handle prev page
const handlePrevPage = (currentPage, callback, pageNum) => {
  currentPage--;
  callback(currentPage);
  pageNum.innerText = currentPage;
};

// render a post to html template
const renderPost = function (post) {
  return `<div class="card-container  flex-row flex-wrap">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${post.urlToImage}"
                    alt="${post.title}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      ${post.title}
                    </h5>
                    <p class="card-text">
                     ${post.description}
                    </p>
                    <a
                      href=" ${post.title}"
                      class="btn btn-primary"
                      >View</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>`;
};
