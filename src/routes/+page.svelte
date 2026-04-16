<script lang="ts">

  export let data;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
<h1 class="mdc-typography--headline4">{data.presets.name}</h1>
<h1 class="mdc-typography--headline4">SvelteKit + Material-Web(MWC v0.27.0)</h1>

<h1 class="mdc-typography--headline1">Home</h1>
	<h2>
		<strong>src/routes/+page.svelte</strong>
	</h2>
<h1>USAGE</h1>
<ol>
  <li><h3>package.json</h3>
<pre>
"@fontsource/fira-mono": "^5.2.7",
"@neoconfetti/svelte": "^2.2.2",
"@sveltejs/adapter-auto": "^7.0.1",
"@sveltejs/adapter-static": "^3.0.10",
"@sveltejs/kit": "^2.57.1",
"@sveltejs/vite-plugin-svelte": "^7.0.0",
"@types/cookie": "^1.0.0",
"svelte": "^5.55.4",
"svelte-check": "^4.4.6",
"svelte-preprocess": "^6.0.3",
"typescript": "^5.9.3",
"vite": "^8.0.8"
</pre>
※ typescript は svelte-preprocess 依存のため "<strong>5.9.3</strong>（latest: 6.0.2）" です。
  </li>
  <li><h3>npm install: warn deprecated</h3>
<pre>
// 以下の警告が表示されます(MWC)
npm warn deprecated @material/mwc-top-app-bar@0.27.0: 
  MWC beta is longer supported. Please upgrade to @material/web
....（略）....
</pre>
</li>
</ol>

<h1>LINKS</h1>
<a href="https://github.com/material-components/material-web/tree/v0.27.0/packages" target="_blank" rel="noreferrer">material-web（MWC v0.27.0）</a><br>
<a href="https://github.com/material-components/material-components-web/tree/master/packages" target="_blank" rel="noreferrer">material-components-web:MDC</a><br>
<a href="https://kit.svelte.dev/docs/introduction" target="_blank" rel="noreferrer">SvelteKit-docs</a>

  {#each new Array(40) as {}}
    <br>
  {/each}

</div>

