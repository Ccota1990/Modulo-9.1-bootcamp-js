const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
const __CUANTAS_LETRAS = 23;

export const calculaIndiceLetra = (numero) => numero % __CUANTAS_LETRAS;
export const obtenLetra = (indice) => __LETRAS[indice]