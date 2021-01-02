const ls = localStorage;

export function themeDOM(btn,classDark){


    const $themebtn = document.querySelector(btn);
    const selectores = document.querySelectorAll("[data-dark]");
    let moon = "🌑";
    let sun = "☀️";

    const ligthMode = () =>{

        selectores.forEach(el => el.classList.remove(classDark));
         $themebtn.textContent = moon;
         ls.setItem("theme","light");
    }

    const darkMode = () => {
        selectores.forEach(el => el.classList.add(classDark));
        $themebtn.textContent = sun;
        ls.setItem("theme","dark");
    }

    document.addEventListener("click",e=>{

        if(e.target.matches(btn)){

            if($themebtn.textContent === moon){

                darkMode();
               
            }
            else{
                ligthMode();
            }
        }


    });

    document.addEventListener("DOMContentLoaded",e=>{

        if(ls.getItem("theme") === null){

            ls.setItem("theme","light");
        }

        if(ls.getItem("theme") === "light"){

            ligthMode();
        }

        if(ls.getItem("theme") === "dark"){

            darkMode();
        }

    });
}