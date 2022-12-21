let set = setInterval(dow,1000)
div = document.querySelector("div")

function dow(){
    div.innerHTML-- ;
    if(div.innerHTML === "0"){
    clearInterval(set)
}
}

