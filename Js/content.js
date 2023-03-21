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
