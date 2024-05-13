import {calculaIndiceLetra, obtenLetra} from './validanif.helper';

export function validarNIF ( numero, letra ) {
const resto = calculaIndiceLetra(numero);

return letra === obtenLetra(resto);
}