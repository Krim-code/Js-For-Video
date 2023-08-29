class Human {
    #id
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.#id = Math.random() * 10e16;
    }

    showInfo() {
        document.write(`<h3>
                            ${this.firstname + ' ' + this.lastname}
                        </h3>`);
    }
    showAge() {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const age = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
        document.write(`<h3>
                            ${this.firstname + ' ' + this.lastname + ' is ' + age + ' years old'}
                        </h3>`);
    }

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }
    toString(){
        return this.firstname + ' ' + this.lastname +
        ' is a '+ this.constructor.name;
    }

}

const john = new Human('John', 'Smith', '09-17-2003');
// console.log(john.firstname, john.lastname);
// john.firstname = 'Billy';
// john.lastname = 'Thomas';
// console.log(john.firstname, john.lastname);

// console.log(john)
class Teacher extends Human{
    constructor(firstname = String,lastname,birthday,subjects = []){
        super(firstname,lastname,birthday);
        this.subjects = subjects;
    }
    showSubject(subjects){
        document.write(`<h3>
                            ${this.firstname + ' ' +
                            this.lastname + ' can teach you '+
                            this.subjects.join(', ')}
                        </h3>`);
    }
}

const kate = new Teacher('Kate', 'Lowdell',
 '07/15/1986',
 ['biology', 'geography']);

kate.showAge()
kate.showInfo()
kate.showSubject()

class ITMentor extends Teacher {
    constructor(firstname, lastname, birthday,subjects = [], level){
        super(firstname, lastname, birthday, subjects);
        this.level = level;
    }
    showSubjects() {
        console.log('With '+this.firstname + ' ' +this.lastname +' you can get such IT skills: '+ this.subjects.join(', '));
        document.write('<p>With '+this.firstname +' ' + this.lastname +' you can get such IT skills:</p><ol><li>'+ this.subjects.join('<li>')+ '</ol>');
    }
    showLevel(){
    console.log(this.firstname + ' ' +
    this.lastname + ' has level '+
    this.level);
    }
   }

const andrew = new ITMentor("Andrew", "Phillipov",
   '07/22/1986', ['HTML', 'CSS',
   'JavaScript', 'React', 'Angular'],
   'Senior');
  andrew.showSubjects();


  document.write('Class Human: '+john + '<br>');
  document.write('Class Teacher: '+kate + '<br>');
  document.write('Class ITMentor: '+andrew + '<br>');


class Button{
    constructor(width, height,text){
        this.width = width
        this.height = height
        this.text = text
    }
    showBtn(){
        document.write(`<button style=
                                '
                                width:${this.width};
                                height:${this.height};
                                '
                                >${this.text}</button>`)
    }
}

newBTN = new Button('100px','200px','Click me')
newBTN.showBtn()

class BootstrapButton extends Button{
    constructor(width, height,text,color){
        super(width, height, text)
        this.color = color
    }
    showBtn(){
        document.write(`<button style=
                                '
                                width:${this.width};
                                height:${this.height};
                                background:${this.color};'
                                >${this.text}</button>`)
    }
}

newBootBtn = new BootstrapButton('100px','200px','Click me','red')
newBootBtn.showBtn()


class GeometricShape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
  
    get shapeName() {
      return this.name;
    }
  
    displayInfo() {
      console.log(`Фигура: ${this.name}`);
      console.log("Стороны и их длины:");
      for (const [sideName, sideLength] of Object.entries(this.sides)) {
        console.log(`${sideName}: ${sideLength}`);
      }
    }
  
    calculateArea() {
      return 0; // Базовая реализация для общей геометрической фигуры
    }
  
    calculatePerimeter() {
      return 0; // Базовая реализация для общей геометрической фигуры
    }
  }
  
  class Square extends GeometricShape {
    constructor(sideLength) {
      super("Квадрат", { a: sideLength, b: sideLength, c: sideLength, d: sideLength });
    }
  
    calculateArea() {
      return this.sides.a * this.sides.a;
    }
  
    calculatePerimeter() {
      return 4 * this.sides.a;
    }
  }
  
  class Rectangle extends GeometricShape {
    constructor(width, height) {
      super("Прямоугольник", { a: width, b: height, c: width, d: height });
    }
  
    calculateArea() {
      return this.sides.a * this.sides.b;
    }
  
    calculatePerimeter() {
      return 2 * (this.sides.a + this.sides.b);
    }
  }
  
  class Triangle extends GeometricShape {
    constructor(sideA, sideB, sideC) {
      super("Треугольник", { a: sideA, b: sideB, c: sideC });
    }
  
    calculateArea() {
      const p = (this.sides.a + this.sides.b + this.sides.c) / 2;
      return Math.sqrt(p * (p - this.sides.a) * (p - this.sides.b) * (p - this.sides.c));
    }
  
    calculatePerimeter() {
      return this.sides.a + this.sides.b + this.sides.c;
    }
  }
  
  const shapes = [
    new Square(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
  ];
  
  shapes.forEach(shape => {
    shape.displayInfo();
    console.log(`Площадь: ${shape.calculateArea()}`);
    console.log(`Периметр: ${shape.calculatePerimeter()}`);
    console.log();
  });
