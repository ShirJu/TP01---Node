import {getCurrency } from "country-currency-map"

let monedaDelPais, codigoPais;
codigoPais = 'USD';
monedaDelPais = obtenerMoneda(codigoPais);

console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);

function obtenerMoneda(pais){

    var monedaDelPais
    monedaDelPais=getCurrency(pais); 

   return monedaDelPais
}