"use strict";

(async function () {
  // DOM selector
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");
  const container = document.getElementById("news-container");

  // init params variable
  let currentPage = 1;
  let totalPage;

  const initScreen = async function (page) {
    try {
      const res = await User.fetchData(
        "us",
        userSetting.category,
        userSetting.pageSize,
        page
      );

      totalPage = res.totalResults / 5;

      //Render articles to screen
      container.innerHTML = res.articles
        .map((post) => renderPost(post))
        .join("");

      //Check current page disable pre button
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

  initScreen(currentPage);

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
})();
