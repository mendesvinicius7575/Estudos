function exibir(){

    
    var mostra = window.document.getElementById('mostrar')


    var pessoa = {
        nome: 'andre',
        idade: 10,
        sexo: 'M'
    }

    let carro = {
        marca: ['Ford', 'Chevrolet', 'Volks'],
        ano: ['1993', '1994', '1995']
    }

    let produtos = {
        nome: [],
        preço: []
    }



    produtos.nome = ['arroz']
    produtos.preço = ['12.20']
    produtos.nome = [...produtos.nome, 'feijão']

    carro.marca = [...carro.marca, 'Porsche']
    carro.ano = [...carro.ano, '2001']
    







    mostra.innerHTML = `Exibindo a Marca: ${carro.marca[1]} <br> Exibindo o Ano: ${carro.ano} `

    mostra.innerHTML = `Marca: ${carro.marca} <br> Ano: ${carro.ano}`
}
