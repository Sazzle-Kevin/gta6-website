

const flipCard = document.querySelector(".flip-card");
const openButton = document.querySelector(".character-button");
const closeButton = document.querySelector(".back-button");

openButton.addEventListener("click", () => {
    flipCard.classList.add("flipped");
});

closeButton.addEventListener("click", () => {
    flipCard.classList.remove("flipped");
});