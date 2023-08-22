// function MakeMatreshka(number){
//     if (number === 1){
//         console.log(`Финальная матрёшка`)
//     }
//     else{
//         console.log(`Верняя часть матрёшки ${number} `)
//         MakeMatreshka(number-1)
// //         console.log(`Нижняя часть матрёшки ${number} `)
// //     }
    
// // }

// // MakeMatreshka(5)

// function makeScope(number){
//     if(number === 0){
//         return "*"
//     }
//     else{
//         return `(${makeScope(number-1)})`
//     }
// }
// document.write(`<h1>${makeScope(4)}</h1>`)


// function fact(num){
//     if(num === 1) {
//         return 1
//     }
//     else{
//         console.log(`${num} * fact(${num - 1})`)
//         return num * fact(num - 1)
//     }
// }
// console.log(fact(5))


function outputNumber(start, end){
    if (start === end){
        console.log("at all")
    }
    else{
        console.log(start)
        outputNumber(start+1,end)
        console.log(`завершение функции для точки ${start}`)
    }

}
outputNumber(1,5)

function outputNumberBack(start , end){
    if (start === end){
        console.log("at all")
    }
    else{
        console.log(start)
        outputNumberBack(start-1,end)
        console.log(`завершение функции для точки ${start}`)
    }

}
outputNumberBack(10,5)

// написать функцию которая принимает 
// число и выводит сумму 
// всех идущих перед ней чисел 
// если 5 то 1+2+3+4+5 