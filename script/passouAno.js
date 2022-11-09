//função Passou de Ano
function passouAno(notaAluno){
    if(notaAluno >= 7){
      let resultadoNota = document.querySelector("#resultadoNota")
      resultadoNota.textContent = `Parabéns!!!, você passou de ano`
    }else{
      let resultadoNota = document.querySelector("#resultadoNota")
      resultadoNota.textContent = `você não passou de ano`
    }
  }