<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
<h1 class="mdc-typography--headline1">Home</h1>
	<h2>
		<strong>src/routes/+page.svelte</strong>
	</h2>

<h1>LINKS</h1>
<a href="https://github.com/material-components/material-web/tree/v0.27.0/packages" target="_blank" rel="noreferrer">material-web（MWC v0.27.0）</a><br>
<a href="https://github.com/material-components/material-components-web/tree/master/packages" target="_blank" rel="noreferrer">material-components-web:MDC</a><br>
<a href="https://kit.svelte.dev/docs/introduction" target="_blank" rel="noreferrer">SvelteKit-docs</a>

  {#each new Array(40) as {}}
    <br>
  {/each}

</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
