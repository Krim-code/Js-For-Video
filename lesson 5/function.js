// function hello(UserName){
//     document.write(`<h1>Привет, ${UserName} !</h1>`)
// }

// hello("Олег")
// hello("Григорий")
// hello("Леонид")

function sumOfNumber(num1, num2){
    let root = document.getElementById('root')
    root.innerHTML = `<h1>${num1}+${num2} = ${num1+num2}</h1>`
}

function minOfNumber(num1, num2){
    let root = document.getElementById('root')
    root.innerHTML = `<h1>${num1}-${num2} = ${num1-num2}</h1>`
}

function startCalculator(){
        // let check = false
        // do{
            let numberOne = parseInt(prompt("Введите число"))
            let numberTwo = parseInt(prompt("Введите число"))
            let znak = prompt("Введите знак")
            switch(znak){
                case "+":
                    sumOfNumber(numberOne,numberTwo)
                    break
                case "-":
                    minOfNumber(numberOne,numberTwo)
                    break
                default:
                    document.write("я не знаю такой знак")
            }
            // check = confirm("Хотите продолжить?")
        // }while(check === true)
        
}
// startCalculator()

// function findPlase(R){
//     let S = 3.14 * R **2
//     return S
// }

// let onePlase = findPlase(15)
// alert(onePlase)
// let secondPlase = 3.14 * 22 **2

// function checkChetnost(num){
//     check = num  % 2 === 0 ? true: false
//     return check
// }

// if (checkChetnost(15) === true){
//     alert("Чётная")
// }
// else{
//     alert("нечётная")
// }

// function UPPERCase(gods){
//     return gods.toUpperCase()
// }

// let a = "dog"
// alert(a)
// alert(UPPERCase(a))

function checkChetnost(start, end, check){
    for (let i = start; i <= end; i++){
        if (check ===true){
            if (i % 2 === 0){
                document.write(`<h1>${i}</h1>`)
            }
        }
        else{
            if (i % 2 !== 0){
                document.write(`<h1>${i}</h1>`)
            }
        }
    }
}
checkChetnost(10,100,false)