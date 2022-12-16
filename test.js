function show(a, b, c) {
 let z = typeof a === typeof "string"
    ? document.write(a)
    : typeof b === typeof "string"
    ? document.write(b)
    : typeof c === typeof "string"
    ? document.write(c)
    : "un";

   
  
 typeof a === 'number'  
    ? document.write(" " + a)
    :  typeof b === 'number' 
    ? document.write(" " + b)
    :  typeof c === 'number' 
    ? document.write(" " + c)
    : "un";





  a === true
    ? document.write(" av" )
    : b === true
    ? document.write(" av" )
    : c === true
    ? document.write(" av " )
    : document.write(" unAv ");
}

show("abdo", 17, true);
// show(17, "abdo", true);
// show(false, 17,  "abdo");
