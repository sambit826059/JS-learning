////Lexical scope is the definition area of an expression.

function init() {
    var firstName = "sam";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}


                                                