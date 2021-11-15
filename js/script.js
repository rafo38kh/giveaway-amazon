const buttons = document.querySelectorAll(".js-btn");
const bar = document.querySelector(".js-bar");
const circles = document.querySelectorAll(".js-circle");
const product = document.querySelector(".giveaway__product");
const overview = document.querySelector(".giveaway__overview");
const sectionOne = document.querySelector(".giveaway__section--one");
const sectionTwo = document.querySelector(".giveaway__section--two");
const sectionThree = document.querySelector(".giveaway__section--three");
const sectionFour = document.querySelector(".giveaway__section--four");
const sectionFive = document.querySelector(".giveaway__section--five");
const progressBar = document.querySelector(".giveaway__progress-wrapper");

const [
  selectBtn,
  sectionOneBtn,
  sectionTwoBtn,
  sectionThreeBtn,
  sectionFourBtn,
  sectionFiveBtn,
] = buttons;

let currentActive = 1;

const update = function () {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  bar.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

  currentActive > circles.length && (currentActive = circles.length);
};

selectBtn.addEventListener("click", () => {
  [product, overview].forEach((el) => el.classList.add("inactive"));
  [progressBar, sectionOne].forEach((el) => el.classList.remove("inactive"));
});

const setActiveState = function (sectionInactive, sectionActive) {
  currentActive++;
  sectionInactive.classList.add("inactive");
  sectionActive.classList.remove("inactive");
  sectionActive.classList.add("active--grid");
  update();
};

sectionOneBtn.addEventListener("click", () =>
  setActiveState(sectionOne, sectionTwo)
);
sectionTwoBtn.addEventListener("click", () =>
  setActiveState(sectionTwo, sectionThree)
);
sectionThreeBtn.addEventListener("click", () =>
  setActiveState(sectionThree, sectionFour)
);
sectionFourBtn.addEventListener("click", () =>
  setActiveState(sectionFour, sectionFive)
);

sectionFiveBtn.addEventListener("click", () => {
  currentActive = 1;
  window.location.reload();
});
