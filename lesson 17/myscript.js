// document.body.addEventListener("mousemove",function(event){
//     // info.innerHTML = `X: ${event.clientX} Y: ${event.clientY}`
//     checkbox.style.top = event.clientY+'px'
//     checkbox.style.left = event.clientX+'px'
// })

random.addEventListener("click",function(){
    let randNum = Math.floor(Math.random() * 100)
    rand.innerHTML = randNum
})

like.addEventListener('click',function(){
    let countLikes = parseInt(like.innerHTML)
    like.innerHTML = (countLikes+=1)  + " likes"
})