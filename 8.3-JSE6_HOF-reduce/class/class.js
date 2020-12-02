//apenas for
// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
// for(let i = 0; i < numbers.length; i += 1){
//   sumNumbers = sumNumbers + numbers[i];
// }
// console.log(sumNumbers); // 113

//reduce
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15r

// const numbers = [32, 15, 3, 2, -5, 56, 10];


// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
// };
0
// const sumNumbers = numbers.reduce(getSum, 0);
// console.log(sumNumbers); // 113

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

//função que some todos os números pares do array (filter e reduce)

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumNumber = array => array.filter(number => number % 2 === 0).reduce((cv,number) => cv + number);

// console.log(sumNumber(numbers));

//só usando reduce

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const isPair = (cv, number) => (
//   (number % 2 === 0) ? cv + number : cv);

// const sumNumbers =  (array) => array.reduce(isPair, 0);

// console.log(sumNumbers(numbers));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
]

// const getBestClass = (acc,materia) => (acc.nota > materia.nota) ? acc : materia;

const reportBetter = (students) => {
  return students.map((student) => {
    return {
      name: `${student.nome} ${student.sobrenome}`,
      materia: student.materias.reduce((acc,materia) => (acc.nota > materia.nota) ? acc : materia).name,
      nota: student.materias.reduce((acc,materia) => (acc.nota > materia.nota) ? acc : materia).nota
    };
  });
};

console.log(reportBetter(estudantes));

let arr = [1, 2, 0, 1, 2, 3, 5, 6, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => { (init[init.length - 1] !== current) ? init.push(current) : 0;
    return init;
}, []);
console.log(result); //[1,2,3,4,5]