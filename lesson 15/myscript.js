class Button{
    constructor(width, height, text){
        this.width  = width
        this.height = height
        this.text = text
    }
    showBtn(){
        document.write(`<button style="width:${this.width}px; height:${this.height}px">
                        ${this.text}
                        </button>`)
    }
}


const Btn1 = new Button(100, 100, 'Click me')
Btn1.showBtn()

class BootstrapButton extends Button{
    constructor(width, height, text,bgColor){
        super(width, height, text)
        this.bgColor = bgColor
    }
    showBtn(){
        document.write(`<button style="
                                    width:${this.width}px; 
                                    height:${this.height}px;
                                    background-color: ${this.bgColor};
                                    ">
                        ${this.text}
                        </button>`)
    }
}

const Btn2 = new BootstrapButton(100, 100, 'Click me','red')
Btn2.showBtn()



class Figure {
    #name
    constructor(width,height,name){
        this.width  = width
        this.height = height
        this.#name = name
    }

    get name(){
        return this.#name
    }
    showInfo(){
        document.write('Ширина фигуры '+this.name+': ' + this.width + ' Высота фигуры:'+  this.height)
    }
    calculatePerimeter(){}
    calculateSqrt(){}
}

const fg = new Figure('Figure',100,50)
fg.showInfo()

console.log(fg)

class Sqrt extends Figure{
    constructor(width,height,name){
        super(width,height,name)
    }
    calculatePerimeter(){
        return this.width*4 
    }
    calculateSqrt(){
        return this.width ** 2
    }
}

const sq = new Sqrt(10,10,'Квадрат №1')
console.log(sq.calculatePerimeter())
console.log(sq.calculateSqrt())
sq.showInfo()

// Создать класс наследуясь от Figure - Прямоугольник

