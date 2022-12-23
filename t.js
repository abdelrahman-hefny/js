let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".exprin");

if (window.localStorage.getItem("color")) {
  //id yws
  exp.style.backgroundColor = window.localStorage.color;
  //
  //remove
  lis.forEach(function (li) {
    li.classList.remove("active");
  });
  //add
  document
    .querySelector(
      `[data-color=
      '${window.localStorage.color}']`
    )
    .classList.add("active");
}

lis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    //add to locala
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //cang back
    exp.style.backgroundColor = window.localStorage.color;
    //remove
    lis.forEach(function (li) {
      li.classList.remove("active");
      //add
      e.currentTarget.classList.add("active");
    });
  });
});

//////tow  
ps = document.querySelectorAll("p");
div = document.querySelector("div");

if (localStorage.getItem("color")) {
  div.style.backgroundColor = localStorage.getItem("color");
}

ps.forEach(function (p) {
  p.addEventListener("click", function (e) {
    // console.log(e.currentTarget.dataset.color)

    localStorage.setItem("color", e.currentTarget.dataset.color);
    div.style.backgroundColor = localStorage.getItem("color");
  });
});

// console.log(ps);

