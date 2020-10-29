function indiceDoMenorValor (numeros) {
    let indiceMenor = 0;
    for (let key in numeros) {
        if (numeros[indiceMenor] > numeros[key]) {
            indiceMenor = key;
        }
    }
    return indiceMenor;
}

console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]));
