let a = ["Ahmed", "mazero", "elham", "osama", "gamal", "ameer"];

console.log(a.slice(0, 4).reverse());

a.slice(1, 3).reverse();
let b = a[1].slice(0, 2);
b = "El";
let d = a[1].slice(2, 6);
console.log(b + d);


console.log(a[1].slice(4, 5) + a[1].slice(5).toUpperCase());

