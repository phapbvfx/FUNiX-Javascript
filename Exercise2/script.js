"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const section1 = document.getElementById("section--1");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;
  tabs.forEach((t, i) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((t, i) =>
    t.classList.remove("operations__content--active")
  );

  clicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

//Header Observer
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//Section Observer
const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// lazy loading images

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

//Slider
const slider = () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;
  const maxSlide = slides.length;
  const btnNext = document.querySelector(".slider__btn--right");
  const btnPrev = document.querySelector(".slider__btn--left");
  const dotsContainer = document.querySelector(".dots");

  const createDots = () => {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDOt = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      console.log(e.target);
      const { slide } = e.target.dataset;
      activeSlide(slide);
    }
  });

  const nexSlide = () => {
    if (currentSlideIndex === maxSlide - 1) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex++;
    }
    activeSlide(currentSlideIndex);
  };

  const preSlide = () => {
    if (currentSlideIndex === 0) {
      currentSlideIndex = maxSlide - 1;
    } else {
      currentSlideIndex--;
    }
    activeSlide(currentSlideIndex);
  };

  const goToSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  };
  btnNext.addEventListener("click", nexSlide);
  btnPrev.addEventListener("click", preSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
      nexSlide();
    } else if (e.key === "ArrowLeft") {
      preSlide();
    }
  });
  const activeSlide = (slide) => {
    activeDOt(slide);
    goToSlide(slide);
  };

  activeSlide(0);
  createDots();
};
slider();
