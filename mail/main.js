// Array che contiene le email
let listMail = ["davide.dipietro3@gmail.com", "andrea.salvatorelli90@hotmail.it", "emanuele.dipietro94@studio.unibo.it"];
console.log(listMail);

// Variabi che contiene la mail inserita
let userMail = document.getElementById("email");

//Variabile del button
let verifica = document.getElementById("verifica");

//Variabile del risultato finale
let container = document.getElementById("container");

//Al click faccio uscire la risposta
verifica.addEventListener('click',
    function () {

        for (i = 0; i <= (listMail.length - 1); i++) {

            //Controllo se la mail inserita è presente nell'array. Se si blocco il ciclo
            if (userMail.value == listMail[i]) {
                container.innerHTML = `L'email inserita (${userMail.value}) è presente`;
                break;
            // Se arrivo al controllo dell'ultima posizione senza trovare la mail inserita stampo email non trovata
            } else if (i == (listMail.length - 1)) {
                container.innerHTML = `L'email inserita (${userMail.value}) non è presente`;
            }

        }
    }
)