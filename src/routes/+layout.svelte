<script>

  export let data;  
  let y = 0; // スクロール位置：Y座標初期値 

	import Header from './Header.svelte';
	import './styles.css';
	import '@material/typography/dist/mdc.typography.min.css';
  import ToTopButton from '$lib/components/ToTopButon.svelte';
  import Footer from '$lib/components/Footer.svelte';

</script>

<svelte:window bind:scrollY={y}/>
<!--「TOPへ戻る」ボタンの表示 -->
{#if y > 200}
  <ToTopButton />
{/if}

<div class="app">
	<Header pre="{data.presets}" />

	<main>
		<slot />
	</main>

	<Footer pre="{data.presets}" />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		/*max-width: 64rem;*/
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* 
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	 
	 */
	
	
</style>
