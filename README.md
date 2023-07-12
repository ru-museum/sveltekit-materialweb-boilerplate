# sveltekit-materialweb-boilerplate
Boilerplate for Sveltekit with Material-Web(MWC v0.27.0)

# 準備中です(In Preparation)。



# 概要
- これは [**Sveltekit**](https://github.com/sveltejs/kit) を元に [**Material-Web**](https://github.com/material-components/material-web/tree/v0.27.0/packages)(MWC v0.27.0) を実装した Website Template です。
- **Material-Web** は最新版が現時点では未整備で完全ではない為に v0.27.0 版を使用しています。
- メニューは自動で生成され増減を自由にカスタマイズ出来ます。　
- ページの増減は **Sveltekit** に準じています。
- 一部旧版のパッケージを使用している部分があります(@material/card, @material/layout-grid)。
- 
- 
- 

# TODO
- **layout-grid** による画像表示。

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

1. 新規の project を以下によりCRONするかZIPファイルをダウンロードします。
```
npx degit ru-museum/sveltekit-materialweb-boilerplate#main svelte-app
cd svelte-app
npm install

npm run dev      // localhost:5173
npm run build
npm run preview  // localhost:4173
```
2. 生成されたファイル構成は以下の様になっています。
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
- **material-icons** は最小限度に止めてありますので、必要な場合はダウンロードし **_index.js** の記述に倣い導入して下さい。 
- 他のパッケージの icon も SVG ファイルを
3.
4. 
5.
