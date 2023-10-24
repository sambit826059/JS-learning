const courses = [
    {
        name: "Complete ReactJS course",
        price: "11.99"
    },
    {
        name: "Complete NodeJS course",
        price: "6.99"
    },
    {
        name: "Complete SQL course",
        price: "8.99"
    },
    {
        name: "Complete Springboot course",
        price: "7.99"
    },
    {
        name: "Complete Servlet course",
        price: "5.99"
    },
    {
        name: "Complete Database Management course",
        price: "9.99"
    },
    {
        name: "Complete Networking course",
        price: "6.89"
    },
];

var generateList = () => {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-end");

        const price = document.createTextNode("$" +course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList();

window.addEventListener("load", generateList);

const buttonIncreament = document.querySelector(".sort-btn-increament");

buttonIncreament.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price );
    generateList();
});

const buttonDecreament = document.querySelector(".sort-btn-decreament")

buttonDecreament.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price );
    generateList(); 
})