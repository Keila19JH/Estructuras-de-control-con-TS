let number1:number = 15;
let number2:number = 12;
let number3:number = 16;

if(number1 > number2 && number1 > number3){
    console.log(`El numero mayor es ${number1}`);
} else if(number2 > number1 && number2 > number3){
    console.log(`El numero mayor es ${number2}`);
}else{
    console.log(`El numero mayor es ${number3}`);
}



//let division:number = +(1/3).toFixed(2);

let division:number = Number( (1/3).toFixed(2) );
console.log(division);