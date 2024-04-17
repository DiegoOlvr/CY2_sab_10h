// 1ª - IDENTIFICAR O ELEMENTO
let elemento = document.getElementById('elemento')

// 2ª - IDENTIFICAR O EVENTO
elemento.addEventListener('focus', focado)
elemento.addEventListener('blur', desfocado)

// 3ª - FAZER A FUNÇÃO
function focado()
{
    elemento.classList.add('focado')
}

function desfocado()
{
    elemento.classList.remove('focado')
}