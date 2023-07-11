
<script lang="ts">

  export let pre; // layout.js - presets
  import { onMount } from 'svelte';

  import AccordionMenu from './AccordionMenu.svelte';
  // import ToTopButton   from './ToTopButon.svelte';

  import { AccountBalance, Bookmark, Close, Edit, Folder, Help, MenuButton, 
           MoreVert, Info, Person } from '../../assets/material-icons/_index';
  
  import '@material/mwc-drawer';
  import '@material/mwc-button';
  import '@material/mwc-icon-button';
  import '@material/mwc-top-app-bar-fixed';
  import '@material/mwc-list';
  import '@material/mwc-menu';
  // import '@material/mwc-icon-button-toggle';

  var drawer;
  onMount(() => {

    drawer = document.getElementsByTagName('mwc-drawer')[0];
    if (drawer) {
        const container = drawer.parentNode;
        container.addEventListener('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
        });
    }

    // MENU-BUTTONS ACTION
    for (var i = 0; i < menues.length; i++) {
    　　// eval("var num_" + i + "=" + i + ";");
       eval("menu"   + i + ".anchor = button" + i + ";");
       eval("button" + i + ".addEventListener('click', function (e){ menu" 
                     + i + ".open = true; });" );
    }

    menuInfo.anchor = info;
    info.addEventListener('click', function (e) {
      menuInfo.open = true;
      // alternatively you can use menu.show();
    });
    
  });
  
  
  function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
  }
 
 	const menues = [
		{
			category: 'WORK',
			items: [
					      {name:"HOME", ref:"/"},
      					{name:"WORK", ref:"work"},
					      {name:"ABOUT", ref:"about"},
					      {name:"PAGE01", ref:"page01"},
					      {name:"PAGE02", ref:"page02"},
					      {name:"PAGE03", ref:"page03"},
					      {name:"PAGE04", ref:"page04"},
					      {name:"RusKeyboard", ref:"rus-keyboard"}
       			 ]
		},
		{
			category: '情 報',
			items: [
      					{name:"●ロシアの美術館・博物館", ref:"info-museums"},
					      {name:"ロシア美術関係リンク", ref:"none"},
					      {name:"ロシア新聞記事：文化", ref:"none"},
					      {name:"ロシア新聞記事：社会", ref:"none"},
					      {name:"ロシア新聞記事：デジタル", ref:"none"}
       			 ]
		},
		{
			category: '資 料',
			items: [
                 {name:"Work", ref:"work"},
                 {name:"Page01", ref:"page01"},
                 {name:"●ヴェレシチャーギン資料", ref:"resources-vere"},
                 {name:"●日露関係資料", ref:"resources-rujp"},
                 {name:"デジタル資料収集方法", ref:"none"}, // resources-digital
                 {name:"資料レポジトリ", ref:"none"}
       			 ]
		},

		{
			category: 'ロシア語',
			items: [
                 {name:"Lists", ref:"none"},
                 {name:"ロシアのテレビ・ラジオ", ref:"none"},
                 {name:"ロシア現代用語", ref:"none"},
                 {name:"ロシア語用ソフト", ref:"soft"}
       			 ]
		},

		{
			category: 'LINUX',
			items: [
                 {name:"●LINUXでロシア語使用方法", ref:"linux-rus"},
	  		         {name:"LINUX-Tips", ref:"linux-tips"},
                 {name:"Debian Install Tutorial", ref:"none"}
       			 ]
		},

		{
			category: 'LINUXII',
			items: [
                {name:"●LINUXでロシア語使用方法", ref:"linux-rus"},
				      	{name:"●LINUX-Tips", ref:"linux-tips"},
                {name:"Debian Install Tutorial", ref:"none"}
              ]      
    },
    
		{
			category: 'Programing',
			items: [
               {name:"Lists", ref:"none"},
               {name:"ロシアのテレビ・ラジオ", ref:"none"},
               {name:"ロシア現代用語", ref:"none"},
               {name:"ロシア語用ソフト", ref:"soft"}
       			 ]
		}
		
	]
