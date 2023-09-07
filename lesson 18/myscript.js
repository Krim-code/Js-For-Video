document.addEventListener("DOMContentLoaded",function(){ 
    
    tbh.addEventListener('mouseover',function(e){
        changeColor(e,"orange","TD")
    })
    tbh.addEventListener("mouseout", function(e){
        changeColor(e,"bisque","TD")
    })

})

function changeColor(e,color,nameElement){
    if(e.target.nodeName == nameElement){
            e.target.style.backgroundColor = color;
        }
}


function CSS(name, value) {
    name = value
}
new Array("background:color")


<style>
    .construct{

    }
</style>