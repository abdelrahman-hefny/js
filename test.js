let pr = ["iphone", "ipad", "telphon", "mack", "labtob", "tv"];
let co = ["red", "black", "bleu"];
let count = 4;
document.write(`<h1>Show [ ${count} ] producte</h1>`);
for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<h3>${pr[i]}</h3>`);

  for (let j = 0; j < co.length; j++) {
    document.write(`<p>${co[j]}</p>`);
  }
  document.write(`</div>`);
  document.write(`<p>${co.join(" | ")}</p>`);
}
