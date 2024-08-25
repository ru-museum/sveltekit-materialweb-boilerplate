# sveltekit-materialweb-boilerplate changelog

2024-08-25  
- 各パッケージのバージョンをアップデートしました（svelte 4.2.19）。

2024-02-21  
- 各パッケージのバージョンをアップデートしました（svelte 4.2.11）。  
- vite 5.1.3 へのバージョンアップによる不具合の為、  
	"@sveltejs/**vite-plugin-svelte**": "^3.0.2"　をインストールしました。  

**エラー内容**：
```
error when starting dev server:
...
import { vitePreprocess } from '@sveltejs/kit/vite';
         ^^^^^^^^^^^^^^
SyntaxError: The requested module '@sveltejs/kit/vite' does not provide an export named 'vitePreprocess'
```

// **svelte.config.js**
```
- import { vitePreprocess } from '@sveltejs/kit/vite';
+ import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
```
　　参照：[**vitePreprocess**](https://kit.svelte.dev/docs/integrations#preprocessors-vitepreprocess) // SVELTEKIT/Docs


2023-12-10  
- 各パッケージのバージョンをアップデートしました（svelte 4.2.8）。  
- vite 5.0.7 へのバージョンアップは不具合の為一時的に "4.5.1" へと戻してあります。  
**エラー内容**：@sveltejs/kit が ^4 を参照しているため。
```
Found: vite@5.0.7
.....
npm ERR! Could not resolve dependency:
npm ERR! peer vite@"^4.0.0" from @sveltejs/kit@1.27.7
```

2023-07-25  
- 各パッケージのバージョンをアップデートしました（svelte 4.1.1）。

2023-07-13   
- α 版として公開しました。


