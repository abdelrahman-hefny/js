let chosen = 2;
let myFrinds = [
    { title: "Osama", age: 39, available: true, skills: ["Html", "Css"] },
    { title: "Ahmed", age: 36, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 31, available: true, skills: ["PHP", "Laravel"] }
];


showDetails(chosen);

function showDetails(chosen) {
    let frind = myFrinds[chosen - 1];
    
    let { title: name, age, available, skills: [, skill2] } = frind;
    console.log(`${name}\n ${age}\n ${available === true ? "Available" : "Not available"}\n${skill2}`);    
}