//____________________ インターセクション型
type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EngineerBlogger = Engineer & Blogger;
const eb: EngineerBlogger = {
  name: "jojo",
  role: "dba",
  follower: 10000,
};

console.log(eb);

//____________________ タイプガード
//________ typeof
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else {
    return "";
  }
}
console.log(toUpperCase("abc"));

//________ in
function getRole(t: Engineer | Blogger) {
  if ("role" in t) {
    return t.role;
  } else {
    return "no-role";
  }
}
let engineer: Engineer = { name: "jojo", role: "dba" };
console.log(getRole(engineer));
let blogger: Blogger = { name: "jojo", follower: 100 };
console.log(getRole(blogger));

//________ instanceof 生成クラスをチェック
class Dog {
  speak(): string {
    return "wan";
  }
}
class Cat {
  speak(): string {
    return "nya";
  }
}

type Pet = Dog | Cat;
function getCatSpeak(x: Pet) {
  if (x instanceof Cat) {
    return x.speak();
  }

  return "";
}

console.log("cat:" + getCatSpeak(new Cat()));
console.log("dog:" + getCatSpeak(new Dog()));

//____________________ タグ付きユニオン
interface Bird {
  kind: "bird";
  move: string;
}

interface Fish {
  kind: "fish";
  move: string;
}

type Pet2 = Bird | Fish;
let mypet: Pet2 = { kind: "bird", move: "fly" };

function getPet2Type(pet2: Pet2) {
  switch (pet2.kind) {
    case "bird":
      console.log("pet-type2-bird");
      break;
    case "fish":
      console.log("pet-type-fish");
      break;
    default:
      break;
  }
}

console.log(getPet2Type(mypet));

//____________________ 型アサーション(型を指定する)
// 方法1
// const input = <HTMLInputElement>document.getElementById("input");
// input.value = "init text";

// 方法2
// const input = document.getElementById("input") as HTMLInputElement;
// input.value = "init text";

//____________________ non-null assertion operator (nullではない)
// HTMLELement| null → HTMLELement になる
//const input = document.getElementById("input")!;

//____________________ インデックスシグネチャ
interface Desinger {
  name: string;
  [index: string]: string; // プロパティを追加可能、定義済みの型と同様でないと駄目
}

const designer: Desinger = {
  name: "jojo",
  role: "dba", // add
  city: "tokyo", // add
};

//____________________ 関数のオーバーロード (定義は認識されなくなる)
function toUpper(x: string): string;
function toUpper(x: number): number;
function toUpper(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}
const c1 = toUpper("abc");
const c2 = toUpper(10);

//____________________ オプショナルチェイニング
interface UserInfo {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const ui: UserInfo = {
  id: 1,
};

console.log(ui.user?.name?.first);

//____________________ Nullish Coalescing
const user = ui.user ?? "no-user";
console.log(user);

//____________________ Lookup型 (オブジェクトのメンバーの型を取得)
type UserInfo_id = UserInfo["id"];
type UserInfo_user = UserInfo["user"];

//____________________ 


//____________________
