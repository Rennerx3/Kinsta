const d = document;


export default function slide(){
   let $slide = d.querySelectorAll(".slider-slide"),
       $prevBtn = d.querySelector(".prev"),
       $nextBtn = d.querySelector(".next"),
       $start = d.querySelector(".start"),
       $middle = d.querySelector(".middle"),
       $final = d.querySelector(".final"),
       $sliderP = d.querySelectorAll(".circle-button");

       let i = 0;   

    d.addEventListener("click", e=>{
        if(e.target === $prevBtn){
            e.preventDefault();
            $slide[i].classList.remove("active");
            $sliderP[i].classList.remove("active");
            i--;

            if( i < 0){
                i = $slide.length - 1;
            }

            $slide[i].classList.add("active");
            $sliderP[i].classList.add("active");
        }
        if(e.target === $nextBtn){
            e.preventDefault();
            $slide[i].classList.remove("active");
            $sliderP[i].classList.remove("active");
            i++;
            
            if(i >= $slide.length){
                i = 0;
            }
            $slide[i].classList.add("active");
            $sliderP[i].classList.add("active");
        }

        if(e.target === $start){
            e.preventDefault();
            $slide[0].classList.add("active");
            $slide[1].classList.remove("active");
            $slide[2].classList.remove("active");
            $start.classList.add("active");
            $middle.classList.remove("active");
            $final.classList.remove("active");
            i = 0;

        }
        if(e.target === $middle){
         e.preventDefault();
         $slide[1].classList.add("active");  
         $slide[0].classList.remove("active");
         $slide[2].classList.remove("active"); 
         $middle.classList.add("active");
         $start.classList.remove("active");
         $final.classList.remove("active");
         i = 1;
        }
        
        if(e.target === $final){
            e.preventDefault();
            $slide[2].classList.add("active");
            $slide[1].classList.remove("active");
            $slide[0].classList.remove("active"); 
            $final.classList.add("active");
            $middle.classList.remove("active");
            $start.classList.remove("active"); 
            i = 2;
        }
    })
}