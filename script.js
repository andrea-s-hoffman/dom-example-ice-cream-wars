"use strict";

const btnContainer = document.querySelector(".btn-container");
const vanillaBar = document.querySelector(".vanilla");
const strawberryBar = document.querySelector(".strawberry");
const chocolateBar = document.querySelector(".chocolate");

let strawberryVotes = 0;
let chocolateVotes = 0;
let vanillaVotes = 0;

const getPercentage = (flavorVotes) => {
  // takes a number
  // returns a string (with a %)
  let totalVotes = strawberryVotes + chocolateVotes + vanillaVotes;
  const percentage = `${((flavorVotes / totalVotes) * 100).toFixed()}%`;
  //   console.log(percentage);
  return percentage;
};

const updateBars = () => {
  // modifies html
  vanillaBar.style.width = getPercentage(vanillaVotes);
  strawberryBar.style.width = getPercentage(strawberryVotes);
  chocolateBar.style.width = getPercentage(chocolateVotes);
};

btnContainer.addEventListener("click", (e) => {
  // updates vote counts, then calls updateBars which calls getPercentage
  if (e.target.classList.contains("vanilla-btn")) {
    vanillaVotes++;
    updateBars();
  } else if (e.target.classList.contains("chocolate-btn")) {
    chocolateVotes++;
    updateBars();
  } else if (e.target.classList.contains("strawberry-btn")) {
    strawberryVotes++;
    updateBars();
  }
});
