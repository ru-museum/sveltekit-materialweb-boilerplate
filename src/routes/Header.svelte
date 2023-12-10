
<script type="module">
  export let pre;  

	import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<header>
  <Navbar {pre} />
</header>

<style>
/*
  mwc-drawer[open] top-app-bar {
    Default width of drawer is 256px. See CSS Custom Properties below 
    --mdc-top-app-bar-width: calc(100% - var(--mdc-drawer-width, 256px));
  }
*/

	header {
		display: flex;
		justify-content: space-between;
	}

/*
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	*/
	
</style>
