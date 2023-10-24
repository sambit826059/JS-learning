// var returnedValue = Math.max(3,6,3,5);
// // console.log(returnedValue);

// var myObject = {

// }
// Object.assign(myObject, {a:8, b:9, c:5}, {x:7, y:4, z:2});
// console.log(myObject);

function sumOne(a,b) {
    return a+b;
}
var myArray = [3,6,34]      //log ignores the 3rd argument. beacuse of sumOne() having 2 arguments

// console.log(sumOne(...myArray));    //spread operator - when we don't want to change the function defination.

//rest operator - multiple values can be given
function sumTwo(a,b, ...args){ 
    console.log(args); 
    let multi = a*b;             
    let sum = 0;
    for (const arg of args) {
        sum +=arg;
    }
    return [sum, multi];
}

console.log(sumTwo(3,6,97,94,4));


//using spread operator on strings

/*
const myName = `Sambit`;
const fullName = [...myName,` Mohanty`].join('');
console.log(fullName);
*/



//spread opr. on objects. objects don't have a inherent order of properties. So we have to access them for using in spread operator

/*
var sumObject = {       //wrong way:
    x: 4,
    y:2,                 
}
var {x,y} = sumObject;
*/

/*
function sumOne(a, b) {     //right way

    return a + b;
}

var sumObject = {            
    x: 4,
    y: 2,
}
*/

// console.log(sumOne(sumObject.x, sumObject.y)); // Destructure and pass the properties as arguments
