let n1: number = 5;
let n2: number = 2;
let n3: number = 50;
let n4: number = 14;

if(n1 > n2 && n1 > n3 && n1 >n4){
    console.log(`El numero mayor es: ${n1}`);
} else if(n2 > n1 && n2 > n3 && n2 > n4){
    console.log(`El numero mayor es: ${n2}`);
} else if(n3 > n1 && n3 > n2 && n3 > n4){
    console.log(`El numero mayor es: ${n3}`);
}else{
    console.log(`El numero mayor es: ${n4}`);
}