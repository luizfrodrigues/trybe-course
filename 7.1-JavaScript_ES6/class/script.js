function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  
}
console.log(userEmail);
userInfo();


if (true) {
  // inicio do escopo do if
  const userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20


const userName = "Isabella";
const userName = "Lucas";
console.log(userName); // Resultado: Lucas

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const contaPalavra = frase => frase.split(' ').length;

console.log(contaPalavra('Fala Tribo, beleza?'));

const soma = (num1, num2) => num1 + num2;

console.log(soma(4,3));

const objetoPessoa = (nome, idade) => ({nome:nome, idade: idade});

console.log(objetoPessoa('Luiz', 40));