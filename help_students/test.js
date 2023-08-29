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