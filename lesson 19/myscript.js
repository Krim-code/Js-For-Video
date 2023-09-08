

window.addEventListener("DOMContentLoaded" ,function(){
    
    test.style.top = '0px'
    test.style.left = '0px'
    
    window.addEventListener("keydown", function(e){
        console.log(e.code)
        switch(e.code){
            case "ArrowUp":
                test.style.top = (parseInt(test.style.top)-50) + "px"
                break;
            case "ArrowDown":
                test.style.top = (parseInt(test.style.top)+50) + "px"
                break;
            case "ArrowLeft":
                test.style.left = (parseInt(test.style.left)-50) + "px"
                break;
            case "ArrowRight":
                test.style.left = (parseInt(test.style.left)+50) + "px"
                break;
            default:
        }
        
    })



})