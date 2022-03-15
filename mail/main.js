// Array che contiene le email
let listMail = ["davide.dipietro3@gmail.com", "andrea.salvatorelli90@hotmail.it", "emanuele.dipietro94@studio.unibo.it"];
// Variabi che contiene la mail inserita
let userMail = prompt("Inserisci la tua mail");

let container = document.getElementById("container");

for(i = 0; i <= (listMail.length - 1); i++){

    //Controllo se la mail inserita è presente nell'array. Se si blocco il ciclo
    if (userMail == listMail[i]){
        container.innerHTML = `L'email inserita (${userMail}) è presente`;
        // console.log("Email presente");
        break;
    //Se arrivo al controllo dell'ultima posizione senza trovare la mail inserita stampo email non trovata
    }else if(i == (listMail.length - 1)){
        container.innerHTML = `L'email inserita (${userMail}) non è presente`;
        // console.log("Email non presente");
    }

}