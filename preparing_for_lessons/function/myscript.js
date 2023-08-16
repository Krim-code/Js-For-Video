// Цикл For



// Функции

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


// function findChetnieorNeChet(onestNum,LastNum,chet){
//     if (chet === true){
//         document.write(`<h1>Чётные</h1>`)
//         for(onestNum; onestNum < LastNum; onestNum++){
//             if(onestNum % 2 === 0){
//                 document.write(`<h2>${onestNum}</h2>`)
//             }
//         }
//     }
//     else{
//         document.write(`<h1>Heчётные</h1>`)
//         for(onestNum; onestNum < LastNum; onestNum++){
//             if(onestNum % 2 !== 0){
//                 document.write(`<h2>${onestNum}</h2>`)
//             }
//         }
//     }
// }
// findChetnieorNeChet(1,10,true)



// Рекурсия 

// * Во всех заданиях обязательно использовать рекурсию.
// 1. Написать функцию, которая вычисляет факториал заданного числа.

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   console.log(factorial(5));


// 2. Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.

// function printNumbersForward(start, end) {
//     if (start <= end) {
//       console.log(start);
//       printNumbersForward(start + 1, end);
//     }
//   }
  
//   function printNumbersBackward(start, end) {
//     if (end >= start) {
//       console.log(end);
//       printNumbersBackward(start, end - 1);
//     }
//   }

// 3. Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321.

// function reverseNumber(number) {
//     if (number < 10) {
//       return String(number);
//     } else {
//       const lastDigit = number % 10;
//       const remainingDigits = Math.floor(number / 10);
//       return String(lastDigit) + reverseNumber(remainingDigits);
//     }
//   }
  
//   console.log(reverseNumber(1234)); // Выводит "4321"

// 4. Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

// function sumOfDigits(number) {
//     if (number < 10) {
//       return number;
//     } else {
//       const lastDigit = number % 10;
//       const remainingDigits = Math.floor(number / 10);
//       return lastDigit + sumOfDigits(remainingDigits);
//     }
//   }
  
//   console.log(sumOfDigits(1357)); // Выводит 16

// 5. Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))). напиши используя JS

// function generateParentheses(n) {
//     if (n === 0) {
//       return "";
//     } else {
//       return "(" + generateParentheses(n - 1) + ")";
//     }
//   }
  
//   console.log(generateParentheses(4)); // Выводит "(((()))"