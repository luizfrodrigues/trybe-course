function indiceDoMaiorValor (numeros) {
    let indiceMaior = 0;
    for (let key in numeros) {
        if (numeros[indiceMaior] < numeros[key]) {
            indiceMaior = key;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));