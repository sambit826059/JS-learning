const cards = document.querySelectorAll(".card");
// console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));



function flip () {
    // console.log("Card Flipped"); 
    // console.log(this);
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    }else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }
}
// if arrow function is used, 'this' will be inherited from the surrounding scope

function checkIt() {
    // console.log("checking");
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}

function success()  {
    // console.log("success");
    
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function fail() {
    // console.log("fail");
    setTimeout ( () => {
    firstCard.classList.remove("flip");     //here firstCard.this.classList.remove() is wrong if used .refer to flip method
    secondCard.classList.remove("flip");
    }, 1000);
    
}

function reset() {
    isFlipped = false;
    firstCard = null;     
    secondCard = null;
}
//assignment-write reset method again with optimized code or logic e.g.destructuring the value, spread operator etc.

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random()*8)
        card.style.order = index;
    })
})();

