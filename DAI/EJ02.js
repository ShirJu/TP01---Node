import  {PI, sumar,restar, multiplicar,sacarCircunferencia} from './src/models/mate.js'
let numero1=2;
let numero2=4;

var total=sumar(numero1,numero2)
console.log(`El resulatado de sumar: ${numero1} y ${numero2}=${total}`);

total=restar(numero1,numero2)
console.log(`El resulatado de restar: ${numero1} y ${numero2}=${total}`);

total=multiplicar(numero1,numero2)
console.log(`El resulatado de multiplicar: ${numero1} y ${numero2}=${total}`);

total=sacarCircunferencia(numero1)
console.log(`Cuando el diametro es: ${numero1} la circunferencia es ${total}`);