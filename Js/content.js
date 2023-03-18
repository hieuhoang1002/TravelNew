// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const descs = $$(".listContent__list--desc");
// const contents = $$(".listContent__list--content");
// const icons = $$(".listContent__list--icon");

// const descActive = $(".listContent__list--desc.active");

// descs.forEach((desc, index) => {
//   const content = contents[index];
//   const icon = icons[index];

//   desc.onclick = function () {
//     // $(".listContent__list--desc.active").classList.remove("active");
//     // $(".listContent__list--content.active").classList.remove("active");
//     $(".listContent__list--icon.active").classList.remove("active");
//     $(this).next().slideToggle(300);
//     // this.classList.add("active");
//     // content.classList.add("active");
//     $(this).siblings().children(".listContent__list--content").sideUp(300);
//     icon.classList.add("active");
//   };
// });

$(".listContent__list .listContent__list--desc").click(function () {
  $(this).next().slideToggle(300);
  $(this).addClass("active");
  $(".listContent__list--desc")
    .not($(this).parent(".listContent__list"))
    .removeClass("active");
});
$(".listContent .listContent__list").click(function () {
  $(this).siblings().children(".listContent__list--content").slideUp(300);
});
$(".listContent2 .listContent__list").click(function () {
  $(this).siblings().children(".listContent__list--content").slideUp(300);
});
