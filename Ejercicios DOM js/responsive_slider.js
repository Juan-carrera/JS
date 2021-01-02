const d = document;

export default function slider(){
    const $nextbtn = d.querySelector(".slider-btns .next");
    const $prebtn = d.querySelector(".slider-btns .prev");
    const $slides = d.querySelectorAll(".slider-slide");
    let i =0;

    d.addEventListener("click",(e) => {
        if(e.target === $prebtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if(i <0){
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }

        if(e.target === $nextbtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if(i >= $slides.length){

                i = 0;
            }

            $slides[i].classList.add("active");
        }
    })
}