const sam = {
    firstName: "Sambit",
    lastName: "Mohanty",
    role: "admin",
    courseCount: 5,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "That guy",
    lastName: "Rock",
    role: "sub-admin",
    courseCount: 2,
};

// console.log("at 23rd line");
// sam.getInfo();
// console.log("at 25th line");
// dj.getInfo();

var djInfo = sam.getInfo.bind(dj);  //bind gives refernce. we have to call it to log it
djInfo();

// sam.getInfo.call(dj);               //call directly logs the properties