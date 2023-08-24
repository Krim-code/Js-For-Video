function getArray(num,start,end){
    let arr = []
    for(let i = 0; i < num; i++){
        // arr[i] = i;
        arr.push(Math.floor(Math.random()*(end-start))+ start)
    }
    return arr
}


let testArray = getArray(10,1,10)
console.log(testArray)


// console.log(testArray.length)

// function outputArray(arr){
//     document.write('<ul>') 
//         for(let i = 0; i < arr.length; i++){
//             document.write(`<li>${arr[i]}</li>`)
//         }
//     document.write('</ul>') 

// }

// outputArray(testArray)

// document.write("<hr>")

// function outputChetnArray(arr){
//     document.write('<ul>') 
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 2 === 0){
//                 document.write(`<li>${arr[i]}</li>`)
//             }
//         }
//     document.write('</ul>') 

// }

// outputChetnArray(testArray)

// function findMax(arr){
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i]> max){
//             max = arr[i]
//         }
//     }
//     document.write(`<h4>MAX Number - ${max} </h4>`)
// }
// findMax(testArray)

let arr = [1,2,4,7,9,10,10,9,7]
// let arr2 = arr.slice()
// arr2[0] = 99
// console.log(arr)
// console.log(arr2)

let index = 0
// while (index !== -1){
//     index = arr.indexOf(9)
//     if(index !== -1){
//         arr[index]  = 8
//     }
    
// }

// arr = [{name: "Bob",age:15},
//         {name:"Tom",age:20},
//         {name:"Tim",age:18}]
// console.log(arr)

// function displayProfile(arrUser){
//     document.write(`<div>`)
//    document.write(`<h3>Name -<span>${arrUser.name}</span></h3>`)
//    document.write(`<h3>Age -<span>${arrUser.age}</span></h3>`)
//    document.write(`</div>`){name:"Tom",age:20}
// }

// for(let i=0;i<arr.length;i++){
//     displayProfile(arr[i])
// }

// let tempArr = [[1,2,3,4],[6,7,8,8,9]]


// for(let i= 0; i < tempArr.length; i++){
//     for(let j = 0; j< tempArr[i].length; j++){
//         console.log(tempArr[i][j])
//     }
// }\
function sortArray(a,b){
    if(a>b){
        return -1
    }
    else if(a<b){
        return 1
    }
    else {
        return 0
    }
}
let arr1 = [2,32,1,2,5,9,46]
console.log(arr1.sort(sortArray))


// str = "Cat,Dog,Parrot"
// tempAr = str.split(",")
// console.log(tempAr[1])

// console.log(tempAr.join("------"))
// let arr2 = [3,6,9,14,90]

// function findUnikArray(arr1,arr2){
//     for (let i = 0; i<arr1.length; i++){
//         if (arr2.indexOf(arr1[i]) === -1){
//             arr2.push(arr1[i])
//         }
//     }
//     console.log(arr2)
// }
// findUnikArray(arr1,arr2)

function palindromCheck(){
    const clearword = "dog"
    let newWordForCheck = clearword.toLowerCase()
                                    .split("")
                                    .reverse()
                                    .join("")
    alert(clearword)
    
    alert(clearword  === newWordForCheck)  
}

palindromCheck()