# DriveFileUtils

Google app script用の Google Drive ファイルを扱うラッパーライブラリ

## 必要環境

* nodejs v9.2.0
* google app script

## 開発に必要なnpmパッケージ

* clasp
* typescript
* @types/google-apps-script
* tslint
* rollup
* @rollup/plugin-babel 
* @rollup/plugin-node-resolve 
* @babel/preset-env 
* @babel/preset-typescript 
* @babel/plugin-transform-runtime 
* @rollup/plugin-node-resolve
* rollup-plugin-gas
 
## 準備

1. `npm install` により、npmモジュールをインストール
1. `clasp login` を実行すること
1. `npm run init` を実行すること

## ビルド方法

```bash
npm run build
```

## gasへのアップロード方法

### リリースモジュール

```bash
npm run push
```

### テスト用モジュール

```bash
npm run push_test
```

### 発効後プロジェクト確認方法

```bash
npm run open
```

または

```bash
clasp open
```