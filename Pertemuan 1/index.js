const heading = document.querySelector(".heading-primary");
console.log(heading);
heading.textContent = "Helo";

const heading2 = document.querySelector("#paragraph");
console.log(heading2);
heading2.textContent = "World";

const createElement = document.createElement("h3");
createElement.textContent = "Hello World";

const main = document.querySelector(".main-section")
main.appendChild(createElement)

let age = 25;

console.log(age === +"25");
