function checar(){
    var anoNasc = document.getElementById('anoNasc')
    var data = new Date();
    var anos = data.getFullYear();
    idade = anos - Number(anoNasc.value);
    var resp = document.getElementById('resp')

    var sex = document.getElementsByName('sex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(sex[0].checked){
        genero = 'Homem'
        if(idade = 0 && idade <=12){
            //criança
        }else if(idade < 18){
            //adolescente
        }else if(idade >= 18 && idade < 50){
            //adulto
        }else{
            //idoso
        }
    }else if(sex[1].checked){
        genero = 'Mulher'
    }
    resp.innerHTML = `Você é ${genero} e sua idade é: ${idade} Anos`

}
