var lut = {
    lutador: 'Vlad',
    nacionalidade: 'Russo',
    idade: 40,
    peso: 106,
    altura: 1.80

}

document.write(`<div align="center"><h1>Lutador</h1>
                <p>Lutador: ${lut.lutador}</p>
                <p>Nacionalidade: ${lut.nacionalidade}</p>
                <p>Idade: ${lut.idade}</p>
                <p>Peso: ${lut.peso}</p>
                <p>Altura: ${lut.altura}</div>`)

let data = new Date();
let day = data.getDay();
let mouth = data.getMonth();
let year = data.getFullYear();

document.write(`<h1>${day}/${mouth}/${year}</h1>`)

var frase = [`Seja curioso`, `Arroz com batata`, `Busca`]
var frasecomposta = [...frase, `ola mundo`, `pijamas listrados`]

document.write(frasecomposta)

