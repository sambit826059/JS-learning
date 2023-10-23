var isLoggedIn=true;
var isEmailverified=false;
var cardInfo=true;

/*
if(isLoggedIn){
    console.log("Logged in successfully");
    if(isEmailverified){
        console.log("Email is verified");
        if(cardInfo){
            console.log("You can make a purchase");
        }
    }
}
*/

if(isLoggedIn && isEmailverified && cardInfo){
    console.log("You can make a purchase");
}