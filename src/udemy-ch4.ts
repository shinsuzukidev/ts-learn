console.log("__udemy-ch4 start\n");
//__________________________________________________________
//____________________ define class
class Person2 {
  public readonly name: string;
  protected height: number;
  private age: number;
  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  greeting = (): void => {
    console.log(`hello my name is ${this.name}`);
  };

  showAge = (): void => {
    console.log(`my age is ${this.age}`);
  };

  incrementAge = () => {
    this.age++;
  };

  static species = "home sapiens";
  static isAdult(age: number): boolean {
    return age >= 20 ? true : false;
  }
}

let p2 = new Person2("jojo", 32, 180);
console.log(p2.name);
console.log(p2.greeting());
console.log(p2.showAge());

class Teacher extends Person2 {
  private _subject: string;
  constructor(name: string, age: number, subject: string) {
    super(name, age, 170);
    this._subject = subject;
  }

  get subject() {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  showHeight = () => {
    console.log(`my height is ${this.height}`);
  };
}

let t = new Teacher("melo", 55, "math");
console.log(t.greeting());
console.log(t.showAge());
console.log(t.showHeight());
console.log(t.subject);
t.subject = "science";
console.log(t.subject);

console.log(Teacher.isAdult(17));
console.log(Teacher.isAdult(22));

//____________________

//__________________________________________________________
console.log("\n__udemy-ch4 end");
