function hello() {
    if(greet.style['background-color'] === 'blueviolet'){
        greet.style.backgroundColor = 'red'
    }
    else{
        greet.style.backgroundColor = 'blueviolet'
    }
}

btn.addEventListener("click",hello)
console.log(greet.style----)