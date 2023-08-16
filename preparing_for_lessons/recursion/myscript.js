// 1. Написать функцию, которая вычисляет факториал заданного числа.

function fac(num){
    if (num === 1){
        return 1
    }
    else{
        console.log(`${num} * fac(${num-1})`)
        return num * fac(num-1)
    }
}

console.log(fac(5))



// 2. Написатьфункцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.


function outputNumber(start, end){
    if(start <= end){
        console.log(start)
        return outputNumber(start+1,end)
    }
    else{
        return 'done'
    }
}

console.log(outputNumber(1,10))

function outputNumberBack(start,end){
    if (end >= start){
        console.log(end)
        return outputNumberBack(start,end-1)
    }
    else{
        return 'done'
    }
}

console.log(outputNumberBack(1,10))


function reverseNumber(num){
    if(num >= 10){
            
    }
}