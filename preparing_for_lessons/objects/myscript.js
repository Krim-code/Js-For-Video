// Функция для создания объекта-прямоугольника
function createRectangle(topLeft, bottomRight) {
    return {
        topLeft: topLeft,             // Левая верхняя точка
        bottomRight: bottomRight,     // Правая нижняя точка

        // Функция вывода информации о прямоугольнике
        info: function() {
            console.log(`Top left point: (${this.topLeft[0]}, ${this.topLeft[1]})`);
            console.log(`Bottom right point: (${this.bottomRight[0]}, ${this.bottomRight[1]})`);
        },

        // Функция расчета ширины прямоугольника
        width: function() {
            return this.bottomRight[0] - this.topLeft[0];
        },

        // Функция расчета высоты прямоугольника
        height: function() {
            return this.bottomRight[1] - this.topLeft[1];
        },

        // Функция расчета площади прямоугольника
        area: function() {
            return this.width() * this.height();
        },

        // Функция расчета периметра прямоугольника
        perimeter: function() {
            return 2 * (this.width() + this.height());
        },

        // Функция изменения ширины прямоугольника
        changeWidth: function(deltaWidth) {
            this.bottomRight[0] += deltaWidth;
        },

        // Функция изменения высоты прямоугольника
        changeHeight: function(deltaHeight) {
            this.bottomRight[1] += deltaHeight;
        },

        // Функция изменения ширины и высоты прямоугольника
        changeDimensions: function(deltaWidth, deltaHeight) {
            this.changeWidth(deltaWidth);
            this.changeHeight(deltaHeight);
        },

        // Функция смещения прямоугольника по оси X
        moveX: function(deltaX) {
            this.topLeft[0] += deltaX;
            this.bottomRight[0] += deltaX;
        },

        // Функция смещения прямоугольника по оси Y
        moveY: function(deltaY) {
            this.topLeft[1] += deltaY;
            this.bottomRight[1] += deltaY;
        },

        // Функция смещения прямоугольника по обеим осям
        move: function(deltaX, deltaY) {
            this.moveX(deltaX);
            this.moveY(deltaY);
        },

        // Функция для проверки, находится ли точка внутри прямоугольника
        containsPoint: function(point) {
            return (
                this.topLeft[0] <= point[0] && point[0] <= this.bottomRight[0] &&
                this.topLeft[1] <= point[1] && point[1] <= this.bottomRight[1]
            );
        }
    };
}

// Пример использования
const rect = createRectangle([0, 0], [4, 3]);

rect.info();
console.log("Width:", rect.width());
console.log("Height:", rect.height());
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());

rect.changeDimensions(1, 2);
console.log("Updated Width:", rect.width());
console.log("Updated Height:", rect.height());

rect.move(2, 1);
console.log("Moved Rectangle:");
rect.info();

const point = [3, 2];
console.log(`Point ${point} is inside the rectangle: ${rect.containsPoint(point)}`);