var User = function(firstName, courseCount){            //constructor fucntion are not written in arrow function, rather regular function.
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = () => {
        console.log(`Course count is: ${this.courseCount}`);
    };
    // this.getFirstName = () => {
    //     console.log(`First Name is: ${this.firstName}`);     //not a good way of doing it. Changing in the main defination/function for object
    // };

};

User.prototype.getFirstName = function () {
    console.log(`Your First Name is: ${this.firstName}`);   //no arrow function . doesn't work.gives undefined
}; 

var sambit = new User("sambit",4);
sambit.getCourseCount();

if (sambit.hasOwnProperty("firstName")){
    sambit.getFirstName();
}
// console.log(sambit);
// console.log(`type of user is: ${User}`);

var hitesh = new User("hitesh",2);
hitesh.getCourseCount();
// hitesh.getFirstName();

// console.log(hitesh);
// console.log(`type of user is: ${User}`);
// console.log(`typeof user: ${typeof(User)}`);