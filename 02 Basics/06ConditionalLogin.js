//Allow user to acess course if he is:
/*logged in from email
  logged in from google 
  logged in from facebook
*/
var email=true;
var facebook=false;
var google=false;

/*
if(email){
    console.log("log in successfull");
}
if(facebook){
    console.log("log in successfull");
}
if(google){
    console.log("log in successfull");
}
*/

if(email || facebook || google){
    console.log("logged in")
}


if(email && facebook && google){
    console.log("logged in")
}else{
    console.log("login failed.Try agin")
}