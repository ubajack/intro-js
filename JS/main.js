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

// Création d'un objet
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

// Création d'un objet depuis une fonction
function monObjetEnFonction() {
  this.nom = 'Obj';
  this.numero = 111;
  this.bonjour = () => {
    console.log(`Bonjour, je suis ${this.nom}`);
  };
}

let instanceObjetEnFonction = new monObjetEnFonction();
instanceObjetEnFonction.bonjour();

// Fonction qui s'appelle elle-même
(function () {
  console.log("Cette fonction s'est appelée toute seule");

  (function () {
    console.log('Celle-ci aussi');
  })();
})();

// Fonction de callback appelée après le timeout
function callback() {
  console.log('Fonction appelée en retard');
}

const bonjourEnRetard = (millis) => {
  // La fonction setTimeout retarde l'exécution
  setTimeout(callback, millis);
};

bonjourEnRetard(2000);

console.log('Coucou');
console.log('Coucou');
console.log('Coucou');
console.log('Coucou');
