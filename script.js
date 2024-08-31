const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const mayusculas = ["A","B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numeros = [1,2,3,4,5,6,7,8,9,0];
const especiales = ["!","¡" ,"#" ,"$" ,"%" ,"&" ,"(" ,")" ,"*" ,"+" ,"," ,"-" ,"." ,"/" ,":" ,";" ,"<" ,"=" ,">" ,"?", "¿","@" ,"[" ,"]" ,"^" ,"_" ,"{" ,"|" ,"}" ,"~"];

const cantCaracteres = document.getElementById("caracteres");
const inputMinusculas = document.getElementById("minusculas");
const inputMayusculas = document.getElementById("mayusculas");
const inputNumeros = document.getElementById("numeros");
const inputEspeciales = document.getElementById("especiales");
const btnGenerar = document.getElementById("btnGenerar");
const btnLimpiar = document.getElementById("limpiar");

const contraGeneradaElement = document.getElementById("contraseñaGenerada");


btnGenerar.addEventListener("click", ()=>{
   if(!inputMinusculas.checked  && !inputMayusculas.checked  && !inputNumeros.checked  && !inputEspeciales.checked ){
       contraGeneradaElement.textContent = "Debes seleccionar al menos una categoria"
       return;    
   }

    if(cantCaracteres.value < 1 || isNaN(cantCaracteres.value)){
        contraGeneradaElement.textContent = "Ingresa la cantidad de caracteres"
        return;
    }

    let caracteres = [];
    if(inputMinusculas.checked) caracteres = caracteres.concat(minusculas);
    if(inputMayusculas.checked) caracteres = caracteres.concat(mayusculas);
    if(inputNumeros.checked) caracteres = caracteres.concat(numeros);
    if(inputEspeciales.checked) caracteres = caracteres.concat(especiales);

    let contraGenerada = "";
    for(let i = 0; i < cantCaracteres.value; i++){
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraGenerada += caracteres[randomIndex];
    }
    
    contraGeneradaElement.textContent = contraGenerada;
    
    
    btnLimpiar.addEventListener("click", ()=>{
        cantCaracteres.value ="";
        inputEspeciales.checked = false;
        inputNumeros.checked = false;
        inputMinusculas.checked = false;
        inputMayusculas.checked = false;
        contraGeneradaElement.textContent = "";
    });

    
    
})
    



