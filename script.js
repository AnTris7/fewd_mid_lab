//Get the title for each dog/cat services, and put them into the console using console.log

console.log(
  "Dog Boarding, House Sitting, Dog Walking, Doggy Day Care, Drop In Visits"
);

//  Change the title of the page to "We're the CAT People", banner image
const banner = document.querySelector(".hero-container ");
const pageTitle = document.querySelector(".main-text-1");
const subTitle = document.querySelector(".main-text-2");

const changeImage = function (e) {
  e.target.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1493101561740-e745892775b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80')";
  pageTitle.textContent = "We're the CAT People";
  pageTitle.style.color = "white";
  subTitle.style.color = "white";
};

banner.addEventListener("mouseover", changeImage);

// When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
const bookBtn = document.querySelector(".sitters-btn");

bookBtn.addEventListener("click", function (e) {
  e.target.innerText = "Thanks!";
  e.target.style.width = "85%";
  e.target.style.backgroundColor = "red";
});

//

//Implement a modal window

const signUp = document.querySelector("#signup");
const overlay = document.querySelector(".bg-overlay");

signUp.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  document.querySelector(".modal-box").classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  document.querySelector(".modal-box").classList.add("hidden");
});
