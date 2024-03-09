function hello(name: string) {
  console.log(`hello ${name}`)
}

const main = () => {
  console.log('start main')

  // 型について,推論でもOK
  const num1: number = 123
  const num2 = 123
  const str1: string = 'aaaa'
  const str2 = 'aaaa'

  // 型を固定値にできる
  const num: 1 | 2 | 3 = 3

  // any
  hello('john')

  // オブジェクトの型注釈
  let box: { w: number; h: number }

  box = { w: 100, h: 200 }
  console.log(box)

  // 型エイリアス
  type Box = {
    width: number
    height: number
  }

  let box2: Box = { width: 99, height: 100 }
  console.log(box2)

  // メソッドの型注釈
  let calc: {
    sum(x: number, y: number): number
  }

  calc = {
    sum(x, y) {
      return x + y
    },
  }
  console.log(calc.sum(1, 2))

  let calc2: (x: number, y: number) => number
  calc2 = (x, y) => {
    return x + y
  }
  console.log(calc2(2, 3))

  // 配列
  let arr1: number[]
  arr1 = [1, 2, 3]
  console.log(arr1)
  let arr2: Array<number>
  arr2 = [1, 2, 3]
  console.log(arr2)

  // スプレッド構文(浅いコピー、一層目まで)
  let arr3 = [2, 3, 4]
  let arr4 = [...arr3]
  console.log(arr4)

  // enum
  enum Position {
    Top,
    Right,
    Bottom,
    Left,
  }
  console.log(Position.Left)

  let pos: Position
  pos = Position.Right
}

main()
