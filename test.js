let allLis = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll("div");

allLis.forEach(function (ele) {
    ele.onclick = function(){
        //remove class
        allLis.forEach(function(ele){
            ele.classList.remove("active")
        })
        // add class

        this.classList.add("active")
        // display div
        allDiv.forEach(
            function(ele){
                ele.style.display = 'none'
            }
        ) 




    }
});
