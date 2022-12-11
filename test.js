let n1 = window.prompt("enter the first num");

let con = window.prompt("enter the operator");

let n2 = window.prompt("enter the scande num");
var er = "ادخل رقم صحيح";

if (con == "+") {
  document.write(+n1 + +n2);
}
else if (con == "+") {
  document.write(+n1 + +n2);
}
else if (con == "-") {
  document.write(+n1 - +n2);
}
else if (con == "*") {
  document.write(+n1 * +n2);
}
else if (con == "/") {
  document.write(+n1 / +n2);
}
else if (con == "%") {
  document.write(+n1 % +n2);
}
else if (con == "**") {
  document.write(n1 ** +n2);
}
else {document.write(er)};