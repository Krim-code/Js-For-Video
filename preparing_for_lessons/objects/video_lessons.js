// Создание объекта и его свойства

// let userInfo = new Object(); // синтаксис "конструктор объекта"
// let userInfo = {}; // cинтаксис "литерал объекта"


// let userInfo = {
//     name: "Вася" , // свойство объекта
//     age: 30, //последняя(висячая) запятая
// }

// console.log(userInfo)
// console.log(userInfo.name)





///////////////////////////////////////////////
// Имена (ключи ) свойств объектов

// let userInfo = {
//     name: "Вася" , // свойство объекта
//     age: 30, //последняя(висячая) запятая
//     "likes javascript" : true,
// }
// console.log(userInfo.name)
// console.log(userInfo["likes javascript"])


// let firstPart = "likes"
// let userInfo = {
//     name: "Вася",
//     age: 30,
//     [firstPart + " javascript"]: true
// }
// console.log(userInfo["likes javascript"])

// let firstPart = "likes"
// let userInfo = {
//     name: "Вася",
//     age: 30,
//     [firstPart]: true
// }
// console.log(userInfo["likes"])

//////////////////////////////////////////////////////
// Вложенность объектов 
// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city : "Uzhhorod",
//         street: "Freedom"
//     }
// }

// console.log(userInfo)
// console.table(userInfo.address)
// console.log(userInfo.address.city)

//////////////////////////////////////////////////////////////
// Значение свойств объекта из переменной

// function makeUserInfo(name, age){
//     return {
//         name: name, //
//         age, // тоже самое что - age: age
//         "likes javascript": true,
//         // другие свойства
//     }
// }
// let user = makeUserInfo("Вася", 30)
// console.log(user)


// //////////////////////////////////////////////////////
// // Изменение объекта 
// // Добавление свойства

// let userInfo = {
//     name: "Вася"
// }

// console.log(userInfo)

// userInfo.age = 30

// console.log(userInfo)

// userInfo["likes javascript"] = true

// console.log(userInfo);

// userInfo.address = {
//     city: "Владимир",
//     street:"проспект Мира"
// }

// console.log(userInfo)


// // удаление свойств
// delete userInfo.name

// console.log(userInfo)


// изменение свойств

// const userInfo = {
//     name : "Вася",
//     age: "30"
// }
// console.log(userInfo)

// userInfo.age = 18

// console.log(userInfo)

////////////////////////////////////////////////////
//копирование объекта 

// let userInfo = {
//     name : "Вася",
//     age: "30"
// }

// console.log(userInfo)
// let user =  userInfo 

// console.log(userInfo)
// user.age =  18

// console.log(userInfo)




//дублирование объектов (object.assign)

//Синтаксис 

///Object.assign(куда(объект), что(свойство #1),что(свойство #2),.. )


// let userInfo = {
//     name : "Вася",
//     age: "30"
// }

// let user = Object.assign({},userInfo)

// user.age =  18

// console.log(userInfo)
// console.log(user)



// перебор цикл for in

// for(let key in Object){

// }

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city : "Uzhhorod",
//         street: "Freedom"
//     }
// }
// for (let key in userInfo) {
//     console.log(key)

//     console.log(userInfo[key])
// }


/////////////////////////////////////////
// методы объекта -  метод this

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city : "Uzhhorod",
//         street: "Freedom"
//     },
//     showInfo: function(){
//         console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`)
//     }
// }

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city : "Uzhhorod",
//         street: "Freedom"
//     },
//     showInfo: function(){
//         console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`)
//     }
// }


// userInfo.showInfo();


//Функция конструктор 

function UserInfo(name){
    this.name = name;
    this.age = 30
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'))