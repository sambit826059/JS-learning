(function (){
    console.log("I say hello");
    console.log("I say hello again");
})();


//ref: https://developer.mozilla.org/en-US/docs/Glossary/IIFE


//functional programming

//keeping data and function independent

let score = 3435;
// function addBonus(){
//     score = score+45;
//     return score;
// }

function addBonus(score) {
    return score +42;
}

//state change 
hitesh="hey";
hiteshWed="hey there";
hiteshSat="hey there ,everyone";

//functions are treated as first class
const h=45;
const name="sam";

const addScore=function(){}
