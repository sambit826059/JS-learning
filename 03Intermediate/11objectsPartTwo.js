var user = {
    firstName : "Bhumi",
    lastName : "Pendenkar",
    role : "admin",
    loginCount : 24,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (courseCount) {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    //info : [],
    info : function(insertProps){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role,
            loginCount: this.loginCount,
            facebookSignedIn: this.facebookSignedIn,
            courseList: this.courseList,   // ----------------|
            getCourseCount: this.getCourseCount() // -----------> ??????   check why here function is called but in upper line fuction is refered 
        };
    }
};

// courseList = true;
// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("Angular Course");
user.buyCourse("ReactJs Course");
// console.log(user.courseList);
// console.log(user.getCourseCount());


//assignment
//printing all properties of user object in a tabular form by creating another method called 'info'
var userInfo=user.info();
console.table(userInfo);
console.log(typeof(userInfo));

/*
another way of writing info() from chatgpt :
info: function () {
        const { firstName, lastName, role, loginCount, facebookSignedIn, courseList } = this;
        return { firstName, lastName, role, loginCount, facebookSignedIn, courseList, getCourseCount: this.getCourseCount() };
    }
*/