
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
		        name:"sveltekit-materialweb-boilerplate",
		        title:"HOMEPAGE",
            subtitle:"subtitle",
		        admin:"責任者氏名",
		        mail : "sample&#64;***.co.jp",
		        creator:"○○工房",
		        creator_mail : '***&#64;***.co.jp'
        	}
    };

}
