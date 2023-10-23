/*
Define a function that can answer the role of a user
The user can be on following roles:
    admin- with all access
    subadmin- with access to create and delete courses
    testprep- with access to create or delete tests
    user- consume all content
    other- trial user

Input: getUserRole(name.role)
*/


var getUserRole=function(name,role){
    switch (role) {
        case "admin":
            return`${name} is admin with all access`    //no need of brake statement because return is used.
        case "subadmin":
            return`${name} is subadmin with access to create and delete courses`
        case "testprep":
            return`${name} is a testprep with access to create or delete tests`
        case "user":
            return`${name} is a user with access to consume content`
    
        default:
            return`${name} is a trial user`
            break;
    }
}

var getRole=getUserRole("sam","admin");
console.log(getRole);


/*
var weekDay=function(date){
    switch (date) {
        case 1:
            return Monday;
            break;
        case 2:
            return Tuesday;
    
        default:
            break;
    }
}
console.log(weekDay(2));
*/