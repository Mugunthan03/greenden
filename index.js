var side = document.getElementById("side")
var sideicon = document.getElementById("sideicon")
var closenav = document.getElementById("closenav")

sideicon.addEventListener("click",function(){

    side.style.right = 0
})

closenav.addEventListener("click",function(){
    side.style.right="-50%"
})
