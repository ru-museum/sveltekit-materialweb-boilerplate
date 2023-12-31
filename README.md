# sveltekit-materialweb-boilerplate
Boilerplate for Sveltekit with Material-Web(MWC v0.27.0)

# 概要
- これは [**Sveltekit**](https://github.com/sveltejs/kit) を基に [**Material-Web**](https://github.com/material-components/material-web/tree/v0.27.0/packages)(MWC v0.27.0) を実装した Website Template です。
- **Material-Web** は最新版が現時点では未整備で完全ではない為に v0.27.0 版を使用しています。
- MWC に無い **card**、**layout-grid** は、旧 MDC で代用しています。
- メニューは自動で生成され自由にカスタマイズ出来ます。　
- ページの増減は **Sveltekit** に準じています。

# 使用方法
- この **Boilerplate** の基となる **Sveltekit** は以下により生成されています。
```
 npm create svelte@latest svelte-app

 Which Svelte app template?
│  SvelteKit demo app
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
◇  Select additional options (use arrow keys/space bar)
│  ◻ Add Prettier for code formatting
```

## 1. 新規 project 作成 
- 以下により **クローン** するか **ZIPファイル**をダウンロードします。
```
npx degit ru-museum/sveltekit-materialweb-boilerplate#main svelte-app
cd svelte-app
npm install
```
- **#main** の指定が必要。

## ファイル構成
```
├── SRC
│   ├── assets
│   │   ├── images
│   │   │   └── sample1.png
│   │   └── material-icons
│   │       ├── _index.js
│   │       ├── account-balance.svelte
│   │       ├── （略）
│   │       └── person.svelte
│   ├── lib
│   │   ├── components
│   │   │   ├── AccordionMenu.svelte
│   │   │   ├── Breadcrumb.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Loading.svelte
│   │   │   ├── Navbar.svelte
│   │   │   └── ToTopButon.svelte
│   │   ├── data
│   │   │   └── menues.js
│   │   └── images
│   │       ├── github.svg
│   │       └── svelte-logo.svg
│   ├── routes
│   │   ├── about
│   │   │   ├── +page.js
│   │   │   └── +page.svelte
│   │   └── work
│   │   │   ├── +page.js
│   │   │   └── +page.svelte
│   │   ├── +layout.js
│   │   ├── +layout.svelte
│   │   ├── +page.js
│   │   ├── +page.svelte
│   │   ├── Header.svelte
│   │   └── styles.css
│   ├── app.d.ts
│   └── app.html
└── static
    ├── data
    │   └── data-items.json
    └── images
    │   ├── sample1.png
    │   ├── sample2.png
    │   └── sample3.png
    ├── favicon.png
    └── robots.txt
```
## ページの追加
- **routes** フォルダへ追加します。
- href="newfilename" でアクセスを行います。
```
├── routes
    ├── newfilename
    │   ├── +page.js
    │   └── +page.svelte
```

## メニューの追加
- lib/data/**menues.js**へ追加します。
- **CATEGORY** 全体の追加も可能です。
```
{
  category: 'CATEGORY II',
  items: [
     {name:"HOME", ref:"/"},
     {name:"WORK", ref:"work"},
     {name:"NEWFILENAME１", ref:"newfilename1"},// 追加項目１
     {name:"ABOUT", ref:"about"},
     {name:"NEWFILENAME２", ref:"newfilename2"} // 追加項目２: 最終行の末尾には " , " を付加しません
  ]
},
```

## アイコンファイル(.svelte)作成例
- **material-icons** は最小限に留めていますので、必要な場合は svg ファイルをダウンロードし **_index.js** 及び以下の記述を参考に導入して下さい。 
- 他の ICON パッケージ (svg) も 同様に使用出来ます。
 
【SVG アイコン】.svg  
```
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g>....(略)...</svg>
```
【アイコンファイル】.svelte
```
<script>
  export let size = "1em";
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>
<svg fill={color} width="{size}" height="{size}" viewBox="{viewBox}"><g>....(略)...</svg> 
```
## 2. 動作確認とビルド
```
npm run dev      // localhost:5173
npm run build
npm run preview  // localhost:4173
```
## build されたファイル構成
```
build 
├── _app
│   └── (略)
├── data
│   └── data-items.json
├── images
│   ├── sample1.png
│   ├── sample2.png
│   └── sample3.png
├── about.html
├── favicon.png
├── index.html
├── robots.txt
└── work.html
```
## 3. 公開テスト
- 公開するにはフォルダ **build** 以下をサーバーへ設置します。
-  **build** 以外の**任意のフォルダ**で検証するにはサーバーを立てる必要があります。
## ローカルサーバーでのテスト：Ruby
```
# ruby -rwebrick -e 'WEBrick::HTTPServer.new(:DocumentRoot => "./", :Port => 8000).start'
```
