import slide from "./funcionalidades/slide.js";
import burgerMenu from "./funcionalidades/bm.js";
import validarFormulario from "./funcionalidades/validarForm.js";

const d = document;


d.addEventListener("DOMContentLoaded", e =>{
    slide();
    burgerMenu();
    validarFormulario();
});