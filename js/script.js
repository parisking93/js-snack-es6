// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bici = [
    {
        nome : 'mountain bike',
        peso : 2
    },
    {
        nome : 'bike',
        peso : 4
    },
    {
        nome : 'gina',
        peso : 1
    }
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//funzione capitalize
const cap = (string) =>  string = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();

let pesoMin = bici[0];

for( let i = 1; i < bici.length; i++) {
    const {peso} = bici[i];
    if (peso < pesoMin.peso) {
        pesoMin = bici[i];
    } 
}
// destructuring
const {nome,peso} = pesoMin;
// template literal
document.getElementById('output1').innerHTML = `la bici che pesa di meno è <strong>${cap(nome)}</strong> e il peso è di <strong>${peso}</strong>kg`;


// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const rand = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const squadre = [
    {
        nomeS : 'juve',
        falli : 0,
        goal : 0
    },
    {
        nomeS : 'inter',
        falli : 0,
        goal : 0
    },
    {
        nomeS : 'milan',
        falli : 0,
        goal : 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function).

for (let i = 0; i < squadre.length;i++) {
    squadre[i].falli = rand(1,100);
    squadre[i].goal = rand(1,5);
}
console.log(squadre);


// let {nomes,falli,goal} = squadre[0];
// console.log(nomes);
