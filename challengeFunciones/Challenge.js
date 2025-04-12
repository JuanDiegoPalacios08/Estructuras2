function esParOImparRegular(numero){
    if(numero % 2 === 0){
        return "El numero es par.";
    }else{
        return "El numero es impar.";
    }
}

const esParoImparRegularFlecha = (numero) =>{
    return numero % 2 === 0 ? "El numero es par." : "El numero es impar."
}

console.log(esParOImparRegular(4));
console.log(esParOImparRegular(7));
console.log(esParoImparRegularFlecha(8));
console.log(esParoImparRegularFlecha(3));

