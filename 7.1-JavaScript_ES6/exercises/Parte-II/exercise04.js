const abilities = ['Linux', 'GIT', 'HTML', 'JS', 'CSS'];

function buildSkillsPhrase(paramOne) {
  const fun1 = (paramInner) =>
`Tryber, ${paramInner} aqui!

Tudo bem?`;

  let result = `${fun1(paramOne)}
  
Minhas cinco principais habilidades são:`;

  abilities.forEach((skill) => (result = 
    `${result} 
    
    <> ${skill}`));

  result = `${result} #goTrybe`;

  return result;
}

console.log(buildSkillsPhrase('Luiz Fernando'));