//____________________ generic
function copy<T>(value: T): T {
  return value;
}

console.log(copy<number>(100));
console.log(copy<string>("abc"));

//____________________ 型パラメータに制約をつける
function copy2<T extends { name: string }>(value: T): T {
  return value;
}

console.log(copy2<{ name: string }>({ name: "abc" }));

//____________________ keyof、 キーからunionを作成
type K = keyof { name: string; age: number };

//____________________ class, generic
class List<T> {
  private datas: T[] = [];
  public add(item: T) {
    this.datas.push(item);
  }
  public remove(item: T) {
    this.datas.splice(this.datas.indexOf(item), 1);
  }
  public getDatas() {
    return this.datas;
  }
}

let list = new List<string>();
list.add("abc");
list.add("def");
list.add("ghi");
list.remove("def");
console.log(list.getDatas());

//____________________ inteface,type
//____ interface
interface JobType<T> {
  id: number;
  role: T[];
}

let job: JobType<string> = { id: 1, role: ["dba", "web", "server"] };
console.log(job.role);

//____ type
type JobType2<T> = {
  id: number;
  role: T[];
};

let job2: JobType2<string> = { id: 1, role: ["dba", "web"] };
console.log(job2.role);

//____________________ Utility
interface Todo {
  title: string;
  text: string;
}

type Todoable = Partial<Todo>; // オプション
type Todoreadonly = Readonly<Todo>; // リードオンリー

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 200);
});
fetchData.then((data) => console.log(data.toUpperCase()));

interface TodoEx extends Todo {
  date: string;
}
