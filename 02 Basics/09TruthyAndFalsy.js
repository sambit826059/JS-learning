//TODO: falsy
// undefined
// null
// 0
// ''
//NaN

var  user="2";

if(2==user){
    console.log("Condition is true");   //output is true.Because of coercion(JS assumes 2 in the condition is string as well)
}

if(2===user){
    console.log("Condition is true");   //output is false.Thats why this is used for comparing.
}

// console.log(2+2);
// console.log("2"+2);