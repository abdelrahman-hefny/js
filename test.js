let a = [1, 2, "ahmed", "khaled", "mohamed", "ana", 3];
let b = [];


for (let i = 0; i < a.length; i++) {
  if (typeof a[i] === typeof"String") {
     b.push(a[i]);
}
}

console.log(b);

