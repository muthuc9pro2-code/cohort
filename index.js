function c() {
    console.log("poda poolu");
}

p = mk(5000).then(c);
console.log(p);

function mk(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

