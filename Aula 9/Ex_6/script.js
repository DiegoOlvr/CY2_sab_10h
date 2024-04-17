// 1ª - IDENTIFICAR O ELEMENTO
let elemento = document.getElementById('elemento')
console.log(elemento)
// 2ª - IDENTIFICAR O EVENTO
window.addEventListener('resize', redimencionado)

// 3ª - FAZER A FUNÇÃO
function redimencionado()
{
    let cor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(cor)   
    elemento.style.backgroundColor = cor
}