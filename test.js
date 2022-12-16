function pr(us, age, pr, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h1>Hello ${us}</h1>`);
  document.write(`<p>age ${age}</p>`);
  document.write(`<p>sallare $${pr}</p>`);




  if (show === "Yes") {

    if (sk.length > 0) {
    document.write(`<p>${sk.join(" | ")}</p>`);
    }
    
     else{document.write( `<p>there no skills</p>`)};


  } else {document.write(`<p>do not show skills</p>`)};






  document.write(`</div>`);
}

pr("abdo", 19, 10, "Yes", "html ", "css " , "ad");
