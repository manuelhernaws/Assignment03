/*eslint-env browser*/
var userChoice1 = parseInt(window.prompt("enter number"), 10);
var userChoice2 = parseInt(window.prompt("enter number"), 10);
var userChoice3 = window.prompt("what would you like to do? add, subtract, multiply or divide?");
function calculate(userChoice1, userChoice2, userChoice3) {
    "use strict";
    var result;
    switch (userChoice3) {
    case "add":
        result = (userChoice1 + userChoice2);
        window.document.write("the addition of " + userChoice1 + " and " + userChoice2 + " is " + result + ".");
        break;
    case "subtract":
        result = (userChoice1 - userChoice2);
        window.document.write("the subtraction of " + userChoice1 + " and " + userChoice2 + " is " + result + ".");
        break;
    case "multiply":
        result = (userChoice1 * userChoice2);
        window.document.write("the multiplication of " + userChoice1 + " and " + userChoice2 + " is " + result + ".");
        break;
    case "divide":
        result = (userChoice1 / userChoice2);
        window.document.write("the division of " + userChoice1 + " and " + userChoice2 + " is " + result + ".");
        break;
    default:
        window.document.write("I don't know that choice");
    }
    return result;
}
calculate(userChoice1, userChoice2, userChoice3);