</script>

<mwc-drawer hasHeader type="modal">

    <span slot="title">
      {pre.title}
      <span class="close-side">
        <mwc-icon-button on:click="{()=> drawer.open = false}">
          <Close size="0.6em" color="#03a9f4" />
        </mwc-icon-button>
      </span>

    </span>
    <span slot="subtitle">
       {pre.subtitle}
    </span>

    <div>
        <!-- Drawer content -->
        <li divider padded role="separator"></li>

        {#each menues as {category, items}}
          <AccordionMenu {category} {items} on:close="{() => drawer.open=false}" />
        {/each}

    </div>
    
    <div slot="appContent">
        
        <mwc-top-app-bar-fixed>
            <mwc-icon-button slot="navigationIcon">
              <MenuButton />
            </mwc-icon-button>
            
            <div slot="title" 
                 style="cursor:pointer;">
              <a href="/" rel="noreferrer" style="color:white;"> 
                {pre.title}
              </a>
            </div>
            
            {#each menues as {category, items}, i}

                <mwc-button class="display" 
                            id="button{i}" 
                            raised 
                            label="{category}" 
                            slot="actionItems"></mwc-button>
                <mwc-menu fixed id="menu{i}" corner="BOTTOM_START">

          	      {#each items as {name,ref}}    
                     <a href="{ref}" rel="noreferrer">
                       <mwc-list-item>{name}</mwc-list-item>
                     </a>
                  {/each}

                </mwc-menu>

            {/each}
            
            <!-- 右 BUTTONS -->
            <mwc-icon-button slot="actionItems">
              <Help />
            </mwc-icon-button>
            <mwc-icon-button id="info" slot="actionItems">
              <Info />
            </mwc-icon-button>

            <!-- INFOMATION -->
            <mwc-menu fixed id="menuInfo" corner="BOTTOM_START">

              <mwc-list-item hasMeta class="close">
                <mwc-icon slot="meta">
                   <Close color="#f27d74" />
                </mwc-icon>
              </mwc-list-item>
  
              <div class="infomation">
                <mwc-icon style="vertical-align:middle;">
                    <AccountBalance size="1.2em" />
                </mwc-icon>
                <span style="font-size:1.4em;">{pre.title}</span>
                <div class="subtitle">
                  {pre.subtitle}
                </div>

                <li divider></li>
                <li divider padded role="separator"></li>

                <div style="padding-top:8px;">
                    <table>
                      <tbody>
                        <tr>
                          <th>管理者</th>
                          <td>{pre.admin}</td>
                        </tr>
                        <tr>
                          <th>eMail</th>
                          <td>{@html pre.mail}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              
              </div>

              <li divider></li>

                <div class="creator">
                  <div>
                    <span class="copyright">制作・著作</span>{pre.creator}
                  </div>
                  <div class="mail">{@html pre.creator_mail}</div>
                </div>

            </mwc-menu>
        </mwc-top-app-bar-fixed>
    </div>

</mwc-drawer>

<style>

/* 
 lang="scss"

@media(min-width:751px){*/
@media(max-width:950px){
  .display{
    /*display:none;*/
    visibility: hidden;
  }
}

  .close{
    border-radius:6px;
    background-color:white;
    margin-left:220px;
    width:20px;
    height:42px;
  }

  .close-side {
    padding-left:60px;
  }

  .infoTitle{
  }

  .subtitle {
    margin-left:34px;
    padding-bottom:26px;
    font-size:1em;
    border:solid 1px #fff;
    border-bottom-color: #ccc;
  }

  .infomation { 
    padding:10px;
    background-color: #fcfcfc;
    width: 260px; 
    height: 260px; 
  }

  .creator {
    text-align:center;
    padding:16px 10px 10px 10px;
  } 
  
  .copyright {
    font-size:0.8em;
    font-weight:bold;
    padding-right:16px;
  }

  .mail{
    font-size:0.8em;
  }

</style>



