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

function  sum (a,b){
    return a + b;
 }
    ans = sum ( 12576, 25634);
    console.log (ans);



