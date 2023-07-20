//Q1
let a = doc.getElementById("text");
console.log(a)

//Q2
let b = docu.getElementsByTagName("h1");
console.log(b)

//Q3
let c = docum.querySelector(".box");
console.log(c)

//Q4
let heading = document.getElementById("myHeading");
heading.textContent = ("Hello World");
console.log(heading)

//Q5
function replaceText() {
    const contentElement = document.getElementById("abc");
    contentElement.textContent = ("Welcome to Elevation academy");
}

//Q6
const head = document.getElementById("myHead");
head.style.color = 'red';
head.setAttribute("id", "head");

//Q7
function changeFlexDirection() {
    const container = document.querySelector(".container");
    const currentFlexDirection = container.style.flexDirection;

    if (currentFlexDirection === 'row' || null) {
        container.style.flexDirection = 'column';
    } else {
        container.style.flexDirection = 'row';
    }
}

//Q9
function updateClock() {
    let clockElement = document.getElementById("clock");
    let currentTime = new Date();
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);
