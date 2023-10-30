const uno = () => {
    return `I am the one`;
}
const dos = () => {
    return `I am the two`;
}
const tres = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("I am three")
        },2000);
    })
    
}
const quatro = async () => {
    return `I am the four`;
}

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = await tres();
    console.log(valThree);
    
    let valFour = quatro();
    console.log(valFour);
}
callMe();