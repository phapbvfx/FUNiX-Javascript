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
  return `<div class="card flex-row flex-wrap">
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
