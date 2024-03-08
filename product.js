var side = document.getElementById("side")
var sideicon = document.getElementById("sideicon")
var closenav = document.getElementById("closenav")

sideicon.addEventListener("click",function(){

    side.style.right = 0
})

closenav.addEventListener("click",function(){
    side.style.right="-50%"
})

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll("div")


search.addEventListener("keyup",function(){

var entered = event.target.value.toUpperCase()

for(i=0;i<productlist.length;i=i+1)
{
    var productname = productlist[i].querySelector("h3").textContent
    if(productname.toUpperCase().indexOf(entered)<0)
    {
        productlist[i].style.display = "none"
    }
    else
    {
        productlist[i].style.display = "block"
    }

}

})