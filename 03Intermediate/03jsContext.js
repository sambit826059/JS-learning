/*
sayHello();  //this method can be read by the machine because of global context nature of JS

function sayHello(){
    console.log("hello");
}
*/
if(2==="2"){
    console.log("true statement");
}
var myName="sam";
if(myName===window.myName){
    console.log("true statement");  //output gives an error . Because window. is global context in browser but not in node
}

//node,browser and all engines have same or different global context.

/*
context is of two types global context and execution context
execution context has three parts:
    - variable object
    - Scope chain
    - this
*/