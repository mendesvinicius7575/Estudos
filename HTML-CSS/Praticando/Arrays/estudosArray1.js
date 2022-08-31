const listaDeJogos = [
    'Crash',
    'Sonic',
    'Spyro',
    'DragonBall'
]

for(let contador = 0; contador < listaDeJogos.length; contador++){
    console.log(`${contador+1}. ${listaDeJogos[contador]}`);
}

console.log("----------")

const listaDois = [
    {nome: "Andrea", posicao: "faxineira"},
    {nome: "Roger", posicao: "Motorista"},
    {nome: "Lucas", posicao: "Lutador"},
    {nome: "Ola", posicao: "faxineira"},
    {nome: "Sera", posicao: "Corredor"},

];


listaDois.push({nome: "Roberval", posicao: "Lutador"})

for(let cont in listaDois){
    console.log("Nome: " + listaDois[cont].nome + " E Ocupação: " + listaDois[cont].posicao)
}
