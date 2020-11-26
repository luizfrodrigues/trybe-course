const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenedArray = (array) => {
  const ordened = oddsAndEvens.sort((a,b) => a-b);
  return ordened;
}
console.log(`Os números ${ordenedArray(oddsAndEvens)} se encontram ordenados de forma crescente.`);

console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente.`);

