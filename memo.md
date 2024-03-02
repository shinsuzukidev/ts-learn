# TypeScript

## TS ファイルのコンパイルと実行

### 指定した TS ファイルをコンパイル

tsc コマンドにより index.ts をコンパイルする。

```bash
$ tsc index.ts
```

実行後に index.js が作成される。
index.js の動作を確認する場合は node から実行する。

```bash
$ node index.js
```

watch オプションはファイルの更新をチェック、コンパイルする。

```bash
$ tsc index.ts --watch
```

### ts.coinfig

init オプションにより tsconfig.json ファイルを作成。

```bash
$ tsc --init
```

tsc コマンドにより \*.ts ファイルをコンパイルする。

```bash
$ tsc
```

監視する場合は同様に watch オプションを使用する。

```bash
$ tsc --watch
```

### ts-node

TypeScirpt ファイルを実行する。  
npm から ts-node をインストール。次のように実行する。

```bash
$ npx ts-node src/main.ts
```
