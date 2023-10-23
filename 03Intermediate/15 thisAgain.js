console.log(this);

var user = {
    firstName: "Sambit",
    courseCount: 5,
    getCourseCount: function(){
        console.log("LINE 7",this);     //here 'this' has context of 'user' object. So the output is user object
        function sayHello(){
            console.log("hello");
            console.log("LINE 10",this);
        }
        sayHello()                      // for all regular function calls 'this' points to window object. So the output is global context (depends on the enginei.e node,browser etc)
    }
}
//user.getCourseCount();
//getCourseCount();                     // gives error



/*
function regularFunction() {
    console.log(this);                  //here this is smililar to this in the sayHello() in the user object
}
regularFunction();

*/

