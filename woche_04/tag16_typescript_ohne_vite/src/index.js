"use strict";
// * Primitive Typen in der Programmiersprache
let firstName = "Max";
let age = 22;
let isOnline = true;
function sayHello(name) {
    return "Hello" + name;
}
console.log(sayHello("Andre"));
console.log(sayHello("Joe"));
function logMessage(message) {
    console.log("Log", message);
}
logMessage("Heute ist ein schöner tag");
function calcArea(width, height) {
    return width * height;
}
console.log(calcArea(100, 20));
