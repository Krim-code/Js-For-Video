class Human  {
    constructor(firstname, lastname,birthday){
        this.firstname = firstname
        this.lastname = lastname
        this.birthday = birthday
    }

    showInfo(){
        document.write(`<h3>
                            ${this.firstname + ' ' +  this.lastname}
                        </h3>`);
    }
    showAge(){
        const deltaTime = Date.now() - Date.parse(this.birthday)
        const age = Math.floor(deltaTime/(365*24*60*60*1000))
        document.write(`<h3>
                            ${this.firstname + ' ' + this.lastname + ' is ' + age + ' years old'}
                        </h3>`);
    }
}

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    square(){
        return this.width * this.height;
    }
    perimeter(){
        return 2 * (this.width + this.height)
    }
}

class PrintMachine{
    constructor(heading,textNews,tagNames,reliseDate){
        this.heading = heading
        this.textNews = textNews
        this.tagNames = tagNames
        this.reliseDate = reliseDate
    }
    print(){
        document.write(
            `
            <div class="news-container">
                <h1 class="neon-title">${this.heading}</h1>
                    <p class="news-text">${this.textNews}</p>
            `
        )
        if(this.tagNames != []){
            document.write('<div class="tags-container">')
            for(const tag of this.tagNames){
                document.write(`<span class="tag">${tag}</span>`)
            }
            document.write('</div>')
        }
        document.write(`
                <p class="publish-date">Дата публикации:${this.calculateDate()} </p>
            </div>
            `)
    }

    calculateDate(){
        const timeDifference = Math.ceil(( Date.now() - Date.parse(this.reliseDate))/(1000*60*60*24))
        if (timeDifference < 1){
            return 'Сегодня'
        }
        else if(1< timeDifference <7){
            return `${timeDifference} days ago`
        }
        else{
            return Data.parse(this.reliseDate)
        }
    }
}


for(let i = 0; i< 10; i++){
    new PrintMachine(`Text heading ${i+1}` ,
                    "Text news",
                    ["news","intresting",`${i+1}`],
                    "8-27-2023")
                    .print()
}

