let ele = document.getElementById("p");

console.log(ele.classList[0]);
console.log(ele.classList.contains("one"));
console.log(ele.classList.item("2"));
ele.onclick = function () {
  ele.classList.toggle("onde");
};
