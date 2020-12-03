//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. 


const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((sum, name) => 
    sum + name.split('').reduce((sumSplit, caracter) => 
      (caracter === 'a' || caracter === 'A') ? sumSplit + 1 : sumSplit, 0), 0);
}

console.log(containsA(names));

assert.deepStrictEqual(containsA(), 20);