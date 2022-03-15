let array = [2, 5, 9, "carta", 14, "Teramo", "Torino", "Disco", 1990, "tredici", "15", "Roma", 98];

let container = document.getElementById("container");

container.innerHTML += `<h1>Coda dell'array</h1>`;

//Stampo a video tutti gli elementi dell'array
for (i = 0; i < array.length; i++) {
    container.innerHTML += `<span>${array[i]}</span> -  `
}
// Stampo a video gli ultimi 5 elementi dell'array
for (i = array.length - 5; i < array.length; i++) {
    container.innerHTML += `<div>Posizione ${i + 1}: ${array[i]}</div>`;
}


// Bonus
container.innerHTML += `<h1>Bonus</h1>`;

// Variabile che contiente il numero di elementi da generare
let numElement = Number(prompt("Inserire quanti numeri si vogliono generare"));
// Creo l'array che conterrà tutti i numeri casuali
let randomNumber = [];

// Controllo se ho inserito un numero e maggiore di zero
if (!isNaN(numElement) && numElement > 0) {

    // Mando in stampa quanti numero voglio generare
    container.innerHTML += `<div>Stampo ${numElement} numeri interi causali:</div>`

    // Mando in stampa i numeri generati casualmente
    for (i = 0; i < numElement; i++) {
        randomNumber[i] = Math.floor((Math.random() * 10000) + 1);
        container.innerHTML += `<div>${i + 1} = ${randomNumber[i]}</div>`;
    }
} else {
    alert("Inserire un numero valido")
}

//Extra Bonus
container.innerHTML += `<h1>Extra Bonus</h1>`;

// Variabile che contiene numero di elementi da estrarre dal fondo
let numExtract = Number(prompt("Inserire quanti elementi si voglio estrarre dal fondo"));

// Controllo se il numero di elementi da estrarre non sia maggiore degli elementi stessi
if (numExtract <= numElement) {

    if( numExtract == 1){
        container.innerHTML += `<div>Stampo l'utlimo numero dell'array: </div>`
    }else{
        container.innerHTML += `<div>Stampo gli ultimi ${numExtract} numeri dell'array:</div>`
    }

    for (i = randomNumber.length - numExtract; i < randomNumber.length; i++) {
        container.innerHTML += `<div>Posizione ${i + 1}: ${randomNumber[i]}</div>`
    }
}else{
    alert("Numero inserito troppo grande");
}