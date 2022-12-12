let n = "ahmed";
let theGander = "mail";
let thege = 30;

if (theGander === "mail") {
  console.log("Mr");
} else {
  console.log("Ms");
}

let g = theGander === "mail" ? "Mr" : "Ms";

let a =
  thege < 20
    ? ">20"
    : thege > 20 && thege < 60
    ? "30 - 60"
    : thege > "60"
    ? ">60"
    : "unwen";

    console.log(`Hello ${g } ${n} ${a}`);