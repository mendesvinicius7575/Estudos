var numDeA = 5;
let notas = new Array()
notas = [5,6,8,7,2]
let cont = 0;

for(var i in notas){
    cont = cont + notas[i]
}

let media = cont/numDeA

console.log(media)