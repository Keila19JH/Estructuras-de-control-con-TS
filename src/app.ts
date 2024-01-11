/*
for(let i: number = 0; i <= 10; i++){
    console.log(i);
}
*/

/*
//mostrar los numeros del 10 - 100
for(let i: number = 10; i <= 100; i++){
    console.log(i);
}
*/


/*
//mostrar los numeros del 100 - 10

for(let j: number = 100; j >= 10; j--){
    console.log(j);
}
*/


/*
//mostrar los nuermos del 0 al 100 de 2 en 2
for(let i = 0; i <= 100; i += 2){
    console.log(i);
}
*/

/*
let contador: number = 0;
for(let i: number = 0; i <= 20; i++){
    if(i % 2 !== 0){
        contador +=1;
    }
}
console.log(`Total números impares: ${contador}`);
*/

/*
let palabra: string = 'Hoooooooooolaaaaaa';

let contadorA: number = 0;
let contadorO: number = 0;


for(let i: number = 0; i < palabra.length; i++){
    if(palabra[i] === 'a'){
        contadorA += 1;
    }else if(palabra[i] === 'o'){
        contadorO +=1;
    }
}
console.log(`Total letras A: ${contadorA}`);
console.log(`Total letras O: ${contadorO}`);
*/

/*
// ejercicio1; separar las letras con un ciclo for hasta que encuentres una r
let palabra: string = 'amoroso';
let acumulador: string = '';
for(let i: number = 0; i < palabra.length; i++){
    
    if(palabra[i] === 'r'){
        break;
    }else{
        acumulador+=palabra[i]
    }
    
}
console.log(acumulador)
*/


/*
//ejercicio2; chocolate detener hasta que se encuentre la l

let palabra: string = 'chocolate';
let acumulador: string = '';
for(let i: number = 0; i < palabra.length; i+=1){
    if(palabra[i] === 'l'){
        break;
    }else{
        acumulador += palabra[i];
    }
}
console.log(acumulador); 

*/

/*
//ejercicio3; Extravagancia detener hasta que se encuentre la i

let palabra3: string = 'Extravagancia';
let acumulador: string = '';
for(let i: number = 0; i < palabra3.length; i+=1){
    if(palabra3[i] === 'i'){
        break;
    }else{
        acumulador+=palabra3[i];
    }
}
console.log(acumulador);
*/


/*
//ejercicio4; Bulliciosidad detener hasta encontrar la segunda i
let palabra: string = 'Bulliciosidad';
let acumulador: string = '';
let contador: number = 0; 

for (let j: number = 0; j < palabra.length; j += 1) {
    
    if(palabra[j] === 'i') {
        contador ++;     
    }
    if(contador === 3){
        break;
    }
    acumulador += palabra[j];
}

console.log(acumulador);



/*
let palabra: string = 'Hoooooooooolaaaaaa';

let contadorA: number = 0;
let contadorO: number = 0;


for(let i: number = 0; i < palabra.length; i++){
    if(palabra[i] === 'a'){
        contadorA += 1;
    }else if(palabra[i] === 'o'){
        contadorO +=1;
    }
}
console.log(`Total letras A: ${contadorA}`);
console.log(`Total letras O: ${contadorO}`);
*/


/*
let tabla: number = 2;
for(let i: number =1; i <= 10; i++){
    
    console.log(`${tabla} x ${i} = ${tabla * i}`);
};


let limite: number = 10;
let tablasLimite: number = 4;

for(let i: number = 1; i <= tablasLimite; i++){
   
    for(let j: number = 1; j <= limite; j++){
       
        console.log(`${i} x ${j} = ${i*j}`);

    }
    
    console.log('\n');
};

*/

/*
let vocales: string = 'aeiou';
let palabra: string = 'muercielago';
let contador: number = 0;

for(let i: number = 0; i < vocales.length; i++){

    for(let j: number = 0; j < palabra.length; j++){

        if(vocales[i] === palabra[j]){ // recorre todas las palabras
            contador++;
        }
    }
}
console.log(contador);
*/


let vocales: string = 'aeiou';
let palabra: string = 'muercileago';
let contador: number = 0;


let i: number = 0;
while( i < vocales.length){
    
    let j: number = 0; 
    while( j < palabra.length){
        if(vocales[i] === palabra[j]){
            contador++;
        }
        j++       
    }
    i++    
}
console.log(`El numero de vocales de la palabra ${palabra} es: ${contador}`);  




/*
let i: number = 1; 
while(i <= 10){

    let j: number = 1;
    while(j <= 10){
        console.log(`${i} x ${j} = ${i*j}`);
        j++;
    }

i++;
}
*/