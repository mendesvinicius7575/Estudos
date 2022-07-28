let mensagem = 'ola caras'
let mensagem2 = 'hahaha'

document.write(`Essa usa crase ${mensagem}`)
document.write("<p> Essa usa aspas " + mensagem2 + "</p>")

let produtos = ['Arroz','feijao', 'batata']
var codigos = Array(10, 20, 30)

document.write(`Lista: ${produtos} `)

produtos.push('pao')

document.write(`<p>Lista: ${produtos} </p>`)

produtos.splice(2,1)

document.write(`<p>Lista: ${produtos} </p>`)

var numE = produtos.length;

document.write(numE)

document.write(`<p>Lista: ${produtos[2]} </p>`)


