// 1ª - IDENTIFICAR O ELEMENTO
let elemento = document.getElementById('elemento')


// 2ª - IDENTIFICAR O EVENTO
elemento.addEventListener('dragstart', arrastado)
document.body.addEventListener('dragover', soltar)
document.body.addEventListener('drop', largado)

// 3ª - FAZER A FUNÇÃO
function arrastado()
{
    event.dataTransfer.setData("text/plain", event.target.id)
}

function soltar()
{
    event.preventDefault()
}

function largado()
{
    event.preventDefault()
    let data = event.dataTransfer.getData('text/plain')
    let elemento_arrastado = document.getElementById(data)

    elemento_arrastado.style.left = (event.clientX - elemento_arrastado.offsetWidth / 2) + "px"

    elemento_arrastado.style.top = (event.clientY - elemento_arrastado.offsetHeight / 2) + "px"
}