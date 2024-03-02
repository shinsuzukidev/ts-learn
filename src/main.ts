function hello(name: any) {
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

  // "trailingComma": "none",
}

main()
