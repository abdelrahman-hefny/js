let mys = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,z";

let solutoin = mys
  .split("")
  .map((ele) => (ele !== "," ? ele : ""))
  .map((ele) => (ele !== "_" ? ele : " "))
  .filter((ele) => isNaN(parseInt(ele)))
  .reduce((acc, carnt) => acc + carnt)
  .slice(true, -isNaN(mys));

// solutoin[solutoin.length - 1] = "";
// solutoin[3] = "";

console.log(solutoin);
