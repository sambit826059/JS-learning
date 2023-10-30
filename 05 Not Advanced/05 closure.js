// function init() {
//     var firstName = "sam";
//     console.log("I am init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }
// var value = init();
// value();

function doAddition(x){
    return function(y){
        return x+y;
    }
}
var add5 = doAddition(5);
console.log("Line 18: "+add5(4));

console.log(doAddition(7)(6));  //curring