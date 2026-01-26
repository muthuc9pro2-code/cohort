function greet(resolve) {
    setTimeout(resolve,2000);
}
function mk() {
    return new Promise(greet);
}
function panda() {
    console.log("Panda says hello!");
}
mk().then(panda);