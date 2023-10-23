var counter=document.getElementById("counter");
var followers=document.getElementById("followers");

counter.innerText=1000;
let count=1;

setInterval( () => {
    if(count < 1000) {
        count++;
        counter.innerText=count;
    }
},100);

setTimeout(()=>{
    followers.innerText="Followers on instagram";
},3000)