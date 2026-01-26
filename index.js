class rectangle {
    constructor(height, width, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calarea() {
        return this.width * this.height;
    }
    paint () {
        console.log( "The painted colour is " + this.color);
    }
}

ans = new rectangle ( 6,7,"red");
area = ans.calarea();
ans.paint();
console.log ( area);



