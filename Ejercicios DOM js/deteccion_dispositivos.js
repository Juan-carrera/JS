
const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDivice (id) {


    let $id = d.getElementById(id);

    const isMobile = {
    android : () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows : () => ua.match(/windows phone/i),
    any : function () {
        return this.android() || this.ios() || this.windows();
    } 
    };


    const isDesktop = {
        linux : () => ua.match(/linux/i),
        windows : () => ua.match(/windows nt/i),
        mac : () => ua.match(/mac os/i),

        any: function (){
            return this.linux() || this.windows ()  || this.mac();
        }
    };


    const isBrowser = {

        chrome : () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|rv|iemobile/i),
        edge : () => ua.match(/edge/i),

        any: function (){
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            );
        }

    };


    //console.log(isMobile.ios() );

    $id.innerHTML = `
    
    <ul> 
    
    <li>User Agent : <b> ${ua} </b></li>

    <li>Plataforma : <b> ${
        isMobile.any() ? isMobile.any() : isDesktop.any()} </b></li>
    
    </ul>

    <li>Navegador : <b> ${isBrowser.any()} </b></li>
    
    `;

    /*if(isBrowser.chrome()){
        $id.innerHTML = `
        
        <p>ESTE CONTENIDO SOLO SE PUEDE VER EN CHROME</p>
        `;
    }
*/
    
    if(isMobile.android()){
        window.location.href = "https://youtube.com";
    }


}
//redirecciones
//contenido exclusivo para diferentes navegadores