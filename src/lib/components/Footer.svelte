<script>

  export let pre;

  import { AccountBalance, MailOutline, Person } from '../../assets/material-icons/_index';

</script>

<div class="footer">

  <article class="contact-card">

	  <div class="admin">
	     <h2>
         <mwc-icon style="vertical-align:middle;">
            <AccountBalance size="1em" color="#fff" />
         </mwc-icon>
		     { pre.title }
	     </h2>
	  </div>

	  <div class="address">
        <mwc-icon style="vertical-align:middle;">
           <MailOutline size="1em" color="#fff" />
        </mwc-icon>
        {@html pre.mail }
	  </div>
	  
	  <div class="copy">
        &copy; 2007 - { pre.year }&nbsp;&nbsp;&nbsp;{ pre.name }
	  </div>

  </article>

</div>


<style>

   .admin, .copy {
	   text-align:center;
      color: #ccc; 
   }
   .copy{
		padding: 10px 0px 40px 0px;
   }

   .footer{
	   background-color:#62757f;
   }

	.contact-card {
   	margin: 0 auto;
		width: 300px;
		padding: 1em;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
	}

	.address {
		padding: 0 0 0 1.5em;
		margin: 0 0 0.5em 24px;
		line-height: 1.2;
      color: #ccc; 
	}

</style>
