class rectangle {
    constructor(width, height, colour) {
        this.width = width;
        this.height = height;
        this.colour = colour;
    }
    area() {
        return this.width * this.height;
    }
    paint() {
        console.log ('the rectangle is painted ' + this.colour);
    }
}

ans = new rectangle ( 5,8, "red");
area = ans .area() ;
ans. paint ();
console.log (area);
    


