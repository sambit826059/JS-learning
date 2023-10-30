class User{
    constructor(name, email){       // classes have contructor property built in them. if not defined in the defination,the class will create its own constructor which will be empty.
        this.name = name;
        this.email = email;
    }
    #courseList = [];   //go to line no 52 to see reason of #

    getInfo(){
        return {name: this.name, email: this.email};    //returns object
        // return `${this.name} and ${this.email}`;    //returns strings      
    }
    enrollInCourse(name){
        this.#courseList.push(name);    // a setter
    }
    getCourseList(){                    // a getter
        return this.#courseList;
    }
    login(){                             // using static login(){} instead of login(){} makes the login safe from from inheritance. It doesn't get inherited
        // console.log(`You are logged in`);    //using only log was giving undefined and logged the statement. undefined was the output because there was no return value.
        return `You are logged in`;
    }
}
class subAdmin extends User{
    constructor(name,email){
        super(name,email)       //read docs about super()
    }
    getAdminInfo(){
        return `I am subadmin`;
    }
    login(){
        return "login for admin only";      //the login method is overwritten here
        
    }
}



// const user1 = new User("Harry","w2s@ipl.com")       //we can do it this way. But raher we will use module
// console.log(user1.getInfo());


// classInfo(className){                                // throws error . Because we have to use function classInfo(){} while writing a function in javascript unless its an object or class. Object and classes and can have standalone functions
//     console.log(`you are in class: ${className}`);
// }

module.exports = User;

const rock = new User("rock","rock.com");
// console.log(rock.getInfo());
rock.enrollInCourse("React course");
// console.log(rock.getCourseList());
// console.log((rock.courseList));     // returns undefined because the variable has been made private

// console.log(typeof(rock.getCourseList()));       //both are objects
// console.log(typeof(rock.courseList));

console.log("Line no: 49");
const tom = new subAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
// console.log(JSON.stringify(tom.getInfo()))