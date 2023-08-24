let arr1 = [1,2,3,4,5]
let arr2 = [2,4,767,8,4,34]

function setArray(arr1,arr2){
    for(let i =0;  i < arr2.length; i++){
        if (!(arr2[i] in arr1)) { 
            arr1.push(arr2[i])
        }        
    }
    return arr1
}


newArr =  setArray(arr1,arr2)
console.log(newArr)


a = newArr.slice(1,3)
console.log(a)


console.log(arr1.reverse() === arr1)
console.log(arr1)