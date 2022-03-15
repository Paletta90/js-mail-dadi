//Creo due variabili che ricevono un numero da 1 a 6
let dadoUtente = Math.floor((Math.random() * 6) + 1);
let dadoComputer = Math.floor((Math.random() * 6) + 1);

let container = document.getElementById("container");

//Vince utente
if( dadoUtente > dadoComputer){
    container.innerHTML = `Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Vince utente`;
    // console.log(`Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Vince utente`);
}
// Vince computer
else if( dadoUtente < dadoComputer){
    container.innerHTML = `Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Vince computer`;
    // console.log(`Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Vince computer`);
}
// Parità
else{
    container.innerHTML = `Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Parità`;
    // console.log(`Utente: ${dadoUtente} Computer: ${dadoComputer} ---> Parità`)
}