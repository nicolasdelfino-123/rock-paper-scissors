/* let resultadoC;
let resultadoH;

function getComputerChoice() {
    //crea un numero aleatorio entre 0 y 12
    let numero = Math.random() * 12
    
   
    
    if (numero <= 4.0){
        resultadoC = ("piedra")
    }
    else if (numero <= 8.0  ){
        resultadoC = ("papel")
    }
    else{
        resultadoC = ("tijera")
    }

   return resultadoC

}
console.log("resultado computer")
console.log(getComputerChoice())

function getHumanChoice(){
   let choice = prompt("Escriba: Piedra, Papel o Tijera");
   choice = choice.toLowerCase()
   

   if (choice == "piedra" ){
    resultadoH = ("piedra")
}
   else if (choice == "papel"  ){
    resultadoH = ("papel")
}
   else if (choice == "tijera"){
    resultadoH = ("tijera")
}

    return resultadoH

}




let humanScore = 0;
let computerScore = 0;


function playGame(){
   
    let resultadoC = getComputerChoice();
    let resultadoH = getHumanChoice();
    if (resultadoC == "piedra" && resultadoH == "tijera"){
        computerScore += 1
}   else if (resultadoC == "tijera" && resultadoH == "papel"){
        computerScore += 1       
}   else if (resultadoC == "papel" && resultadoH == "piedra"){
        computerScore += 1       
}   else if (resultadoC == resultadoH){
        computerScore += 0
        humanScore += 0
}
    else{
        humanScore += 1
}
    
}

playGame();


console.log("human" + humanScore)
console.log("computer" + computerScore)

function playRound(){
    if (humanScore === 5){
        console.log("Has ganado")
    } else if(computerScore === 5){
        console.log("has perdido")
    }
        
    }
    
playRound()
 */
// Variables globales para las puntuaciones
let humanScore = 0;
let computerScore = 0;

// Función para obtener la elección de la computadora
function getComputerChoice() {
    let numero = Math.random() * 12;
    
    if (numero <= 4.0) {
        return "piedra";
    } else if (numero <= 8.0) {
        return "papel";
    } else {
        return "tijera";
    }
}

// Función para obtener la elección del usuario
function getHumanChoice() {
    let choice = prompt("Escriba: Piedra, Papel o Tijera").toLowerCase();
    
    if (choice == "piedra" || choice == "papel" || choice == "tijera") {
        return choice;
    } else {
        console.log("Elección inválida. Intente de nuevo.");
        return getHumanChoice(); // Recursión para obtener una elección válida
    }
}

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Empate. Ambos eligieron " + humanChoice);
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        console.log("¡Ganaste! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " le gana a " + computerChoice);
        humanScore += 1;
    } else {
        console.log("Perdiste. " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " le gana a " + humanChoice);
        computerScore += 1;
    }
}

// Función para jugar el juego completo en 5 rondas sin bucles
function playGame() {
    // Llamar a playRound 5 veces manualmente
    console.log("Ronda 1:");
    let round1ComputerChoice = getComputerChoice();
    let round1HumanChoice = getHumanChoice();
    playRound(round1HumanChoice, round1ComputerChoice);

    console.log("Ronda 2:");
    let round2ComputerChoice = getComputerChoice();
    let round2HumanChoice = getHumanChoice();
    playRound(round2HumanChoice, round2ComputerChoice);

    console.log("Ronda 3:");
    let round3ComputerChoice = getComputerChoice();
    let round3HumanChoice = getHumanChoice();
    playRound(round3HumanChoice, round3ComputerChoice);

    console.log("Ronda 4:");
    let round4ComputerChoice = getComputerChoice();
    let round4HumanChoice = getHumanChoice();
    playRound(round4HumanChoice, round4ComputerChoice);

    console.log("Ronda 5:");
    let round5ComputerChoice = getComputerChoice();
    let round5HumanChoice = getHumanChoice();
    playRound(round5HumanChoice, round5ComputerChoice);

    // Mostrar las puntuaciones finales
    console.log("Puntuación final - Humano: " + humanScore + ", Computadora: " + computerScore);

    // Determinar el ganador
    if (humanScore === 5) {
        console.log("¡Has ganado el juego!");
    } else if (computerScore === 5) {
        console.log("¡Has perdido el juego!");
    } else {
        console.log("El juego terminó sin un ganador. Revisa los puntos.");
    }
}

// Ejecutar el juego
playGame();


