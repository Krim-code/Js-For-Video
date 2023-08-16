

const sumRec = function(num){
    if(num === 1){
        return 1
    }
    else{
        console.log(`${num} + sumRec(${num-1})`)
        return num + sumRec(num-1)
    }
}

console.log(sumRec(10))

for (let i = 0; i < 10; i++){
    console.table(i)
}