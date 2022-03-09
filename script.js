function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#textano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero ='homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', './imagens/criancahomem.png')        
            } else if(idade < 21){
                img.setAttribute('src', './imagens/jovemhomem.png')    
            } else if(idade < 50){
                img.setAttribute('src', './imagens/adultohomem.png')    
            } else{
                img.setAttribute('src', './imagens/idoso.png')    
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', './imagens/criancamulher.png')        
            } else if(idade < 21){
                img.setAttribute('src', './imagens/jovemmulher.png')        
            } else if(idade < 50){
                img.setAttribute('src', './imagens/adultomulher.png')   
            } else{
                img.setAttribute('src', './imagens/idosa.png')   
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos um ${genero} que possui ${idade} anos em ${ano}`
        res.appendChild(img)
    }
}