/*
create an appplication with following roles:
    admin- gets full access
    subadmin- gets access to create or delete tests
    user- gets access to consume content
*/

var user="admin";

if(user){

}

switch (user) {
    case "admin":
        console.log("you get full access as an admin")
        break;
    case "subadmin":
        console.log("you get access to create or delete tests as a subadmin")
        break;
    case "user":
        console.log("you get access to consume content as an user")
        break;   

    default:
        console.log("Trial user");
        break;
}