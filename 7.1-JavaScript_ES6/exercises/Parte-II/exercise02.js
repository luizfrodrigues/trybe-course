/* const longestWord = (word) => {
  const phrase = word.split(' '); 
  let biggerWord = '';
  let longest = 0;

  for(let word of phrase) {
    if (word.length > longest) {
      longest = word.length;
      biggerWord = word
    }
  }
  return biggerWord
};

const exemple = longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

console.log(`A maior palavra da frase é: ${exemple}.`); */

const longestWord = word => word.split(' ').sort((a,b) => b.length -a.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

