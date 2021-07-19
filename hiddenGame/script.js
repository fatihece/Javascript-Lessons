const dice = document.querySelector(".dice"); // foto
const showButton = document.querySelector(".show") // button

// hidden foto
dice.classList.add("hidden");

// display foto

showButton.addEventListener("click", function () {
    dice.classList.remove("hidden")
})