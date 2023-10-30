// import User from "./06classjs";

const User = require("./06classjs");

const simon = new User("Simon Minter","simon@hotmail.com");
console.log(simon.getInfo());

simon.enrollInCourse("SQL bootcamp");
simon.enrollInCourse("node JS bootcamp");

let courses = simon.getCourseList()
courses.forEach((c) => console.log(`enrollment in ${c}`));