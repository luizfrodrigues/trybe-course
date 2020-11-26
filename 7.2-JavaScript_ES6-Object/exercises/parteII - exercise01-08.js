const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//exercício 1

const newShift = (obj, key, value) => (obj[key] = value);
newShift(lesson2, 'turno', 'manhã');

console.log(lesson2);

//exercício 2
const listOfKeys = (obj) => Object.keys(obj);

console.log(listOfKeys(lesson3));

//exercício 3
const objectLength = (obj) => Object.keys(obj).length;

console.log(objectLength(lesson1));

//exercício 4
const objectValue = (obj) => Object.values(obj);

console.log(objectValue(lesson2));

//exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//exercício 6
const totalOfStudents = (obj) => {
  let total = 0;
  for(students in obj) {
    total += obj[students].numeroEstudantes
  }
  return total;
}

console.log(totalOfStudents(allLessons))

//exercício 7
const getValueByNumber = (obj,number) => Object.values(obj)[number];

console.log(getValueByNumber(lesson3, 1));

//exercício 8
const verifyPair = (obj, key, value) => {
  const pair = Object.entries(obj);
  let equal = false;
  for(index in pair) {
    if(pair[index][0] === key && pair[index][1] === value) {
      equal = true;
    }
  };
  return equal;
}

console.log(verifyPair(lesson1,'professor','Carlos'));

// bonus 1
const totalMathStudants = (obj) => {
  let total = 0;
  for (index in obj) {
    if (obj[index].materia === 'Matemática') {
      total += obj[index].numeroEstudantes;
    }
  }
  return total;
}

console.log(`O total de estudantes que assistiram às aulas de Matemática é: ${totalMathStudants(allLessons)}.`);

//bonus 2
const totalProf = (obj, name) => {
  let total = 0;
  let report = {};
  let classes = [];
  for (index in obj) {
    if (obj[index].professor === name) {
      classes.push(obj[index].materia);
      total += obj[index].numeroEstudantes;
    }
  }
  report['professor'] = name;
  report['aulas'] = classes;
  report['estudantes'] = total;
  return report;
};

console.log(totalProf(allLessons,'Maria Clara'));