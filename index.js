class rectangle {
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calarea() {
        return this.width * this.height;
    }

    PAINT () {
        console.log(" color is "+ this.color);
    }
}

ans = new rectangle (5,10,"red");
area = ans.calarea();
ans.PAINT();
console.log( area);