let idade;

function teste(anoNascimento, AnoAtual) {

    idade = AnoAtual - anoNascimento
    return `Sua idade é ${idade}`
}


function habilitação(idade) {
    if (idade < 18) {
        return `sua idade é ${idade} anos, ainda é menor que 18 anos, não pode tirar habilitação`
    } else {
        return `sua idade é ${idade} anos, você já pode tirar habilitação`
    }

}

teste(1986, 2022)
console.log(habilitação(idade))