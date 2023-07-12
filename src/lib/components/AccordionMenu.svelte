<script lang="ts">

  import '@material/mwc-list/mwc-list';
  import '@material/mwc-list/mwc-list-item';

  // NAVBAR-DRAWER に実行権を渡す: drawer.open=false 
  import { createEventDispatcher, onDestroy } from 'svelte';
  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  import { fly } from "svelte/transition";
  import { ArrowForward, Bookmark, Folder } from "../../assets/material-icons/_index";

  // export let entry;
  export let category;
  export let items;

  let isOpen = false
  const toggle = () => isOpen = !isOpen
  let bmColor = "#aed581";

</script>

  <!-- FOLDER ICON TOGGLE -->
  {#if isOpen }

    <!-- FOLDER OPEN -->
    <mwc-list-item graphic="avatar"
                   on:click={toggle} 
                   aria-expanded={isOpen}
                   on:keydowny>
      <span class="item">
        {category}
      </span>
      <mwc-icon slot="graphic" class="open">
        <span><Folder color="white" /></span>
      </mwc-icon>
    </mwc-list-item>

  {:else}

    <!-- FOLDER CLOSE -->
    <mwc-list-item graphic="avatar"
                   on:click={toggle}
                   aria-expanded={isOpen}
                   on:keydowny>
      <span class="item">
        {category}
      </span>
      <mwc-icon slot="graphic" class="close">
         <span><Folder /></span>
      </mwc-icon>
    </mwc-list-item>

  {/if}


  <div class="menus">

    {#if isOpen}
        <mwc-list in:fly="{{ y: -20, duration: 800 }}" 
                  out:fly="{{ y: -10, duration: 400 }}"
                  class="open-list">
	        {#each items as {name, ref}}
            <a href="{ref}" rel="noreferrer">
                <mwc-list-item hasMeta on:click="{()=>close()}">
<!--                <mwc-list-item hasMeta on:click="{()=>{close,drawer.open=false}">-->
                  <span>{name}</span>
                  <mwc-icon slot="meta" class="open-list-icon">
                     <span><ArrowForward color="gray"/></span>
                  </mwc-icon>
                </mwc-list-item>
            </a>
            <li divider role="separator"></li>
	        {/each}

        </mwc-list>
    {/if}
    
  </div>

<style>

	.menus { width:100%; }

	/* 
	button {
	  border: none; 
	  background: none;
	  display:block; 
	  color: inherit; 
	  font-size: 1em;
	  font-family: Roboto;	  
	  cursor: pointer; 
	  margin: 0; 
	  padding-bottom: 0.2em; 
	  padding-top: 0.2em;
	}
	.middle, .item, .subItem{ vertical-align:middle; }
	.item{ padding-top: 0px;	}
	.subItem{ padding-top:0px; }
	 
	 */

  mwc-icon {
    background-color: gray;
    color: white;
  }
  
  .open {
    background-color:blue;
  }

  .open-list {
    margin-left:0px;
  }

  .open-list-icon {
	  --mdc-icon-size:16px;
	  background-color:#fff;
	}
	
	.open-list-icon span, .open span, .close span {
	  vertical-align:middle;
	  padding-top:6px;
	}
	
  .close {
    background-color:#cccfcd;
  }
  
</style>
