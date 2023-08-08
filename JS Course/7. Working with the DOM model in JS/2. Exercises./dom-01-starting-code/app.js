const h1 = document.getElementById("main-title");

h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const lastLi = document.querySelector("li:last-of-type");
lastLi.textContent = lastLi.textContent + " (Changed!)";

const listItemElement = document.querySelectorAll("li");

for (const listItemEl of listItemElement) {
    console.dir(listItemEl);
};

const body = document.body;