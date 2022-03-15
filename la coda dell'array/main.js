let array = [2, 5, 9, "carta", 14, "Teramo", "Torino", "Disco", 1990, "tredici", "15", "Roma", 98];

let container = document.getElementById("container");

//Stampo a video tutti gli elementi dell'array
for(i = 0; i < array.length; i++){
    container.innerHTML += `<span>${array[i]}</span> -  `
}
// Stampo a video gli ultimi 5 elementi dell'array
for(i = array.length - 5; i < array.length; i++){
    container.innerHTML += `<div>Posizione ${i + 1}: ${array[i]}</div>`;
}