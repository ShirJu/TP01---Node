import Persona from './src/models/persona.js'

let nombre= "Shirly";
let apellido= "Jusid";

console.log(nombre + apellido);
console.log(`Hola ${nombre}, tu apellido es ${apellido}`);

let persona= new Persona('Shilry', 18);
persona.print();

