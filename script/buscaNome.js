//Função para buscar o nome no Array
function buscaNome(nome) {
    if (alunosENotas[0].includes(nome)) {
      let indice = alunosENotas[0].indexOf(nome)
      notaAluno = alunosENotas[1][indice]
       resultado = document.querySelector("#resultado");
      resultado.textColetntent = `${nome} tem a nota ${notaAluno}. `;
    } else {
      let resultado = document.querySelector("#resultado");
      resultado.textContent = `${nome} não esta na lista `;
    }
  }