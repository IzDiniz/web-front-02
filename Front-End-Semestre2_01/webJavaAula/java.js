
// = Atribuí valor
// == compara só valor, entende só o valor, number
// === compara valor e resultado, e compara o tipo, se é number e string

// forma de usar if/else, = se algo 'if(x=""){}', se for 'else if{}', se não final 'else{}' 

// switch/case
// funções = function(criar parametros) - serve para criar blocos de códigos reutilizavel
// arrow function = maneira simplificada de criar funções exp: const somar =("Colocar parametros")=>

// Calculadora de IMC, peso(kg)/altura(m) * altura(m) ou altura**2
// mostrar peso se está com baixo peso, médio, sobrepeso, obesidade
// const <input type="text" />

const altura = prompt("Digite sua altura")
const peso = prompt("Digite a sua pesagem")

console.log(`O seu peso é ${peso}, A sua altura é ${altura}`);

function retornoConta(peso, altura) {
    const resultado = peso/altura**2
    return resultado

    if (resultado < 18,5) {
        console.log(retornoConta(peso, altura), 'Baixo peso')        
    }
}
console.log(retornoConta(peso, altura))


