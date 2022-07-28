function exibir(){

    
    var mostra = window.document.getElementById('mostrar')


    var pessoa = {
        nome: 'andre',
        idade: 10,
        sexo: 'M'
    }

    var ano = 1995;
    var anon = [1998, 1997, 1999];

    let carro = {
        marca: ['Ford', 'Chevrolet', 'Volks'],
        ano: ['1993', ano, anon[2]]
    }











    mostra.innerHTML = `Exibindo a Marca: ${carro.marca[1]} <br> Exibindo o Ano: ${carro.ano} `

}
