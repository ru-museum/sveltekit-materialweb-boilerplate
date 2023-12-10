<script>

  import { ArrowUpward } from '../../assets/material-icons/_index';

  /** FAB：背景色が無効となる時 */
  import '@material/mwc-fab';
  // import '@material/mwc-fab/mwc-fab.js';
  // import '@material/mwc-icon/mwc-icon.js';

  /** TOP に戻る */
   function toTop() {
	     document.body.scrollTop = 0;
	     document.documentElement.scrollTop = 0;
   }

</script>

<div id="btn-to-top">
        
  <mwc-fab label="toTop"
           class="greenAndGray"
           on:click="{() => toTop()}" on:keydown role="button" tabindex="0">
    <mwc-icon slot="icon">
      <ArrowUpward size="2em" />  
    </mwc-icon>
  </mwc-fab>
  
</div>
   

<style>

  .greenAndGray {
    --mdc-theme-on-secondary: white;
    --mdc-theme-secondary: #3f51b5; /*#6069bd*/
    margin-right: 0px;
  }

  /* 戻るボタン */	
  #btn-to-top {
   position: fixed;
   vertical-align:bottom;
   right: 10px;
   bottom: 10px;
   z-index: 9999;
  }

</style>

