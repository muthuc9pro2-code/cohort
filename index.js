class rectangle {
   constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height;
    }

    paint() {
        console.log("the colour is " + this.color);
    }
}

const rect = new rectangle(5,10,"red");
const ans = rect.area();rect.paint();
console.log(ans);