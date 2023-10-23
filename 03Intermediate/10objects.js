var user = {
    firstName : "Bhumi",
    lastName : "Pendenkar",
    role : "admin",
    loginCount : 24,
    facebookSignedIn : true
};
console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount = 56;
console.log(user.loginCount);
console.dirxml(user);
console.table(user);

//assignment

//defining object for a moblile phone. Not more than 7 rpoperties.

var phoneAndroid = {
    modelName : "M-14 5G",
    modelNumber : "138fmm-ur828",
    price : "16999",
    displayType : "FHD",
    displaySize : "6.1 inches",
    processorName : "exynos 900",
    batteryCapacity : "6000 mAH",
    backMaterial : "Plastic",
    warrentyPeriod : "6 months"
};
console.dirxml(phoneAndroid);