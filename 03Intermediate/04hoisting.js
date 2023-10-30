//variable object -refer to 03jsContext.js


/*
var num=2;

function sayMe(){
    console.log("Say me")

}

sayMe();
*/

tipper("6");

function tipper(a){
    var bill=parseInt(a);   //function declarations are scanned and made available 
    console.log(bill+5);

}


//bigTipper("205");   //gives error
var bigTipper=function (a){
    var bill=parseInt(a);   
    console.log(bill+5);
}


bigTipper("205")    //doesn't give error

/*
  variable declarations are scanned and made undefined.
  Thus console.log can't be used before the function variable is defined. 
  But in the above code snippet where there is only function and later it is called through the function name, the code runs.Because of function declaration.
*/

console.log(name);
console.log("before and outside the function");
var name="Sam";     //output is undefined. 

function sayName(){
    var name="Mr. Hulk";
    console.log(name);

}
sayName();  //after excution of this line excution context removes name related to sayName() function and gets the context outside the method.
            //when sayName() was executed the context was valid till the function call was there .after the function was called, it didn't have that context outside the method
console.log(name);
console.log("^ after and outside the function");


/*link to the time stamp where the video is:
https://youtu.be/9Ta1umc3tkQ?si=nLfQQJ1TpPWZjYcC

the picture to understand:
https://youtu.be/vGGOOYOXoQ4?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&t=36
*/