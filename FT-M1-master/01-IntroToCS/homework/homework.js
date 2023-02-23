'use strict';

function BinarioADecimal(num) { // viene en forma de string '' mi parametro num si es un 1000 no se sabe si es binario o mil
   let suma = 0
   
   for (let i = 0; i < num.length; i++) {
      suma = suma + num[i] * 2 ** (num.length - 1 - i);
      
   }
   return suma
}

function DecimalABinario(num) {
   let guardarBin = [];
   while (num !== 0 ) {
     let resto = parseInt(num % 2)
      let dividir = Math.floor(num / 2)
      num = dividir;
      guardarBin.push(resto)
   }
   return guardarBin.reverse().join('')

      
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
