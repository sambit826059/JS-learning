// var name;
// var name2;
// var name3;

var countries = ["India","USA","Russia","Norway"];

var states = new Array("Odisha","West Bengal","Uttar Pradesh");
console.log(states[1]);

//console.log(states.length);
states[2]="Himachal Pradesh";
//console.log(states);

var user=["sambit","sam@abc.com",3,53,true];
console.log(user);

user.pop(); //pop( removes the last element of array)
user.pop();
console.log(user);

user.push("Verified");
console.log(user);

user.unshift("New Value");  //adding a new element at the start of array and shifting the elements to higher indices
console.log(user);
user.shift();   //removing the first element of the array and shifting the elements to lower index
console.log(user);

console.log(user.indexOf(3));   //gives the index of the element
console.log(user.indexOf("roll number"));   //element is not there.output is -1.Using the -1 we can write the error handling

//console.log("sambit");
console.log(Array.from("sambit"));  //converting the input to individual elements. Not only string but many other things can be done