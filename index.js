let active = document.querySelector(".active");
let cards = document.querySelectorAll(".card");
let container = document.querySelector(".contaienr");

cards.forEach(card => {
  card.addEventListener("click", e => {
    let active = document.querySelector(".active");
    active.classList.remove("active");
    card.classList.add("active");
  })
})