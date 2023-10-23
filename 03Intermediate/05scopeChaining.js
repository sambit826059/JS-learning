//Scope chain -refer to 03jsContext.js

var name="Sam"; //valid for the whole script i.e. Global

console.log("At line numnber 3",name);

function sayName(){
    var name="Mr. S"    //valid for this method and the child method
    console.log("Line no. 6",name); 
    sayNameTwo();

    function sayNameTwo(){
        var name="Mr. S.M"  //valid for only this method
        console.log("Line no.11",name);
    }
}

sayName();
