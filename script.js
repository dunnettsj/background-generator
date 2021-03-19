var _ = require('lodash');

let array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array, 3));
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");
var randombtn = document.getElementById("random");

changeColor();

const setRandomColor = () => {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);

    changeColor();
}

function changeColor() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

randombtn.addEventListener("click", setRandomColor)

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)