
<script>
  export let pre;  

  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<header>
  <Navbar {pre} />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
