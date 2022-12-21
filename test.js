let a = setTimeout(po, 3000);
function po() {
  console.log(`abdo`);
}
console.log(a);
let btn = document.querySelector("button");

btn.onclick = function(){
    clearTimeout(a)
}