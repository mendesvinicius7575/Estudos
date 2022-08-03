var num = document.querySelector('#numInserido')
var btn = document.querySelector('#inserir')
var select = document.querySelector('#seltab')
var res = document.querySelector('#res')
let arr = []




function checarNum(nume, lista){
    if(lista.indexOf(Number(nume)) != -1){
        return true
    }else{
        return false
    }

}

function testNum(nume){
    if(Number(nume) > 0 && Number(nume) <= 100){
        return true
    }else{
        return false
    }
}

function adiciona(){

    if(!checarNum(num.value, arr) && testNum(num.value)){

        arr.push(Number(num.value))
        let item = document.createElement('li')
        item.textContent = `Valor ${num.value} adicionado`
        select.appendChild(item)
        console.log(arr)

    }else{

        window.alert('Invalido ou ja consta na lista')
    }

}



btn.addEventListener('click', function(e){
    adiciona()
    e.preventDefault()
    console.log(arr.indexOf(8))
})







