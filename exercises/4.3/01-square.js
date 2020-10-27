let n = 10;
let coluna;
let asterisco = "*";
let linha = ""

for (coluna = 0; coluna < n; coluna +=1) {
    linha = linha + asterisco;
}

for (coluna = 0; coluna < n; coluna +=1) {
    console.log(linha);
}
