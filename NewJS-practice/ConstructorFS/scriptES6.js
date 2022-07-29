'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}
//ООП принцип АБСТРАКЦИЯ - концепция отделена от экземпляра

const square = new Rectangle(10, 10);
console.log(square.calcArea());

const long = new Rectangle(20, 100);
console.log(long.calcArea());


// ООП принцип НАСЛЕДОВАНИЕ - способность одного объекта базироваться на другом
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); //всегда первой строкой в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
//новый класс, на базе (наследованный от) предыдещего


const div = new ColoredRectangleWithText(25, 10, 'hello, world!', 'red');
div.showMyProps();
console.log(div.calcArea()); // методы унаследованы так же