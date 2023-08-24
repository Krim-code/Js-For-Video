// t = "adbrt"

str = "abop gropg k4og krqk paoqkweo kr 3okoh kohkaaaa aaa aa aaa"
// count= 0
// for (char of str){
//     if(t.includes(char)){
//         count++
//     }
// }
// console.log(count)



function trancate(str, maxLength){
    if (str.length > maxLength){
        str = str.slice(0,maxLength)+"..."
    }
    return str
}

console.log(trancate(str,6))

console.log(str.charAt(6))

console.log(str.split(" ").length)

let myDate = new Date(2012,11,25,18,30,20,10)
console.log(myDate.get)