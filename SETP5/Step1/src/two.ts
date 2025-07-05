// class person {
//   strength: string;
//   constructor(nstrength: string = "ican wa;") {
//     this.strength = nstrength;
//   }
// }

class person {
  constructor(public nstrength: string) {}
}

let person1 = new person("i can ");
console.log(person1.nstrength);

//

// interface  can only take public property
interface IHero {
  firstname: string;
  lastname: string;
  fullname(): string;
  mivies: Array<number>;
}

class Hero extends person implements IHero {
  static version: number = 200;
  public mivies: number[] = [34, 34];
  private power = 20;
  constructor(
    public firstname: string,
    public lastname: string,
    hstrenght?: string
  ) {
    super(hstrenght || "something else");
  }
  fullname(): string {
    return this.firstname + " " + this.lastname;
  }
  get accessor(): number {
    return this.power;
  }
  set accessorpower(npower: number) {
    this.power = npower;
  }
  private setbooter(): void {
    // void does not return any thing
    this.power = this.power * this.power;
  }
}

var her = new Hero("Ramesh", "Kuruba");
console.log(her.fullname());
console.log("Privet Number geter" + her.accessor);
her.accessorpower = 20000;
console.log("Privet Number After geter " + her.accessor);
