const buyBtns = document.querySelectorAll(".js-btn");
const modal = document.querySelector(".js-modal");

const modalcontainer = document.querySelector(".js-modal-container");

function showBuyBtn() {
  modal.classList.add("open");
}

function hideBuyBtn() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyBtn);
}

modal.addEventListener("click", hideBuyBtn);

modalcontainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
