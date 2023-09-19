function verificar() {
    var data =new Date()
    var anoAtual = data.getFullYear()
    var anoF = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anoF.value.length == 0 || Number(anoF.value > anoAtual)) {
        alert('[ERROR]--> Verifique os dados inseridos e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = anoAtual - Number(anoF.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked) {
        genero = 'Homem'

        if(idade < 9) {
            img.setAttribute('src', 'imgs/foto-bebe-h.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imgs/foto-jovem-h.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imgs/foto-adulto-h.png')
        } else {
            img.setAttribute('src', 'imgs/foto-idoso-h.png')
        }
       } else if(fsex[1].checked) {
        genero = 'Mulher'
        
        if(idade < 9) {
            img.setAttribute('src', 'imgs/foto-bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imgs/foto-jovem-m.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imgs/foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'imgs/foto-idoso-m.png')
        }

       }
       res.style.textAlign = 'center' 
       res.innerHTML = `O gênero é ${genero} e a idade calculada: ${idade} anos`
       res.appendChild(img)
    }
}