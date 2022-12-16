function show(a, b, c) {
  typeof a === typeof "string"
    ? (a = a)
    : typeof b === typeof "string"
    ? (a = b)
    : typeof c === typeof "string"
    ? (a = c)
    : "un";
  document.write(a);

  typeof a === "number"
    ? document.write(" " + a)
    : typeof b === "number"
    ? document.write(" " + b)
    : typeof c === "number"
    ? document.write(" " + c)
    : "un";

  a === true
    ? document.write(" av")
    : b === true
    ? document.write(" av")
    : c === true
    ? document.write(" av ")
    : document.write(" unAv ");
}

show("abdo", 17, true);
// show(17, "abdo", true);
// show(false, 17,  "abdo");
