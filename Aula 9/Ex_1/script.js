// 1ª - IDENTIFICAR O ELEMENTO
let botao = document.getElementsByTagName('button') // com tagname

// 2ª - IDENTIFICAR O EVENTO
botao[0].addEventListener('click', clicado)

// 3ª - FAZER A FUNÇÃO
function clicado()
{
    alert('Fui clicado!!')
}