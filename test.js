let a = [-1, 10, -49, 309, -498];
let as = a.map(function (num) {
  return num === -num ? +num : -num;
});
console.log(as);
