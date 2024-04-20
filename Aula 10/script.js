let hora = window.prompt('Digite uma hora')
let titulo = document.getElementById('horario')
let saudacao = document.getElementById('saudacao')
let imagem = document.getElementById('foto')

titulo.innerText = `Agora são ${hora} horas`

if (hora >= 5 && hora <= 12)
{
    window.document.body.style.backgroundColor = 'yellow'
    saudacao.innerText = 'Bom dia'
    imagem.src = ''
}
else if (hora <= 18)
{
    window.document.body.style.backgroundColor = 'red'
    saudacao.innerText = 'Boa tarde'
    imagem.src = ''
}
else {
    window.document.body.style.backgroundColor = 'orange'
    saudacao.innerText = 'Boa noite'
    imagem.src = ''
}