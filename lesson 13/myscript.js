class Human{
    constructor(firstName, lastName, birthday){
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
        this.age =  this.calculateAge()
    }
    calculateAge(){
        return Math.floor((Date.now()-Date.parse(this.birthday))/(365*60*24*60*1000))
    }
    showInfo(){
        document.write(`<h3> ${this.firstName + ' ' + this.lastName}</h3>`)
    }
    showAge(){
        document.write(`<h4> ${this.firstName + ' ' + this.lastName} имеет возраст ${this.age}</h4>`)
    }
}



class News{
    constructor(heading, textNews, tagNames, reliseDate) {
        this.heading = heading
        this.textNews = textNews
        this.tagNames = tagNames
        this.reliseDate = reliseDate
    }
    print(){
        document.write(`
        <div class="news-container">
            <h1 class="title-h">${this.heading}</h1>
            <p class="news-text">${this.textNews}</p>
                    `)
            if(this.tagNames != []){
                document.write('<div class="tags-container">')
                for(let el of this.tagNames){
                    document.write(`<span class="tag">${el}</span>`)
                }
                document.write('</div>')
            }
            document.write(`
            <p class="publish-date">${this.calculateDate()}</p>
        </div>`)
    }
    calculateDate(){
        const timeDifference = Math.ceil((Date.now()-Date.parse(this.reliseDate))/(1000*60*60*24))
        if(timeDifference < 1){
            return 'сегодня'
        }
        else if(timeDifference < 7){
            return `${timeDifference} дней назад`
        }
        else{
            let date = new Date(this.reliseDate)
            return date.toLocaleDateString()
        }
    }
}

for(let i = 1; i < 10; i++){
    new News(`Текст новости ${i}`,'text news text news',['news','test','test2','test3'],`${i}-29-2023`).print()
}

