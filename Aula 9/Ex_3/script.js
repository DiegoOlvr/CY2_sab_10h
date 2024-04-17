// 1ª - IDENTIFICAR O ELEMENTO
let div = document.getElementById('div') // com tagname

// 2ª - IDENTIFICAR O EVENTO
div.addEventListener('mouseover', entrar)

// 3ª - FAZER A FUNÇÃO
function entrar()
{
    div.innerText = 'sei lá...'
}