/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Nico",
    firstTest: 7,
    secondTest: 8,
  },
  {
    name: "Gabi",
    firstTest: 10,
    secondTest: 9.5,
  },
  {
    name: "Benício",
    firstTest: 4.3,
    secondTest: 7,
  },
  {
    name: "Antonella",
    firstTest: 3,
    secondTest: 8,
  },
]

function average(firstTest, secondTest) {
  let average = ((firstTest + secondTest) / 2).toFixed(1)
  return average
}

function getStudentAverage(student) {
  const studentAverage = average(student.firstTest, student.secondTest)
  return studentAverage
}

for (let student of students) {
  const studentAverage = getStudentAverage(student)

  if (studentAverage >= 7) {
    alert(
      `
      A média do(a) aluno(a) ${student.name} é: ${studentAverage}!
      Parabéns ${student.name}! Você foi aprovado no 14ª concurso.
      `
    )
  } else {
    alert(
      `
      A média do(a) aluno(a) ${student.name} é: ${studentAverage}.
      Não foi dessa vez ${student.name}. Boa sorte na próxima tentativa.
      `
    )
  }
}
