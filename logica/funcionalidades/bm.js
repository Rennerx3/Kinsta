
export default function burgerMenu(){
    const d = document;

    let $btn = d.querySelector(".btn"),
        $panel = d.querySelector(".panel"),
        $menu = d.querySelector(".menu");
    
    d.addEventListener("click", e =>{
        if(e.target.matches(".btn") || e.target.matches(".btn *")){
            $panel.classList.toggle("is-active");
        }
    });
}
