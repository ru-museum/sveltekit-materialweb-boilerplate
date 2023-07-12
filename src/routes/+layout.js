
export const prerender = true
export const ssr = false


   let y = 0; // スクロール位置：Y座標初期値 
   // Top に戻る 	
   function toTop() {
	     document.body.scrollTop = 0;
	     document.documentElement.scrollTop = 0;
   }




export function load() {

    return { 
		      presets: {
		        year : new Date().getFullYear(),
		        name:"SvelteKit(Svelte 4.0.1): Material-Web(MWC v0.27.0)",
		        title:"HOMEPAGE",
            subtitle:"subtitle",
		        admin:"責任者氏名",
		        mail : "sample&#64;yahoo.co.jp",
		        creator:"藍土工房",
		        creator_mail : 'land_koubou&#64;yahoo.co.jp'
        	}
    };

}
