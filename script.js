function getComputerChoice() {
    //crea un numero aleatorio entre 0 y 12
    let numero = Math.random() * 12
    let resultado;
   
    
    if (numero <= 4.0){
        resultado = ("piedra")
    }
    else if (numero <= 8.0  ){
        resultado = ("papel")
    }
    else{
        resultado = ("tijera")
    }

   return resultado

}
console.log("resultado computer")
console.log(getComputerChoice())

function getHumanChoice(){
   let choice = prompt("Ingrese un número del 1 al 3");
   let resultadoH;

   if (choice == 1 ){
    resultadoH = ("piedra")
}
   else if (choice == 2  ){
    resultadoH = ("papel")
}
   else if (choice == 3){
    resultadoH = ("tijera")
}

    return resultadoH

}
console.log("resultado human")
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;




