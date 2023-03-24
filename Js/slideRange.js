var srange = document.querySelectorAll(".srange"),
  svalue = document.querySelectorAll(".svalue");
(svalue[0].innerHTML = srange[0].value),
  (svalue[1].innerHTML = srange[1].value),
  (srange[0].oninput = function () {
    svalue[0].innerHTML = this.value;
  }),
  (srange[1].oninput = function () {
    svalue[1].innerHTML = this.value;
  });
