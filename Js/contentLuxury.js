const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const descs = $$(".listContent__list--desc");
const contents = $$(".listContent__list--content");
const icons = $$(".listContent__list--icon");

const descActive = $(".listContent__list--desc.active");

descs.forEach((desc, index) => {
  const content = contents[index];
  // const icon = icons[index];

  desc.onclick = function () {
    $(".listContent__list--desc.active").classList.remove("active");
    $(".listContent__list--content.active").classList.remove("active");
    // $(".listContent__list--icon.active").classList.remove("active");
    this.classList.add("active");
    content.classList.add("active");
    // icon.classList.add("active");
  };
});
