let a = "I LOVE FOOOOD CODE VERY PLAYING MUCH";
let s = a.split(" ").filter(function (el) {
  return el.length <= 4;
}).join("  ");

console.log(s);
