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

console.log(getBGColor(orange));







//creating a method to change color of a elemrnt by passing two arguments i.e. current color and the the color the user want to give
/*
var changeColor=(colorPrev,colorNew)=>{
    var colorPrev=window.getComputedStyle(colorPrev).backgroundColor;
    var colorNew=window.getComputedStyle(colorNew).backgroundColor;
}
*/