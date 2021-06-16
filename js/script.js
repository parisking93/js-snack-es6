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