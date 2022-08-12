let num = document.querySelector('#num')
let exibe = document.querySelector('#exibe')
let min = 1
let max = 10
let msg = '';

function exibirNaTela(){
    //recebe o num digitado
    let numero = Number(num.value)

    //gera numero secreto
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    //pega o numero gerado
    let numeroRandom = getRandomIntInclusive(min, max)

    //testa se o num inserido esta dentro do limite 0-10
    function checaNumInserido(){
        if(numero >= 0 && numero <= 10){
            comparar()
            //exibir o numero
            exibe.textContent = msg
        }else{
            //mensagem de erro
            exibe.textContent = `Você não digitou um número válido`
            num.value = ''
        }
    }
    


    //comparar e da a mensagem
    function comparar(){
         //compara os numeros
         if(numero === numeroRandom){
            msg = `${numero} é igual a ${numeroRandom}`
        }else{
            msg = `${numero} é diferente a ${numeroRandom}`
        }
    }

    checaNumInserido()


    
}