var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

/*
console.log(typeof(counter));
counter.innerHTML = "1001";
// document.querySelector(".counter").innerHTML = counter;          //to be used if .innerHTML is written while selecting the element. /innerHTML converts counter (element) to counter(string)

*/
counter.innerText = 1000;

let count=1;

setInterval( () => {
    if(count<1000){
    count++;
    counter.innerText=count;
    }
},10);

setTimeout(()=>{
    followers.innerText="Followers on twitter";
},3000);

//assignment
//write the same code but using getElementById
    //solved...in 02script.js