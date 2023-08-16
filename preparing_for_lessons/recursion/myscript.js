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


// 3. Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321.

function reverseNumber(num){
    if (num < 10){
        return String(num)
    }
    else{
        lastDigit = num % 10
        Ostatok = parseInt(num /10)
        return String(lastDigit) + reverseNumber(Ostatok)
    }
}
console.log(reverseNumber(133))

// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

function sumOfDigit(num){
    if (num <10) {
        return num
    }
    else{
        lastDigit = num % 10
        Ostatok = parseInt(num /10)
        return lastDigit + sumOfDigit(Ostatok)
    }
}

console.log(sumOfDigit(1357))


// 5. Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).

function outputCloseScope(num){
    if(num === 0){
        return ""
    }
    else{
        return `(${outputCloseScope(num-1)})`
    }
}
console.log(outputCloseScope(10))