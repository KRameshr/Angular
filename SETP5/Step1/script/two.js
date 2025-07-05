"use strict";
// class person {
//   strength: string;
//   constructor(nstrength: string = "ican wa;") {
//     this.strength = nstrength;
//   }
// }
class person {
    constructor(nstrength) {
        this.nstrength = nstrength;
    }
}
let person1 = new person("i can ");
console.log(person1.nstrength);
class Hero extends person {
    constructor(firstname, lastname, hstrenght) {
        super(hstrenght || "something else");
        this.firstname = firstname;
        this.lastname = lastname;
        this.mivies = [34, 34];
        this.power = 20;
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get accessor() {
        return this.power;
    }
    set accessorpower(npower) {
        this.power = npower;
    }
    setbooter() {
        // void does not return any thing
        this.power = this.power * this.power;
    }
}
Hero.version = 200;
var her = new Hero("Ramesh", "Kuruba");
console.log(her.fullname());
console.log("Privet Number geter" + her.accessor);
her.accessorpower = 20000;
console.log("Privet Number After geter " + her.accessor);
