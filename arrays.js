//Criando uma Array
const notas = [10, 6.5, 8];
//adiciona no final da linha em uma array
notas.push(7, 5);
//console.log(notas.length);
//console.log(notas);
// Deletas o ultimo elemento em uma array
notas.pop();
//console.log(notas.length);
//console.log(notas);

//Dividir a Sala com os alunos

const listaAluno = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

//Fatiar a lista, esse não altera a const, por isso precisa criar uma nova const
const sala1 = listaAluno.slice(0, listaAluno.length / 2);
const sala2 = listaAluno.slice(listaAluno.length / 2);
//console.log(sala1);
//console.log(sala2);
//limpar ou juntar, serve para deletar algum item
sala1.splice(1, 2);

console.log(sala1);

//Função para somar a média
function media(nota1, nota2, nota3, nota4) {
  const mediaAno = (nota1 + nota2 + nota3 + nota4) / notas.length;
  console.log(mediaAno);
  if (mediaAno < 7) {
    console.log(
      `Você tirou média ${mediaAno}; Reprovou de Ano, tente mais no próximo ano`
    );
  } else {
    console.log(`PARABÈNS, sua média foi ${mediaAno}; você passou de ano`);
  }
}

//Chamando a função
//media(notas[0], notas[1], notas[2], notas[3]);
