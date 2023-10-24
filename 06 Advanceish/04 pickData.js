//destructuring the data

const user = ["sam",3,"admin"];
// console.log(myName[1]);

// var role = user[2];
// var name = user[0];

var [name, courseCount, role] = user;

//console.log(role);

const myUser = {
    userName: "sam",
    courseNumber: "6",
    userRole: "admin"
};
//console.log(myUser.courseNumber);

const{userName, myCourseCount, userRole} = myUser;
//console.log(myCourseCount);



//chatgpt example

// const person = { name: "Alice" };
// const { name, age = 30 } = person;

// console.log(name); // Output: "Alice"
// console.log(age);  // Output: 30

// // Renaming variables during destructuring
// const { name: fullName } = person;
// console.log(fullName); // Output: "Alice"

