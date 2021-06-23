interface Comparator<T> {
    compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
    constructor(private width: number, private height: number){}

    public compareTo(value: Rectangle) {
        return this.width * this.height - value.width * value.height;
    }
}

const rec1 = new Rectangle(10, 10);
const rec2 = new Rectangle(5, 20);