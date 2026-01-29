function test () {
    return new Promise((resolve) => {
        c = 0
        for (let i = 0 ; i < 100000 ; i++){
            c++;
        }
        resolve("poda podalanga");
    });
}
let p = test()

function callback (display) {
    console.log(display);
}

p.then (callback)

function sum(a, b) {
    return a+b;
}
console.log(sum(2,4));









     