// Select the body element
const body = document.querySelector("body");

// Create a new heading element
const heading = document.createElement("h1");

// Set the text of the heading
heading.textContent = "Welcome to my website!";

// Add the heading to the body
body.appendChild(heading);

// heading.onclick = one;
// heading.onclick = tow;
let a = document.createElement("p")
a.textContent = "abdo"
function one() {
  console.log("ih 1");
}
function tow() {
  console.log("ih 2");
}
heading.onclick = function () {
  np = heading.cloneNode(true);
  np.className = "newp";
  body.appendChild(np);
  document.addEventListener("click", function (e) {
    if (e.target.className === 'newp') {
      body.appendChild(a)
    }
  });
};
