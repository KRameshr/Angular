var message: string = "hello world ";
alert(message);
//  types  is ,boolean number string  array enum null undefined any function void object classes interfaces
var value2: number | string | object = 34; // union types

class Heroo {
  fistname = "";
  lastname = "";
}

var hero1: Heroo = new Heroo();
var hero2: Heroo = new Heroo();
var hero3: Heroo = new Heroo();

let favnumbers: Array<number> = [34, 56];
//           or
let favnumber: number[] = [34, 56];

let favstring: Array<string> = ["Ramesh", "ktib"];
let favarray: Array<Heroo> = [hero1, hero2, hero3];

function add(num1: number = 1, num2?: number) {
  // ? is a optional peratmeter
  return num1;
}

console.log(add(9));

function n(): void {
  console.log("dd");
}
