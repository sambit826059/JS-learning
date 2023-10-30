//fill and filter

var testArray = [2,4,6,1,7,8,4,9];

//console.log(testArray.fill("empty" /*filling in the indices */, 2 /*inculsive*/, 5 /*exclusive*/));

/*
    The value "empty" is what you want to fill the array with.
    The second argument, 2, is the starting index. It means you want to start filling the array from index 2 (inclusive), which is the third element of the array (arrays in JavaScript are 0-indexed).
    The third argument, 5, is the ending index. It means you want to stop filling the array just before index 5, which is the sixth element. This index is exclusive, meaning it's not included in the filling operation.
*/

const myNumber = [23,53,24,75,24,85,26,95];

const result = myNumber.filter((number)=> number > 85 );    //filter() used to set a condition to filter out the elements you need from an array
//console.log(result);



//slice and Splice

var users=["Radha","Shyam","Bheem","Anjana","Ahalya","Nakul","Krishna"];

//console.log(users.slice(1 /* inclusive */, 3 /* exclusive */ ));      //Arguments point to indices. The starting index is inclusive and the ending index is exclusive
console.log(users.slice(3));        // cuts the array from o to 2nd index


//users.splice(0,0,"BYE");            //replaces the 0th index only as it is the start as well as end point
//users.splice(1,3,"inserted");         //replaces from index 1 to 3 with "inserted"
//console.log(users);

console.log(users.length);
//splice() replaces the given indices with the arguments given.