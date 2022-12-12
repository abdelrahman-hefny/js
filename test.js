

let m = "Manager";
let i = "it";
let ds = "desgin";
let dv = "dev";
let su = "support";
let salary = 0;
let job = ds;
switch (job) {
  case "Manager":
    console.log(8000);
    break;
  case "it" || "support":
    console.log(8000);
    break;
  case "dev" || "design":
    console.log(8000);
    break;
  default:
    console.log(4000);
}
