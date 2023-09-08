const d = document;

export default function validarFormulario(){

const $inputs = d.querySelectorAll(".form-elements [required]");

    $inputs.forEach(input => {
        const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup", e => {
        if(e.target.matches(".form-elements [required]")){
            let $input = e.target,
                pattern = $input.pattern;

        if(pattern && $input.value !== ""){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) 
            ? d.getElementById($input.name).classList.add("is-active") 
            : d.getElementById($input.name).classList.remove("is-active")
        }

        if(!pattern){
            return $input.value = "" 
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active")
        }
        }       
    });


}