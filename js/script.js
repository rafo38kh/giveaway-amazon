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
const readMore = document.querySelector(".js-read-more");

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
  [product, overview].forEach((el) => el.classList.add("inactive-section"));
  [progressBar, sectionOne].forEach((el) =>
    el.classList.remove("inactive-section")
  );
});

const setActiveState = function (
  sectionInactive,
  sectionActive,
  className = "active-section"
) {
  currentActive++;
  sectionInactive.classList.add("inactive-section");
  sectionActive.classList.remove("inactive-section");
  sectionActive.classList.add(className);
  update();
};

sectionOneBtn.addEventListener("click", () =>
  setActiveState(sectionOne, sectionTwo)
);
sectionTwoBtn.addEventListener("click", () =>
  setActiveState(sectionTwo, sectionThree, "grid-active")
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

readMore.addEventListener("click", (e) => {
  const html = `
  <h4 class="giveaway__question">Key Ingredients</h4>
  <p class="giveaway__answer">
  Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s barrier,
  improve its resiliency, and balance and retain skin’s moisture levels.
  Hyaluronic acid acts as a natural moisture magnet/humectant.
  </p>

<p class="giveaway__price">
<s>us$25.89</s>
<span class="giveaway__price-span">$0.00 FREE</span>
</p>

<button class="giveaway__btn js-btn" type="button">Select</button>

<img
src="./images/svg/amazon_prime_logo.png"
alt=""
aria-hidden="true"
class="giveaway__amazon-prime"
/>`;

  e.target.insertAdjacentHTML("beforebegin", html);
  e.target.remove();
});
