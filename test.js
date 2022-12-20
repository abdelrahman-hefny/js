let user = document.querySelector("[name = 'name']");
let age = document.querySelector("[name = 'age']");

document.forms[0].onsubmit = function (e) {
  uservalid = false;
  ageValid = false;

  if (user.value !== "" && user.value.length <= 10) {
    uservalid = true;
  }

  if (age.value !== "") {
    ageValid = true;
  }

  if (uservalid === false || ageValid === false) {
    e.preventDefault();
  }

  console.log(e);
};
