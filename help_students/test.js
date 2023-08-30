
class Human{
    constructor(firstName, lastName, birthday){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
    }
    showInfo(){
        document.write(`<h3> ${this.firstName + ' ' + this.lastName}</h3>`)
    }
}

let arr = new Array(
    {name: "Хлеб",
    count:  0,
    bought: true,
    },
    {name: "Молоко",
    count:  1,
    bought: false,
    },
    {name: "Помидоры",
    count:  2,
    bought: false,
    },
    {name: "Яйца",
    count:  3,
    bought: true
    }
)

function sortedBought(a,b){
    if(a.bought === true && b.bought === false){
        return 1
    }
    else if((a.bought === true && b.bought === true) || (a.bought === false && b.bought === false) ){
        return 0
    }
    else if(a.bought === false && b.bought === true){
        return -1
    }
}

let sortedArr = arr.sort(sortedBought)
console.log(sortedArr)

function appendSales(array , sale, count){
    let check = false
    for(el of array){
        if (el.name.toLowerCase() === sale.toLowerCase()){
            el.count += count
            el.bought = true
            check = true
        }
    }
    check === false? array.push({name:sale,count: count, bought:true}) : array.sort(sortedBought)
    
}

appendSales(arr,'хлеб',3)
console.log(arr)
appendSales(arr,' Мясо',2)
console.log(arr)

