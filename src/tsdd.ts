import { deepEqual } from 'assert';

console.log('==> start ttdd.ts');
//-------------------------------------------------------------------------------

let num: number = 100;

interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

let p2: Point2D = { x: 0, y: 100 };
let p3: Point3D = { x: 0, y: 100, z: 200 };

function iTakePoint(point: Point2D) {
  return point;
}

iTakePoint(p2);
iTakePoint(p3);

//
// console.log(5 == '5')  // 常にfalse
// console.log(5 === '5') // 常にfalse
// console.log(5 === 5) // 常にfalse
// console.log(deepEqual({ a: 123 }, { a: 123 }))

type IdDisplay = {
  id: string;
  display: string;
};

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'foo selelct',
  },
  {
    id: 'bar',
    display: 'bar selelct',
  },
];

console.log(list.map((x) => x.id).indexOf('bar'));

//
console.log(null == undefined);

console.log(undefined ? 'true' : 'false');
console.log(null ? 'true' : 'false');

function foo(a: number, b?: number) {
  return { a: 100, b: 200 };
  //return { a: 100 }
}

// 値の有効性を表す意味でundefinedを使用しない
function toInt(str: string): { valid: boolean; int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  } else {
    return { valid: true, int: int };
  }
}

// json undefinedはサポートされない
console.log(JSON.stringify({ a: null, b: undefined }));

// this
// function foo2() {
//   console.log(this);
// }

// foo2();

// const bar = {
//   foo2,
// };
// bar.foo2();

// クロージャ
function outerFunction(arg: string) {
  let argvalue = arg;

  return function () {
    console.log(argvalue);
  };
}

let innerfunction = outerFunction('hello!');
innerfunction();

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getVal() {
      return count;
    },
  };
}

let counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getVal());

// Truty
const names = 'aaa';
const hasNames = !!names;
const someobj = {
  hasName: !!names,
};
console.log(someobj.hasName);

// arrow function(アロー関数は、それを囲んだコンテキストからthisを捕捉します)
let inc = (x: number) => {
  return x + 1;
};

class Person {
  constructor(public age: number) {}
  growOld = () => {
    this.age++;
  };
}

let p = new Person(30);
p.growOld();
console.log(p.age);

// 残余引数
function iTakeItAll(first: number, second: number, ...alls: number[]) {
  console.log(alls);
}
iTakeItAll(1, 2, 10, 11, 12);

// let
let funcs = [];
for (let index = 0; index < 3; index++) {
  funcs.push(() => {
    console.log(index);
  });
}

for (let index = 0; index < 3; index++) {
  if (typeof funcs[index] !== 'undefined') {
    const func = funcs[index];
    if (func) {
      func();
    }
  }
}

// 分割代入
let rect = { x: 1, y: 2, width: 100, height: 200 };
let { x, y, width, height } = rect;
console.log(`${x},${y},${width},${height}`);

const obj = { 'some property': 'some value' };
const { 'some property': someProperty } = obj;
console.log(someProperty);

let foo3 = {
  bar: {
    bas: 123,
  },
};

let {
  bar: { bas },
} = foo3;

console.log(bas);

// スプレッド演算子
function foo4(x: number, y: number, z: number) {
  console.log(`${x}, ${y}, ${z}`);
}

//let args: [number, number, number] = [1, 2, 3]
let args = [1, 2, 3] as const;
foo4(...args);

let list2 = [1, 2, 3];
list2 = [100, 102, ...list2];
console.log(list2);

// for...of
let arr2 = [9, 2, 5];
for (const item of arr2) {
  console.log(item);
}

// 型システム
//let num: number = 1234;
function identity(num: number): number {
  return num;
}

interface Name {
  first: string;
  second: string;
}

let name: Name;
name = {
  first: 'john',
  second: 'doe',
};

// generic
function reverse<T>(items: T[]): T[] {
  let list: T[] = [];

  for (let i = items.length; i >= 0; i--) {
    const item = items[i];
    if (item !== undefined) {
      list.push(item);
    }
  }

  return list;
}
let samples = [1, 2, 3];
var reversed = reverse<number>(samples);
console.log(reversed);

// reversed[1] = 100;     // ok
// reversed[1] = '100';   // ng

function formatCmdLine(command: string | string[]): string {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  return line;
}

function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

console.log(extend({ a: 1 }, { b: 2 }));

let nameNumber: [string, number];
nameNumber = ['john', 100];

let [name2, num2] = nameNumber;
console.log(name2);
console.log(num2);

type StrNum = string | number;
let sample: StrNum;
sample = 123;
sample = 'hoge';
//sample = True;  // error

type Text = string | { text: string };
type Coordinates = [number, number];
type callback = (date: string) => void;

// グローバル定義
//f: fxxxx = 'test';

// enum
enum Color {
  Red = 9,
  Green,
  Blue,
}
let col = Color.Red;
console.log(col);

interface Foo2 {
  foo: string;
}

function foo5(s: Foo2): Foo2 {
  return s;
}

function hoge12(a: string, b?: string) {
  console.log(a);
  console.log(b);
}

hoge12('a', 'b');
hoge12('a');

interface ReturnString {
  (): string;
}

declare const fooo: ReturnString;
const baaar = fooo();

//----------------------------------------------------------

//-------------------------------------------------------------------------------
console.log('==> end ttdd.ts');
