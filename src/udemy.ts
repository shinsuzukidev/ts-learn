console.log('__udemy start\n');
//__________________________________________________________

//____________________ 型
let isValue: boolean = true;
let str1: string = 'sakai';
let num1: number = 1;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

//____________________ オブジェクトの型
const person: {
  name: string;
  age: number;
} = {
  name: 'jojo',
  age: 30,
};

console.log(person.name);

//____________________ 配列
const fruits: string[] = ['apple', 'orange', 'banana'];

//____________________ Tupple型
const book: [string, number, boolean] = ['buisiness', 100, true];

//____________________ Enum
enum Season {
  SPRING,
  SUMMER,
  FALL,
  WINTER,
}

let currentSeason: Season = Season.FALL;

//____________________ any
let anything: any = '';
anything = true;
anything = 100;
anything = {};
anything = [];

//____________________ Union型
let unionType: string | number;
unionType = 10;
unionType = 'abc';
let unionTypes: (string | number)[] = [10, 'abc'];

//____________________ Literal型
let attackType: 'gun' | 'punch' = 'gun';
// attackType = 'katana'; // ng

//____________________ type
type Person = {
  name: string;
  age: number;
};

let p: Person = {
  name: 'john',
  age: 30,
};

console.log(p.name);

//____________________ function(戻り値は推論でも大丈夫、省略しても構わないけど、書くよ)
function add(num1: number, num2: number): number {
  return num1 + num2;
}

let r = add(1, 2);

// 戻り値がない場合はvoid
function output(message: string): void {
  console.log(message);
}
output('hello');

//____________________ 関数型
let add2: (n1: number, n2: number) => number;
let r3 = (add2 = (x, y) => {
  return x + y;
})(1, 2);
console.log(r3);

let add3 = (x: number, y: number) => x + y;
let add4 = (x: number, y: number): number => {
  return x + y;
};

function doubleNumber(num: number, cb: (num: number) => number) {
  console.log(cb(num));
}
doubleNumber(10, (x) => x * 2);

//____________________ unknown
let unknownValue: unknown;
let text: string;
unknownValue = 123;

// unknownの型はanyより厳しい、まあ確認後に入れることが可能ですと
if (typeof unknownValue === 'string') {
  text = unknownValue;
} else {
  //text = unknownValue;  //こちらはエラー
}

//____________________ never (値を返さない)
function error(message: string): never {
  throw new Error(message);
}
// error('test error!');

//__________________________________________________________
console.log('\n__udemy end');
