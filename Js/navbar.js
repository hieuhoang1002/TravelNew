window.onscroll = function () {
  scrollFunction();
  scrollItemFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
// ================================================================
function scrollItemFunction() {
  if (
    document.body.scrollTop > 440 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("scrollItem").style.opacity = "1";
  } else {
    document.getElementById("scrollItem").style.opacity = "0";
  }
}
// ================================================================

// ================================================================
const scrollItem = document.getElementById("scrollItem");
scrollItem.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: `smooth`,
  });
});
