の# sveltekit-materialweb-boilerplate
Boilerplate for Sveltekit with Material-Web(MWC v0.27.0)

# 準備テスト中です(In Preparation)。
# 概要
- これは [**Sveltekit**](https://github.com/sveltejs/kit) を元に [**Material-Web**](https://github.com/material-components/material-web/tree/v0.27.0/packages)(MWC v0.27.0) を実装した Website Template です。
- **Material-Web** は最新版が現時点では未整備で完全ではない為に v0.27.0 版を使用しています。
- メニューは自動で生成され増減を自由にカスタマイズ出来ます。　
- ページの増減は **Sveltekit** に準じています。
- 一部旧版のパッケージを使用している部分があります(@material/card, @material/layout-grid)。

# 使用方法
- この **Boilerplate** の **Sveltekit** は以下により生成されています。
```
 npm create svelte@latest test01

 Which Svelte app template?
│  SvelteKit demo app
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
◇  Select additional options (use arrow keys/space bar)
│  ◻ Add Prettier for code formatting
```

## 1. 新規 project 作成 
- 以下により **CRON** するか **ZIPファイル**をダウンロードします。
```
npx degit ru-museum/sveltekit-materialweb-boilerplate svelte-app
cd svelte-app
npm install
```
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
- **material-icons** は最小限に止めてありますので、必要な場合はダウンロードし **_index.js** 及び以下のの記述に倣い導入して下さい。 
- 他のパッケージの icon(svg) も 同様に使用出来ます。
## アイコンファイル(.svelte)作成例
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
## 3. 動作確認とビルド
```
npm run dev      // localhost:5173
npm run build
npm run preview  // localhost:4173
```
## build されたファイル構成
```
build 
└── _app
    ├── about.html
    ├── favicon.png
    ├── index.html
    ├── robots.txt
    └── work.html
```
