const uno = () => {
    console.log(`I am the one`);
}
const dos = () => {
    console.log(`I am the two`);
}
const tres = () => {
    setTimeout( () => {
        console.log("wallah !")
    },2000);
    console.log(`I am the three`);
}
const quatro = () => {
    console.log(`I am the four`);
}

uno();
tres();
dos();