// let count = 0
// while (count < 10){
//     document.write(`<h1>hello ${count}</h1>`)
//     count = count + 2
//     // count++ // инкримент
// }

// let count = 100
// while (count > 0){
//     document.write(`<h1>hello ${count}</h1>`)
//     //count = count - 1
//     count-- // дикримент
// }

// let num = parseInt(prompt("Введите колличество звёздочек"))
// let count = 0
// document.write("<h1>")
// while(count < num){
//     document.write("*")
//     if (count %5 === 0){
//         document.write("<br>")
//     }
//     if (count === 101){
//         break;
//     }
//     count++
// }
// document.write("</h1>")

// let num = parseInt(prompt("Введите колличество чисел"))
// let count = 0
// document.write("<h1>")
// while(count < num){
//     count++
//     if (count === 6 || count === 10 || count === 13){
//         continue
//     }
//     document.write(`${count}<br>`)
    
// }
// document.write("</h1>")

// let count = 10
// do{
//     document.write(`${count}`)
//     count++
// }while(count < 10)

let sum = 1000
let del = 5
let count = 0

do{
    document.write(`<p>${sum}</p>`)
    sum = sum / del
    count ++
}while(sum > 5)
document.write(`количество делений ${count}`)