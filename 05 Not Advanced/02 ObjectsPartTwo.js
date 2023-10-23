var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    },
};

var sambit = Object.create(User);
console.log(sambit);
sambit.name = "sambit mohanty";
sambit.getUserName();

var hitesh = Object.create(User,{
    name: {value: "hitesh"},
    courseCount: {value: 4},
})
hitesh.getUserName();