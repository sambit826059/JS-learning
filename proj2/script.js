const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var redElementColor = getBGColor(red);
var cyanElementColor = getBGColor(cyan);
// var violetElementColor = getBGColor(violet);
// var orangeElementColor = getBGColor(orange);
// var pinkElementColor = getBGColor(pink);


// red.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = redElementColor;
// });
// cyan.addEventListener('click', () => {
//     center.style.backgroundColor = cyanElementColor;
// });
// violet.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = violetElementColor;
// });
// orange.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = orangeElementColor;
// });
// pink.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = pinkElementColor;
// });

const magicColorChanger=(element, color)=>{
    return element.addEventListener('click', () => {
        center.style.backgroundColor = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));






//creating a method to change color of a elemrnt by passing two arguments i.e. current color and the the color the user want to give
/*
var changeColor=(colorPrev,colorNew)=>{
    var colorPrev=window.getComputedStyle(colorPrev).backgroundColor;
    var colorNew=window.getComputedStyle(colorNew).backgroundColor;
}
*/