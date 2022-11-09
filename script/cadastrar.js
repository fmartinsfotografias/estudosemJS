//Cadastrando Novo Aluno
let captura2 = document.querySelector("#botaoCadastro");
captura2.addEventListener("click", function (e) {
  e.preventDefault();

  let input = document.querySelector("#cadastraNome");
  let dados = input.value;
  listaAlunos.push(dados);
  console.log(listaAlunos);
  let resultado = document.querySelector("#resultadoCadastro");
  resultado.textContent = `${dados} adicionado com sucesso. `;
});

//Cadastrando Nota
let captura3 = document.querySelector("#botaoNota");
captura3.addEventListener("click", function (e) {
  e.preventDefault();

  let input = document.querySelector("#cadastraNota");
  let dados = input.value;
  notaAlunos.push(dados);
  console.log(notaAlunos);
  let resultado = document.querySelector("#resultadoCadastroNota")
  resultado.textContent = `Nota ${dados} adicionada com sucesso`
});
