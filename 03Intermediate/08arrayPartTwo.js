var isEven= (element)=>{
    // if(element%2===0){   
    //     return true;
    // }return false;
    
    return element % 2 ===0;    //writing condition in a single line with the retuen statement
}

/*
console.log(isEven(6));

var result = [2,4,5,8].every(isEven);    //here, isEven is used instead of usual isEven(). Because the function is refered here, not called
console.log(result);
*/

var result = [2,4,6,8].every((e) => e % 2 === 0);    
console.log(result);

var oldDuration=4;
var newDuration=1.3;
var workDuration = (oldDuration,newDuration) => oldDuration + newDuration;
var updatedDuration = workDuration(oldDuration,newDuration)

//console.log(`Your updated total work time as of today is ${updatedDuration}`)


//better way of writing it.Adding directly:

/*
const oldWorkDuration = 4;
const newWorkDuration = 1.3;
const updatedDuration = oldWorkDuration + newWorkDuration;

//console.log(`Your updated total work time as of today is ${updatedDuration}`);
*/

//using a arrow function

const numbers = [1, 2, 3, 4, 5];

// Using an arrow function with map
const doubledNumbers = numbers.map(num => num * 2);
//console.log(doubledNumbers);
