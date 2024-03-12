interface Human {
  name: string;
  age: number;
  //greeting(message: string): void;
  greeting: (message: string) => void;
}

const h: Human = {
  name: "sato",
  age: 33,
  // greeting(message: string): void {
  //   console.log(`hello ${message}`);
  // },
  greeting: (message: string): void => {
    console.log(`hello ${message}`);
  },
};

class Developer implements Human {
  name: string;
  age: number;
  experience: number;

  constructor(name: string, age: number, experience: number) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  greeting = (message: string): void => {
    console.log(`hello ${message}`);
  };
}

let dev = new Developer("guy", 40, 20);
console.log(`${dev.name},${dev.experience}`);

interface addFunc2 {
  (x: number, y: number): number;
}

let addFunc: addFunc2 = (x, y) => x + y;
console.log(addFunc(1, 2));
