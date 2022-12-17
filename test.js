let mix = "a13ds2xi"

let num = mix.split("").map(
    function (el){
        return !isNaN(parseInt(el)) ? el :"";
    }
).join("")

console.log(num * num);