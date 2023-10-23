//for-of and for-in loops

const names = ["youtube","facebook","twitter","instagram","netflix","amazon"];

// for(const n of names){          //for-of majorly used for arrays
//     console.log(n);
// }

const symbols = {
    yt:    "youtube",
    ig:    "instagram",
    fb:    "facebook",
    x:     "twitter",
    chill: "netflix",
    shop:  "amazon"
}
for(const n in symbols){            //for-in used majorly for objects
    console.log(`Key is ${n} and value is ${symbols[n]}`);
}          