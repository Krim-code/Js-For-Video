class Human{
    #id
    #age
    constructor(firstName, lastName, birthday){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
        this.#age =  this.calculateAge()
        this.#id = Math.random()*10e16
    }
    calculateAge(){
        return Math.floor((Date.now()-Date.parse(this.birthday))/(365*60*24*60*1000))
    }
    showInfo(){
        document.write(`<h3> ${this.firstName + ' ' + this.lastName}</h3>`)
    }
    showAge(){
        document.write(`<h4> ${this.firstName + ' ' + this.lastName} имеет возраст ${this.#age}</h4>`)
    }

    get id(){
        return this.#id
    }

    set id(id){
        if(String(id).length >= 16){
            this.#id = id
        }
        else{
            console.log('id должно быть >= 16 символов')
        }
    }
}

John = new Human('John', 'Smith', '8-29-1993')

console.log(John)


class Teacher extends Human{
    constructor(firstName, lastName, birthday ,subject = []){
        super(firstName,lastName,birthday)
        this.subject = subject
    }
    showSubject(){
        document.write(`<h3>Предметы: ${this.subject.join(',')}</h3>`)
    }
}

const kate = new Teacher('Kate',"Lowdell",'9-9-2000',['Mathematic', 'Geometry'])
kate.showAge()
kate.showInfo()
kate.showSubject()
console.log(kate)

class ItMentor extends Teacher{
    constructor(firstName,lastName,birthday,subject = [],level){
        super(firstName,lastName,birthday,subject)
        this.level = level
    }
    showSubject(){
        document.write(`<p>С ${this.firstName + this.lastName} вы смложете выучить такие языки: <ol><li>${this.subject.join('<li>')}</ol></p>`)
    }
    showLevel(){
        document.write(`Уровень программиста ${this.level}`)
    }
}

const Andrew = new ItMentor('Andrew','Popov','9-9-1980',['JavaScript','Perl','Php'],'Senior')
Andrew.showAge()
Andrew.showInfo()
Andrew.showSubject()
Andrew.showLevel()
console.log(Andrew)

class calculateLetter extends String{

    calc(symbol){
        let check = this.indexOf(symbol) != -1? "Есть":"Нет"
        return check
    }
}

let str = new calculateLetter("Text for check")
console.log(str.calc("o"))