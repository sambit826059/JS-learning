/*var num1=5;
var num2=6;

console.log(num1+num2);

var answer= num1>num2
console.log(answer);
*/

console.log("The formula is: D=(l-S)/L*100");
var sellingPrice=699;
var listingPrice=889;

var discountPercent=((listingPrice-sellingPrice)/listingPrice*100);
console.log(discountPercent);
displayDisplayPercentage=Math.round(discountPercent);
console.log("Discount is: "+displayDisplayPercentage+" %");

var result=listingPrice>sellingPrice;
console.log(result);
console.log(typeof(result));