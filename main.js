/*
const maConstante = 'constante'; // constant

console.log(maConstante);
console.log(maVariable);
// console.log(monAutreVariable);

var maVariable = 'variable'; // variable
let monAutreVariable = 'autrevariable'; // variable

// Commentaire

hello();

function hello() {
  console.log('hello!');
}

var helloFleche = (nom) => {
  console.log(`Hello ${nom}`);
};

helloFleche('George');

let ex = `${maConstante} et ${maVariable}`;
let ex1 = '${maConstante} et ${maVariable}';

console.log(ex);
console.log(ex1);
*/

const monObjet = {
  nom: 'Objet',
  qi: 200,
  bonjour: () => {
    console.log('Bonjour');
  },
  autreObjet: {
    autrenom: 'Nom',
  },
};

console.log(monObjet);
console.log(monObjet.nom);
monObjet.bonjour();
