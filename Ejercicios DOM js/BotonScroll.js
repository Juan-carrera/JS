const d = document;
const w = window;

export default function botonScroll(btn) {

    const $btnScroll = d.querySelector(btn);

    w.addEventListener("scroll",e => { 

        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 900){
            $btnScroll.classList.remove("hidden");
        } else{
            $btnScroll.classList.add("hidden");
        }

        //console.log(w.pageYOffset,d.documentElement.scrollTop)
    });

    d.addEventListener("click",e=>{

        if(e.target.matches(btn)){

            w.scrollTo({
                behavior: "smooth",
                top: 0
            });

        }

    });



}