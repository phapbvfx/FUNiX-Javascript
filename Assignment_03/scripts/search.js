"use strict";

const init = async function () {
  // DOM selector
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");
  const container = document.getElementById("news-container");
  const inputQuery = document.getElementById("input-query");
  const btnSubmitSearch = document.getElementById("btn-submit");

  // init params variable
  let currentPage = 1;
  let totalPage;

  btnSubmitSearch.addEventListener("click", () => {
    if (inputQuery.value === "") {
      alert("Please enter a keyword");
      return;
    }
    initScreen(currentPage);
  });

  const initScreen = async function (page) {
    try {
      const res = await User.searchAnyThing(
        inputQuery.value,
        userSetting.pageSize,
        currentPage
      );
      console.log(res);

      totalPage = res.totalResults / 5;

      //Render articles to screen
      container.innerHTML = res.articles
        .map((post) => renderPost(post))
        .join("");

      //Check current page disable prev button
      if (currentPage === 1) {
        btnPrev.disabled = true;
        btnPrev.style.opacity = 0.5;
      } else {
        btnPrev.disabled = false;
        btnPrev.style.opacity = 1;
      }

      //Check current page disable next button
      if (currentPage === totalPage) {
        btnNext.disabled = true;
        btnNext.style.opacity = 0.5;
      } else {
        btnNext.disabled = false;
        btnNext.style.opacity = 1;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle next page
  btnNext.addEventListener("click", () => {
    currentPage++;
    initScreen(currentPage);
    pageNum.innerText = currentPage;
  });
  // handle prev page
  btnPrev.addEventListener("click", () => {
    currentPage--;
    initScreen(currentPage);
    pageNum.innerText = currentPage;
  });
};
init();
