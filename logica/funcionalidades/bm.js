
export default function burgerMenu(){
    const d = document;

    let $btn = d.querySelector(".btn"),
        $panel = d.querySelector(".panel"),
        $menu = d.querySelector(".menu"),
        $search = d.querySelector(".head-input");
    
    d.addEventListener("click", e =>{
        if(e.target.matches(".btn") || e.target.matches(".btn *")){
            $panel.classList.toggle("is-active");
            $search.classList.toggle("is-active");
        }
        
        if(e.target.matches(".menu *")){
            $panel.classList.remove("is-active");
        }
    });
}
