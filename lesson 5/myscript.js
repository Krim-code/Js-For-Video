// let i = 0
// while (i < 10) {
//     alert("i")
//     i++
// }
// let start = parseInt(prompt("Введите точку начала отсчёта"))
// let end = parseInt(prompt("Введите точку конца отсчёта"))
// for(let i = start; i <= end; i++){
//    console.log(i)
// }

// let num = parseInt(prompt("Введите число"))
document.write("<div class='container'>")
for (let j = 1; j<= 10; j++){
    document.write("<div class='elem'>")
    for(let i = 1; i <= 10; i++){
        document.write(`<h1>${j} * ${i} = ${j * i}</h1>`)
    }
    document.write("</div>")
}
document.write("</div>")
