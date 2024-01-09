// INSTRUCCIONES: RESOLVER CADA UNO DE LOS EJERCICIOS, 
// TIENEN QUE TENER SU TIPO DE DATO CORRECTO, ASI COMO USO DE CLEAN CODE
//  HERRAMIENTES NECESARIAS...
// STRINGS, METODOS DE STRINGS, NUMBER, OPERADORES LOGICOS, CONDICIONALES, OPERADORES MATEMATICOS *, /, +, -, %, 
// METODOS MATEMATICOS, Math


// Ejercicio 1
// Se trata de escribir un script que diga si un número es par o es impar.
// Recordemos que un número es par si al dividirlo por 2 da como resto 0. utilizar el operador % modulo o resto de la division

let numero1: number = 5;
let operacion: number = numero1 % 2;

if(operacion !== 0){
    console.log(`El residuo del número impar ${numero1} es: ${operacion}`);
}else{
    console.log(`El residuo del número par ${numero1} es: ${operacion}`);
}
//console.log(numero1 % 2);



/*
// Ejercicio2
// Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

let numero: number = 0;
//console.log(numero)
if(numero >= 0){
    console.log(`Número ${numero} es positivo`);
}else{
    console.log(`Número ${numero} es negativo`);
}
*/
/*
// Ejercicio3
// En este ejercicio dividir dos números enteros y devolver el cociente de dividir el primero entre el segundo, 
// pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
let numero1: number = 0;
let numero2: number = 1; //si es diferente de 0 entonces mostrara el resultado
let operacion_matematica: number = numero1 / numero2;

if(numero2 !== 0){
    console.log(`El resultado de la división es: ${numero1 / numero2}`);
}else{
    console.log('No se puede realizar la división')
}

//console.log(operacion_matematica);

*/


//Ejercicio4
// Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. 
// Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
let articulo1: string = 'hotdog'; //cambiar valor a otro que no sea vino o cerveza para probar los casos de la barra
let articulo2: string = 'cerveza';
//let articulo3: string = 'refresco';
//let articulo4: string = 'agua';
let barraBebida: string = '¡Hola!, bienvenido a la barra de bebidas'; 
let barraComida: string = '¡Hola!, bienvenido a la barra de comida';


//console.log(articulo1, articulo2);

if(articulo1 === 'vino' || articulo2 === 'cerveza' /*articulo3 === 'refresco' || articulo4 === 'agua'*/){
    console.log(barraBebida);
}else{
    console.log(barraComida);
}


//Ejercicio5 En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
// Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
// si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

let longitud:  number = 150 //km
let tiempo :   number = 3 //hrs
let operacion_velocidad: number = longitud / tiempo; 
if(operacion_velocidad >=40 && operacion_velocidad <=60 ){
    console.log('El conductor ha pasado la prueba')
}else{
    console.log('El conductor no ha pasado la prueba')

}


//console.log(operacion_velocidad);

