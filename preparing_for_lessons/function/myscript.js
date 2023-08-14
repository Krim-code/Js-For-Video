// 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

// function findSmallerNumber(num1, num2){
//     if (num1 < num2){
//         return num1
//     }
//     else{
//         return num2
//     }
// }


// 2. Написать функцию, которая возводит переданное число
// в указанную степень.

// function pow(number, power){
//     return number ** power
// }

// 3.  Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.

// function calculator(num1, num2, znak){
//     let result;
//     switch(znak){
//         case '+':
//             result = num1 + num2
//             break;
//         case '-':
//             result = num1 - num2
//             break;
//         case '*':
//             result = num1 * num2
//             break;
//         case '/':
//             result = num1 / num2
//             break;
//         default:
//             result = undefined
//     }
//     return result
// }

// function multiTable(num){
//     for (let index = 0; index < 10; index++) {
//         document.write(`<h1>${num} * ${index} = ${num*index}</h1>`)
//     }

// }
// for (let index = 2; index < 10; index++) {
//     multiTable(index)
//     document.write('<hr>')
// }


// function sumNumb(...arg){
//     let sum = 0
//     for(let elem = 0; elem < arg.length; elem++){
//         sum += arg[elem]
//     }
    
//     return sum 
// }
// sum = sumNumb(1,2,3,4,5,6,7,8)
// alert(sum)


function findChetnieorNeChet(onestNum,LastNum,chet){
    if (chet === true){
        document.write(`<h1>Чётные</h1>`)
        for(onestNum; onestNum < LastNum; onestNum++){
            if(onestNum % 2 === 0){
                document.write(`<h2>${onestNum}</h2>`)
            }
        }
    }
    else{
        document.write(`<h1>Heчётные</h1>`)
        for(onestNum; onestNum < LastNum; onestNum++){
            if(onestNum % 2 !== 0){
                document.write(`<h2>${onestNum}</h2>`)
            }
        }
    }
}
findChetnieorNeChet(1,10,true)