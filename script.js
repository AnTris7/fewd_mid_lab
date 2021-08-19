//Get the title for each dog/cat services, and put them into the console using console.log

console.log(
  "Dog Boarding, House Sitting, Dog Walking, Doggy Day Care, Drop In Visits"
);

//  Change the title of the page to "We're the CAT People", banner image

const pageTitle = document.querySelector(".main-text-1");
pageTitle.textContent = "We're the CAT People";

//change the main image to something cat-related:
const banner = document.querySelector(".hero-container ");
banner.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1493101561740-e745892775b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80')";

const subTitle = document.querySelector(".main-text-2");
pageTitle.style.color = "white";
subTitle.style.color = "white";

//replace the call to action button background with "red":
const bookBtn = document.querySelector(".sitters-btn");
const searchBtn = document.querySelector(".search-btn");
searchBtn.style.backgroundColor = "red";

bookBtn.style.backgroundColor = "red";

// When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"

bookBtn.addEventListener("click", function (e) {
  e.target.innerText = "Thanks!";
  e.target.style.width = "85%";
});

// make the responsive menu work
const menuButton = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("show-menu");
  mobileMenu.style.width = "100%";
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hide-menu");
  mobileMenu.classList.remove("show-menu");
  mobileMenu.style.width = "0";
});

//Implement a modal window

const signUp = document.querySelector("#signup1");
const overlay = document.querySelector(".bg-overlay");
const exitBtn = document.querySelector(".exit");

signUp.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  document.querySelector(".modal-box").classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  document.querySelector(".modal-box").classList.add("hidden");
});

exitBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  document.querySelector(".modal-box").classList.add("hidden");
});
