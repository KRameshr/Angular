"use strict";
var message = "hello world ";
alert(message);
//  types  is ,boolean number string  array enum null undefined any function void object classes interfaces
var value2 = 34; // union types
class Heroo {
    constructor() {
        this.fistname = "";
        this.lastname = "";
    }
}
var hero1 = new Heroo();
var hero2 = new Heroo();
var hero3 = new Heroo();
let favnumbers = [34, 56];
//           or
let favnumber = [34, 56];
let favstring = ["Ramesh", "ktib"];
let favarray = [hero1, hero2, hero3];
function add(num1 = 1, num2) {
    // ? is a optional peratmeter
    return num1;
}
console.log(add(9));
function n() {
    console.log("dd");
}
