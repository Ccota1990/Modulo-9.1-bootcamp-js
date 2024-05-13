import "./style.css";


const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
const __CUANTAS_LETRAS = 23;
const resto = numero % __CUANTAS_LETRAS;
const letraCalculada = __LETRAS[resto];
console.log(letraCalculada === letra);
