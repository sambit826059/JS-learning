var myMaps = new Map();

myMaps.set(0,"one");
myMaps.set(1,"02");
myMaps.set(2,"03");
myMaps.set(3,"04");
myMaps.set(4,"05");
// console.log(myMaps);

for (let key of myMaps.keys()) {        //for-of prefers keys as output. but budge when given anything else
    //console.log(`key is ${key}`);
}
for (let [key,value] of myMaps) {
    console.log(`key is ${key} and value is ${value}`);
}

myMaps.forEach ((value,key) => console.log(`value is ${value} and key is ${key}`));     

// console.log(`At line 18`);
// myMaps.forEach((key) => console.log(`key is ${key}`));       //foreach returns the values.whenever provided with a single argument