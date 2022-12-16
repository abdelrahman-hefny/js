function calc(...numbers) {
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i];
  }
  return a;
}
console.log(calc(10 , 20 ,4));

