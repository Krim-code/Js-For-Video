let People = {
    name: "Василия",
    age: 23,
    male: true,
    "адресс проживания":{
        city: 'г. Владимир',
        'улица': 'Газовиков'
    },

    ShowInfo : function(){
        document.write(this.name , this.age)
    }
}


People.name = "Дмитрий"
People.ShowInfo()

console.log(People)
delete People.male

People["Рост"] = 187
console.log(People)





let user = Object.assign({},People)


user.name = "Антон"

console.log(user)
user.ShowInfo()
console.log(People)